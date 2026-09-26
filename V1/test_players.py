import pandas as pd 

players = pd.read_csv("Premier-League-Stats/fpl_scraper/fpl_stats/_merged/players/2025-26_all_players_gw.csv")

print(players.columns.tolist())