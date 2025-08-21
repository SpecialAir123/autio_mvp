from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Car preferences
    budget_min = Column(Float, nullable=True)
    budget_max = Column(Float, nullable=True)
    preferred_distance = Column(Float, nullable=True)
    daily_travel = Column(Float, nullable=True)
    lifestyle_preferences = Column(Text, nullable=True)
    zip_code = Column(String, nullable=True)
    
    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', email='{self.email}')>"
