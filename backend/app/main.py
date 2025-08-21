from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import users, cars
from app.core.config import settings
from app.core.database import create_tables

app = FastAPI(
    title="Autio MVP API",
    description="Car search and lifestyle recommendations API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(cars.router, prefix="/api/cars", tags=["cars"])

@app.get("/")
async def root():
    return {"message": "Welcome to Autio MVP API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.on_event("startup")
async def startup_event():
    create_tables()
