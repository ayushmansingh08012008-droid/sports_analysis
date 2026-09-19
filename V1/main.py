from fastapi import FastAPI
import psycopg
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def home():
    return {"Message":"SportsGPT API is working"}

@app.get('/matches')
def get_matches():

    tomato = psycopg.connect(
        dbname = "sports_analysis",
        user = "postgres",
        password = "517204",
        host = "localhost",
        port = "5432"
    )

    cursor = tomato.cursor()
    cursor.execute("SELECT * FROM sports_analysis")
    matches = cursor.fetchall()

    match_list = []

    for match in matches:
        match_list.append({
        "id": match[0],
        "homeTeam": match[1],
        "awayTeam": match[2],
        "homeScore": match[3],
        "awayScore": match[4],
        "Win": match[5],
        "Date": match[6],
        "Tim"
        "e": match[7]
    })
        
    cursor.close()
    tomato.close()

    return {"matches" : match_list}