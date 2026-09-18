from fastapi import FastAPI
import psycopg

app = FastAPI()

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
    cursor.close()
    tomato.close()

    return {"matches" : matches}