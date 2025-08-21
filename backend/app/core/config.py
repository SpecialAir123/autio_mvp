from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    api_v1_str: str = "/api/v1"
    project_name: str = "Autio MVP"
    
    database_url: str = "sqlite:///./autio_mvp.db"
    
    secret_key: str = "your-secret-key-here"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    backend_cors_origins: list = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"

settings = Settings()
