from sklearn.linear_model import LogisticRegression

X = [
    [20, 18, 7],
    [50, 24, 3],
    [10, 12, 6],
    [45, 18, 2],
    [30, 30, 8],
    [60, 24, 2],
    [15, 18, 5],
    [40, 12, 3],
]

Y = [1,0,1,0,1,0,1,0]

model = LogisticRegression()

model.fit(X,Y)

prediction = model.predict([[25,10,6]])
print(prediction)