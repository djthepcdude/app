# Mafi D Website - Product Requirements Document

## Original Problem Statement
Build a modern, industry-standard website for a hip-hop artist named Mafi D (aka Mafi Klick / Mafia Klick) from Seattle, Washington. The site should present the artist as a serious recording artist, make music and videos accessible, convert visitors to fans, enable bookings/press inquiries, and rank well for Seattle hip-hop searches.

## Architecture & Tech Stack
- **Frontend**: React 19 + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI + MongoDB
- **Styling**: Dark urban aesthetic with Seattle green (#10B981) accent
- **Typography**: Anton (headings), Manrope (body)

## User Personas
1. **Hip-Hop Fans**: Looking to discover/stream music, watch videos
2. **Seattle Locals**: Community connection, local shows
3. **Promoters/Venues**: Booking inquiries for shows
4. **Press/Blogs**: Looking for press kit, bios, contact info
5. **Labels/A&R**: Scouting talent, reviewing catalog

## Core Requirements (Static)
- [x] Responsive mobile-first design
- [x] SEO-optimized with schema markup
- [x] Music streaming embeds (Spotify, Apple Music)
- [x] Video embeds (YouTube)
- [x] Email signup for fan engagement
- [x] Contact/booking form
- [x] Press kit (EPK) page

## What's Been Implemented
**Date: 2026-02-05**

### Pages Completed:
1. **Home** - Hero section with Seattle skyline, featured music embeds, latest video, artist intro, email signup
2. **Music** - Streaming platform links, Spotify/Apple Music embeds, discography layout
3. **Videos** - YouTube embed, video grid placeholders
4. **About** - Artist bio, Seattle/Central District roots, press bios
5. **Tour** - Upcoming/past shows, booking CTA
6. **Shop** - Merch placeholders (hoodies, tees, hats), coming soon banner
7. **Press** - EPK layout with bios, streaming links, social links, contact info
8. **Contact** - Booking form, email, social links

### Backend APIs:
- `/api/subscribe` - Email list subscription
- `/api/contact` - Contact form submission
- `/api/subscriptions` - Get subscribers (admin)
- `/api/contacts` - Get contact messages (admin)

### SEO Implemented:
- Meta tags with target keywords
- Open Graph tags for social sharing
- Twitter Card meta tags
- Schema.org MusicArtist markup
- Target keywords: Seattle rapper, Central District Seattle hip hop, East Union Street rapper

## Prioritized Backlog

### P0 (Critical) - COMPLETED
- [x] All 8 pages functional
- [x] Email signup working
- [x] Contact form working
- [x] SEO metadata

### P1 (High Priority) - Future
- [ ] Add real artist photos when available
- [ ] Replace placeholder discography with actual releases
- [ ] Add TikTok integration
- [ ] Add merch store with Stripe

### P2 (Nice to Have) - Future
- [ ] Admin dashboard for managing contacts/subscribers
- [ ] Analytics integration (beyond PostHog)
- [ ] Blog/news section
- [ ] Fan community features

## Social Links
- Spotify: https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm
- Apple Music: https://music.apple.com/us/artist/mafi-d/1111484310
- SoundCloud: https://soundcloud.com/mafi_d
- YouTube: https://www.youtube.com/@OfficialMafiD/videos
- Instagram: https://www.instagram.com/mafidklickup/
- Facebook: https://www.facebook.com/MafiDKlickUp/
- TikTok: https://www.tiktok.com/@mafidklickup
- Twitter/X: https://twitter.com/mafidklickup

## Contact
- Booking Email: booking@mafidaklick.com
