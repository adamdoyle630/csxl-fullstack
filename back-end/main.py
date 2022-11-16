from typing import List
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from database.settings import Base, engine, get_db
from models import LinkCreate
from database.crud import get_all_links, create_db_link, delete_db_link
from fastapi import FastAPI

Base.metadata.create_all(bind = engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def read_root():
    return "Hello World!"

links: List[LinkCreate] = []

@app.get("/api/links")
def get_links(db = Depends(get_db)):
    return get_all_links(db)

# Silly comment

# Silly comment

@app.post("/api/link")
def create_link(url: str, display_name: str, db = Depends(get_db)):
    link = LinkCreate(url = url, display_name=display_name)
    links.append(link)
    return create_db_link(link, db)

@app.delete("/api/delete")
def delete_link(id: int, db = Depends(get_db)):
    return delete_db_link(id, db)