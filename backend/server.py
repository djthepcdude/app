from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(
    title="Mafi D Website API",
    description="Backend API for Mafi D hip-hop artist website",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Email Subscription Model
class SubscriptionCreate(BaseModel):
    email: EmailStr

class Subscription(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    active: bool = True


# Contact Form Model
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
    inquiry_type: str = "general"

class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    inquiry_type: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    read: bool = False


# Routes
@api_router.get("/")
async def root():
    return {"message": "Mafi D Website API", "status": "online"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Email Subscription Endpoints
@api_router.post("/subscribe", response_model=Subscription)
async def subscribe_email(input: SubscriptionCreate):
    # Check if email already exists
    existing = await db.subscriptions.find_one({"email": input.email}, {"_id": 0})
    if existing:
        if existing.get('active'):
            raise HTTPException(status_code=400, detail="Email already subscribed")
        else:
            # Reactivate subscription
            await db.subscriptions.update_one(
                {"email": input.email},
                {"$set": {"active": True, "subscribed_at": datetime.now(timezone.utc).isoformat()}}
            )
            existing['active'] = True
            return Subscription(**existing)
    
    subscription = Subscription(email=input.email)
    doc = subscription.model_dump()
    doc['subscribed_at'] = doc['subscribed_at'].isoformat()
    
    await db.subscriptions.insert_one(doc)
    return subscription


@api_router.get("/subscriptions", response_model=List[Subscription])
async def get_subscriptions():
    subscriptions = await db.subscriptions.find({"active": True}, {"_id": 0}).to_list(1000)
    
    for sub in subscriptions:
        if isinstance(sub['subscribed_at'], str):
            sub['subscribed_at'] = datetime.fromisoformat(sub['subscribed_at'])
    
    return subscriptions


# Contact Form Endpoints
@api_router.post("/contact", response_model=Contact)
async def submit_contact(input: ContactCreate):
    contact = Contact(**input.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contacts.insert_one(doc)
    return contact


@api_router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    
    for contact in contacts:
        if isinstance(contact['created_at'], str):
            contact['created_at'] = datetime.fromisoformat(contact['created_at'])
    
    return contacts


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
