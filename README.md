# DoctorOnDoor - Professional Home Healthcare Website

A full-stack web application for a home healthcare service company, featuring a modern React frontend and a Node.js/Express backend with MongoDB database.

## Project Structure

```
homecare/
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/           # Node.js API server
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
└── README.md
```

## Features

### Frontend
- Modern, responsive React application with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Service booking forms
- Mobile-first design

### Backend
- RESTful API built with Express.js
- MongoDB database with Mongoose ODM
- CORS enabled for frontend communication
- Booking management system
- Service management

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/homecare
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```

4. Start MongoDB service (if using local MongoDB)

5. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5174`

## API Endpoints

### Bookings
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/:id` - Get a specific booking
- `PATCH /api/bookings/:id` - Update a booking
- `DELETE /api/bookings/:id` - Delete a booking

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create a new service
- `GET /api/services/:id` - Get a specific service
- `PATCH /api/services/:id` - Update a service
- `DELETE /api/services/:id` - Delete a service

## Technologies Used

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.