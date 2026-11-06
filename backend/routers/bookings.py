import uuid
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload
from database import get_db
from models import Booking, Campsite
from schemas import BookingCreate, BookingResponse

router = APIRouter(prefix="/api/bookings", tags=["bookings"])

@router.post("", response_model=BookingResponse)
def create_booking(payload: BookingCreate, db: Session = Depends(get_db)):
    campsite = db.query(Campsite).filter(Campsite.id == payload.campsite_id).first()
    if not campsite:
        raise HTTPException(status_code=404, detail="Campsite not found")

    # Generate unique island booking code
    booking_code = f"ISL-{uuid.uuid4().hex[:6].upper()}"

    # Calculate total: base price + add-ons
    base_price = campsite.price_per_night
    addons_total = 0
    if payload.add_ons:
        if payload.add_ons.get("bbq"):
            addons_total += 650 * payload.guests_count
        if payload.add_ons.get("kayak"):
            addons_total += 400
        if payload.add_ons.get("sleeping_bag"):
            addons_total += 250 * payload.guests_count

    total_bdt = base_price + addons_total

    new_booking = Booking(
        booking_code=booking_code,
        campsite_id=payload.campsite_id,
        guest_name=payload.guest_name,
        guest_phone=payload.guest_phone,
        guest_email=payload.guest_email,
        check_in=payload.check_in,
        check_out=payload.check_out,
        guests_count=payload.guests_count,
        add_ons=payload.add_ons,
        total_bdt=total_bdt,
        payment_status="confirmed",
        payment_method=payload.payment_method
    )

    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)

    # Load with campsite relationship
    return db.query(Booking).options(joinedload(Booking.campsite).joinedload(Campsite.destination)).filter(Booking.id == new_booking.id).first()

@router.get("/{booking_code}", response_model=BookingResponse)
def get_booking(booking_code: str, db: Session = Depends(get_db)):
    booking = db.query(Booking).options(joinedload(Booking.campsite).joinedload(Campsite.destination)).filter(Booking.booking_code == booking_code.upper()).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking reservation not found")
    return booking

@router.get("", response_model=List[BookingResponse])
def list_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).options(joinedload(Booking.campsite).joinedload(Campsite.destination)).order_by(Booking.created_at.desc()).all()
