# Autio MVP Backend

FastAPI backend for the Autio MVP car search and lifestyle recommendations application.

## Features

- **User Management**: User registration, authentication, and preference storage
- **Car Search API**: Search cars by budget, distance, lifestyle, and location
- **Recommendations**: Personalized car recommendations based on user preferences
- **Database**: SQLAlchemy ORM with SQLite (easily switchable to PostgreSQL)
- **API Documentation**: Automatic OpenAPI/Swagger documentation

## Project Structure

```
backend/
├── app/
│   ├── api/           # API route handlers
│   │   ├── users.py   # User management endpoints
│   │   └── cars.py    # Car search endpoints
│   ├── core/          # Core configuration
│   │   ├── config.py  # Settings and environment variables
│   │   └── database.py # Database configuration
│   ├── models/        # Database models
│   │   └── user.py    # User model
│   └── schemas/       # Pydantic schemas
│       └── user.py    # User data validation
├── requirements.txt    # Python dependencies
├── run.py             # Application startup script
└── README.md          # This file
```

## Setup

### 1. Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Application
```bash
python run.py
```

The API will be available at:
- **API**: http://localhost:8000
- **Documentation**: http://localhost:8000/docs
- **Alternative Docs**: http://localhost:8000/redoc

## API Endpoints

### Users
- `POST /api/users/` - Create new user
- `GET /api/users/{user_id}` - Get user by ID
- `PUT /api/users/{user_id}/preferences` - Update user preferences
- `GET /api/users/{user_id}/preferences` - Get user preferences

### Cars
- `GET /api/cars/search` - Search cars with filters
- `GET /api/cars/recommendations` - Get personalized recommendations

## Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL=sqlite:///./autio_mvp.db
SECRET_KEY=your-secret-key-here
BACKEND_CORS_ORIGINS=["http://localhost:3000"]
```

## Development

### Database
- Uses SQLite by default (good for development)
- Can easily switch to PostgreSQL for production
- Automatic table creation on startup

### Code Style
- Follows FastAPI best practices
- Type hints throughout
- Pydantic for data validation
- SQLAlchemy for database operations

## Testing

```bash
# Install test dependencies
pip install pytest pytest-asyncio

# Run tests
pytest
```

## Production Deployment

1. **Update environment variables** for production settings
2. **Use PostgreSQL** instead of SQLite
3. **Add proper authentication** (JWT tokens)
4. **Add rate limiting** and security headers
5. **Use Gunicorn** or similar WSGI server
6. **Add logging** and monitoring

## Next Steps

- [ ] Add JWT authentication
- [ ] Implement password hashing
- [ ] Add more car data and filtering
- [ ] Implement recommendation algorithm
- [ ] Add user sessions and preferences
- [ ] Add admin panel
- [ ] Add data validation and sanitization
