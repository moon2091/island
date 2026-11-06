from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session, joinedload
from database import get_db
from models import Campsite, Destination
from schemas import CampsiteResponse, DestinationResponse

router = APIRouter(prefix="/api", tags=["campsites"])

@router.get("/destinations", response_model=List[DestinationResponse])
def get_destinations(db: Session = Depends(get_db)):
    return db.query(Destination).all()

@router.get("/campsites", response_model=List[CampsiteResponse])
def get_campsites(
    destination: Optional[str] = Query(None, description="Destination name or ID"),
    category: Optional[str] = Query(None, description="Category filter"),
    min_price: Optional[int] = Query(None, description="Minimum price per night in BDT"),
    max_price: Optional[int] = Query(None, description="Maximum price per night in BDT"),
    guests: Optional[int] = Query(None, description="Minimum capacity required"),
    search: Optional[str] = Query(None, description="Search query in title or description"),
    db: Session = Depends(get_db)
):
    query = db.query(Campsite).options(joinedload(Campsite.destination))

    if destination and destination != "All" and destination != "":
        if destination.isdigit():
            query = query.filter(Campsite.destination_id == int(destination))
        else:
            query = query.join(Campsite.destination).filter(Destination.name.ilike(f"%{destination}%"))

    if category and category != "All Camps" and category != "":
        query = query.filter(Campsite.category == category)

    if min_price is not None:
        query = query.filter(Campsite.price_per_night >= min_price)

    if max_price is not None:
        query = query.filter(Campsite.price_per_night <= max_price)

    if guests is not None:
        query = query.filter(Campsite.capacity >= guests)

    if search:
        search_filter = f"%{search}%"
        query = query.filter(
            (Campsite.title.ilike(search_filter)) |
            (Campsite.description.ilike(search_filter)) |
            (Campsite.ghat_info.ilike(search_filter))
        )

    return query.order_by(Campsite.rating.desc()).all()

@router.get("/campsites/{id_or_slug}", response_model=CampsiteResponse)
def get_campsite_by_id_or_slug(id_or_slug: str, db: Session = Depends(get_db)):
    if id_or_slug.isdigit():
        campsite = db.query(Campsite).options(joinedload(Campsite.destination)).filter(Campsite.id == int(id_or_slug)).first()
    else:
        campsite = db.query(Campsite).options(joinedload(Campsite.destination)).filter(Campsite.slug == id_or_slug).first()

    if not campsite:
        raise HTTPException(status_code=404, detail="Campsite not found")
    return campsite
