# DoctorOnDoor Backend

This is the backend API for the DoctorOnDoor healthcare service website.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB (local or cloud)

3. Create a .env file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
   
   Optional (Email notifications via SMTP):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_smtp_user@example.com
   SMTP_PASS=your_smtp_password_or_app_password
   ADMIN_EMAIL_TO=you@domain.com
   ```

4. Run the server:
   ```
   npm run dev
   ```

## API Endpoints

### Bookings
- GET /api/bookings - Get all bookings
- POST /api/bookings - Create a new booking
- GET /api/bookings/:id - Get a specific booking
- PATCH /api/bookings/:id - Update a booking
- DELETE /api/bookings/:id - Delete a booking

### Services
- GET /api/services - Get all services
- POST /api/services - Create a new service
- GET /api/services/:id - Get a specific service
- PATCH /api/services/:id - Update a service
- DELETE /api/services/:id - Delete a service