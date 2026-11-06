from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from seed_data import seed_database
from routers import campsites, bookings

# Ensure tables exist and seed initial authentic Bangladesh island campsites
Base.metadata.create_all(bind=engine)
seed_database()

app = FastAPI(
    title="Island Camping Bangladesh API",
    description="Backend API powering island adventure discovery, reservations, and logistics for Bangladesh islands",
    version="1.0.0"
)

# Enable CORS for local Vite dev and live domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "https://islandcampingbangladesh.com",
        "http://islandcampingbangladesh.com",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(campsites.router)
app.include_router(bookings.router)

@app.get("/")
def root():
    return {
        "service": "Island Camping Bangladesh API",
        "status": "online",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
