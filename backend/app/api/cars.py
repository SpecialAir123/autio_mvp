from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from pydantic import BaseModel

router = APIRouter()

class CarSearchParams(BaseModel):
    budget_min: Optional[float] = None
    budget_max: Optional[float] = None
    distance: Optional[float] = None
    lifestyle: Optional[str] = None
    zip_code: Optional[str] = None

class Car(BaseModel):
    id: int
    make: str
    model: str
    year: int
    price: float
    mileage: float
    location: str
    lifestyle_tags: List[str]

@router.get("/search")
async def search_cars(
    budget_min: Optional[float] = Query(None, description="Minimum budget"),
    budget_max: Optional[float] = Query(None, description="Maximum budget"),
    distance: Optional[float] = Query(None, description="Maximum distance in miles"),
    lifestyle: Optional[str] = Query(None, description="Lifestyle preference"),
    zip_code: Optional[str] = Query(None, description="Zip code for location")
):
    # Mock data - replace with actual database queries
    mock_cars = [
        {
            "id": 1,
            "make": "Jeep",
            "model": "Wrangler",
            "year": 2020,
            "price": 35000,
            "mileage": 25000,
            "location": "Los Angeles, CA",
            "lifestyle_tags": ["adventure", "outdoor", "beach"]
        },
        {
            "id": 2,
            "make": "Toyota",
            "model": "4Runner",
            "year": 2019,
            "price": 32000,
            "mileage": 30000,
            "location": "San Diego, CA",
            "lifestyle_tags": ["adventure", "family", "reliable"]
        }
    ]
    
    # Apply filters
    filtered_cars = mock_cars
    if budget_max:
        filtered_cars = [car for car in filtered_cars if car["price"] <= budget_max]
    if budget_min:
        filtered_cars = [car for car in filtered_cars if car["price"] >= budget_min]
    if lifestyle:
        filtered_cars = [car for car in filtered_cars if lifestyle.lower() in [tag.lower() for tag in car["lifestyle_tags"]]]
    
    return {"cars": filtered_cars, "total": len(filtered_cars)}

@router.get("/recommendations")
async def get_recommendations(
    user_id: int = Query(..., description="User ID for personalized recommendations")
):
    # Mock recommendations - replace with actual recommendation logic
    recommendations = [
        {
            "id": 3,
            "make": "Honda",
            "model": "CR-V",
            "year": 2021,
            "price": 28000,
            "mileage": 20000,
            "location": "Orange County, CA",
            "lifestyle_tags": ["family", "practical", "fuel_efficient"],
            "reason": "Great family car with good fuel economy"
        }
    ]
    return {"recommendations": recommendations}
