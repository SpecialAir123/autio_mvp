# Autio MVP Project

This project is organized as a workspace with separate frontend and backend directories.

## Project Structure

```
autio_mvp/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Public assets
│   ├── components/   # UI components
│   ├── styles/       # CSS and styling
│   ├── node_modules/ # Dependencies
│   └── package.json  # Frontend dependencies
├── backend/           # Python FastAPI backend
│   ├── app/          # FastAPI application
│   │   ├── api/      # API routes
│   │   ├── core/     # Configuration
│   │   ├── models/   # Database models
│   │   └── schemas/  # Data validation
│   ├── requirements.txt # Python dependencies
│   └── run.py        # Backend startup script
├── package.json       # Workspace configuration
└── README.md         # This file
```

## Getting Started

### Frontend Development
```bash
cd frontend
npm install
npm start
```

### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

### From Root Directory
```bash
# Frontend
npm run dev          # Start frontend
npm run build        # Build frontend
npm run test         # Test frontend

# Backend
npm run backend:setup    # Setup backend environment
npm run backend:install  # Install backend dependencies
npm run backend:dev      # Start backend server
```

## Development Workflow

1. **Frontend Development**: Work in the `frontend/` directory
2. **Backend Development**: Work in the `backend/` directory
3. **Root Level**: Use workspace scripts for common operations

## API Endpoints

The backend provides the following API endpoints:

### Users
- `POST /api/users/` - Create new user
- `GET /api/users/{user_id}` - Get user by ID
- `PUT /api/users/{user_id}/preferences` - Update user preferences
- `GET /api/users/{user_id}/preferences` - Get user preferences

### Cars
- `GET /api/cars/search` - Search cars with filters
- `GET /api/cars/recommendations` - Get personalized recommendations

## API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Migration Notes

- All frontend content has been moved to the `frontend/` directory
- Dependencies are preserved in `frontend/node_modules/`
- Project should work immediately after migration
- No reinstallation of packages required
- Backend is now fully integrated with FastAPI

## Features

- **Home_1**: Landing page with slide bar functionality
- **Home_2**: Car search and lifestyle recommendations
- **Home_3**: Budget, distance, and travel preferences with interactive slide bars
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety and modern development experience
- **FastAPI Backend**: High-performance Python API with automatic documentation
- **Database Integration**: SQLAlchemy ORM with user preferences storage

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Python FastAPI, SQLAlchemy, Pydantic
- **UI Components**: Custom components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Create React App with webpack
- **Package Manager**: npm with workspace support
- **Database**: SQLite (development), PostgreSQL ready (production)

