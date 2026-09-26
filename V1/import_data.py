import pandas as pd
import psycopg
# Imported panda for tabular conversion of dataset in form of .csv


tomato = psycopg.connect(
    dbname = 'sports_analysis',
    user = 'postgres',
    password = '517204',
    host = 'localhost',
    port = '5432'
)

df = pd.read_csv("EPL_Data_25/football.csv")

football_df = df[
    ['Date', 'Time','HomeTeam', 'AwayTeam', 'FTHG', 'FTAG', 'FTR']
]

football_df['Date'] = pd.to_datetime (football_df['Date'] , dayfirst=True)
football_df['Time'] = pd.to_datetime (football_df['Time'] , format = '%H:%M').dt.time

cursor = tomato.cursor()

for i in range(len(football_df)):

        match = football_df.iloc[i]
        cursor.execute(
            """
            INSERT INTO sports_analysis 
            (match_time,match_date,home_team,away_team,home_goals,away_goals,result)
            VALUES(%s,%s,%s,%s,%s,%s,%s)
            """,
            (
                match["Time"],
                match["Date"],
                match["HomeTeam"],
                match["AwayTeam"],
                int(match["FTHG"]),
                int(match["FTAG"]),
                match["FTR"]
            )
        )

        tomato.commit()