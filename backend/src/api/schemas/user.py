from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional
from datetime import datetime
import uuid


class SignupRequest(BaseModel):
    """Request schema for user signup."""
    email: EmailStr = Field(..., min_length=1, max_length=255, description="User email address")
    password: str = Field(..., min_length=8, max_length=100, description="User password (minimum 8 characters)")


class SigninRequest(BaseModel):
    """Request schema for user signin."""
    email: EmailStr = Field(..., min_length=1, max_length=255, description="User email address")
    password: str = Field(..., min_length=1, max_length=100, description="User password")


class UserResponse(BaseModel):
    """Response schema for user data."""
    id: uuid.UUID
    email: str
    created_at: datetime

    class Config:
        from_attributes = True


class AuthResponse(BaseModel):
    """Response schema for authentication (signup/signin)."""
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


class ErrorResponse(BaseModel):
    """Error response schema."""
    detail: str
