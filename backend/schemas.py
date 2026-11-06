from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime

class DestinationBase(BaseModel):
    name: str
    district: str
    ghat_name: str
    boat_schedule: str
    map_coordinates: Optional[str] = None
    banner_image: str

class DestinationResponse(DestinationBase):
    id: int

    class Config:
        from_attributes = True

class CampsiteBase(BaseModel):
    title: str
    slug: str
    destination_id: int
    category: str
    price_per_night: int
    capacity: int
    description: str
    amenities: List[str]
    images: List[str]
    rating: float = 4.8
    review_count: int = 12
    instant_book: bool = True
    host_name: str
    host_phone: str
    host_badge: str = "Verified Island Guide"
    ghat_info: str

class CampsiteResponse(CampsiteBase):
    id: int
    destination: Optional[DestinationResponse] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class BookingCreate(BaseModel):
    campsite_id: int
    guest_name: str
    guest_phone: str
    guest_email: str
    check_in: str
    check_out: str
    guests_count: int = Field(default=1, ge=1)
    add_ons: Optional[Dict[str, Any]] = None
    payment_method: str = "bkash"

class BookingResponse(BaseModel):
    id: int
    booking_code: str
    campsite_id: int
    guest_name: str
    guest_phone: str
    guest_email: str
    check_in: str
    check_out: str
    guests_count: int
    add_ons: Optional[Dict[str, Any]] = None
    total_bdt: int
    payment_status: str
    payment_method: str
    created_at: datetime
    campsite: Optional[CampsiteResponse] = None

    class Config:
        from_attributes = True
