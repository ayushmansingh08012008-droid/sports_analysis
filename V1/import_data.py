import pandas as pd
# Imported panda for tabular conversion of dataset in form of .csv

df = pd.read_csv("EPL_Data_25/football.csv")

football_df = df[
    ['Date', 'Time','HomeTeam', 'AwayTeam', 'FTHG', 'FTAG', 'FTR']
]

print(football_df.head())