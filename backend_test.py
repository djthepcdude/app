import requests
import sys
from datetime import datetime
import json

class MafiDAPITester:
    def __init__(self, base_url="https://hip-hop-klick.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:200]
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "api/", 200)

    def test_email_subscription(self):
        """Test email subscription endpoint"""
        test_email = f"test_{datetime.now().strftime('%H%M%S')}@example.com"
        success, response = self.run_test(
            "Email Subscription",
            "POST",
            "api/subscribe",
            200,
            data={"email": test_email}
        )
        return success, response

    def test_contact_form(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": f"test_{datetime.now().strftime('%H%M%S')}@example.com",
            "subject": "Test Contact",
            "message": "This is a test message from the automated test suite.",
            "inquiry_type": "general"
        }
        success, response = self.run_test(
            "Contact Form",
            "POST",
            "api/contact",
            200,
            data=contact_data
        )
        return success, response

    def test_get_subscriptions(self):
        """Test getting subscriptions (admin endpoint)"""
        return self.run_test("Get Subscriptions", "GET", "api/subscriptions", 200)

    def test_get_contacts(self):
        """Test getting contacts (admin endpoint)"""
        return self.run_test("Get Contacts", "GET", "api/contacts", 200)

    def test_status_check(self):
        """Test status check endpoint"""
        status_data = {
            "client_name": "test_client"
        }
        success, response = self.run_test(
            "Status Check",
            "POST",
            "api/status",
            200,
            data=status_data
        )
        return success, response

def main():
    print("🎵 Starting Mafi D Website API Tests 🎵")
    print("=" * 50)
    
    tester = MafiDAPITester()

    # Test API availability
    print("\n📡 Testing API Availability...")
    api_available, _ = tester.test_api_root()
    
    if not api_available:
        print("❌ API is not available. Stopping tests.")
        return 1

    # Test core functionality
    print("\n📧 Testing Email Subscription...")
    email_success, email_response = tester.test_email_subscription()

    print("\n📝 Testing Contact Form...")
    contact_success, contact_response = tester.test_contact_form()

    print("\n📊 Testing Status Check...")
    status_success, status_response = tester.test_status_check()

    # Test admin endpoints
    print("\n👥 Testing Admin Endpoints...")
    subs_success, _ = tester.test_get_subscriptions()
    contacts_success, _ = tester.test_get_contacts()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"   - {failed.get('test', 'Unknown')}: {failed}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())