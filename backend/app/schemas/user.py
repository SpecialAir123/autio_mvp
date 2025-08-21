from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    username: str

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    budget_min: Optional[float] = None
    budget_max: Optional[float] = None
    preferred_distance: Optional[float] = None
    daily_travel: Optional[float] = None
    lifestyle_preferences: Optional[str] = None
    zip_code: Optional[str] = None

class UserPreferences(BaseModel):
    budget_min: Optional[float] = None
    budget_max: Optional[float] = None
    preferred_distance: Optional[float] = None
    daily_travel: Optional[float] = None
    lifestyle_preferences: Optional[str] = None
    zip_code: Optional[str] = None

class User(UserBase):
    id: int
    created_at: datetime
    budget_min: Optional[float] = None
    budget_max: Optional[float] = None
    preferred_distance: Optional[float] = None
    daily_travel: Optional[float] = None
    lifestyle_preferences: Optional[str] = None
    zip_code: Optional[str] = None
    
    class Config:
        from_attributes = True
