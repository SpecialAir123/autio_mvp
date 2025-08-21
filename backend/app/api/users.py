from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
from app.schemas.user import User, UserCreate, UserUpdate, UserPreferences
from app.models.user import User as UserModel
from app.core.database import get_db

router = APIRouter()

@router.post("/", response_model=User)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(UserModel).filter(UserModel.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    db_user = UserModel(
        email=user.email,
        username=user.username,
        hashed_password=user.password  # In production, hash this password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.get("/{user_id}", response_model=User)
async def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}/preferences", response_model=User)
async def update_user_preferences(
    user_id: int, 
    preferences: UserPreferences, 
    db: Session = Depends(get_db)
):
    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    for field, value in preferences.dict(exclude_unset=True).items():
        setattr(user, field, value)
    
    db.commit()
    db.refresh(user)
    return user

@router.get("/{user_id}/preferences", response_model=UserPreferences)
async def get_user_preferences(user_id: int, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserPreferences(
        budget_min=user.budget_min,
        budget_max=user.budget_max,
        preferred_distance=user.preferred_distance,
        daily_travel=user.daily_travel,
        lifestyle_preferences=user.lifestyle_preferences,
        zip_code=user.zip_code
    )
