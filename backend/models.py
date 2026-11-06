import datetime
from sqlalchemy import Column, Integer, String, Float, Boolean, Text, ForeignKey, JSON, DateTime
from sqlalchemy.orm import relationship
from database import Base

class Destination(Base):
    __tablename__ = "destinations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False, unique=True, index=True)
    district = Column(String(80), nullable=False)
    ghat_name = Column(String(150), nullable=False)
    boat_schedule = Column(Text, nullable=False)
    map_coordinates = Column(String(60), nullable=True)
    banner_image = Column(String(300), nullable=False)

    campsites = relationship("Campsite", back_populates="destination", cascade="all, delete-orphan")

class Campsite(Base):
    __tablename__ = "campsites"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False, index=True)
    slug = Column(String(200), nullable=False, unique=True, index=True)
    destination_id = Column(Integer, ForeignKey("destinations.id"), nullable=False)
    category = Column(String(80), nullable=False, index=True)
    price_per_night = Column(Integer, nullable=False)
    capacity = Column(Integer, nullable=False, default=2)
    description = Column(Text, nullable=False)
    amenities = Column(JSON, nullable=False, default=list)
    images = Column(JSON, nullable=False, default=list)
    rating = Column(Float, nullable=False, default=4.8)
    review_count = Column(Integer, nullable=False, default=12)
    instant_book = Column(Boolean, nullable=False, default=True)
    host_name = Column(String(100), nullable=False)
    host_phone = Column(String(50), nullable=False)
    host_badge = Column(String(80), nullable=False, default="Verified Island Guide")
    ghat_info = Column(String(250), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    destination = relationship("Destination", back_populates="campsites")
    bookings = relationship("Booking", back_populates="campsite", cascade="all, delete-orphan")

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    booking_code = Column(String(40), unique=True, index=True, nullable=False)
    campsite_id = Column(Integer, ForeignKey("campsites.id"), nullable=False)
    guest_name = Column(String(120), nullable=False)
    guest_phone = Column(String(40), nullable=False)
    guest_email = Column(String(120), nullable=False)
    check_in = Column(String(30), nullable=False)
    check_out = Column(String(30), nullable=False)
    guests_count = Column(Integer, nullable=False, default=1)
    add_ons = Column(JSON, nullable=True, default=dict)
    total_bdt = Column(Integer, nullable=False)
    payment_status = Column(String(40), nullable=False, default="pending")
    payment_method = Column(String(40), nullable=False, default="bkash")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    campsite = relationship("Campsite", back_populates="bookings")
