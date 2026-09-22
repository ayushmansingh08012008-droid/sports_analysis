# Model 1 — IPL Win Prediction using Logistic Regression

## 1. Objective

The goal of Model 1 is to predict whether the chasing team will win or lose based on the current match situation.

This is our first baseline machine-learning model for the Sports Analysis Platform.

---

## 2. Model Type

Algorithm: Logistic Regression

Library: Scikit-learn

Problem Type: Binary Classification

Output:

- `1` → Win
- `0` → Loss

---

## 3. Initial Features

For the first version, we use three features:

| Feature | Description |
|---|---|
| runs_required | Runs required to win |
| balls_remaining | Number of balls remaining |
| wickets_left | Number of wickets remaining |

Therefore, one match situation is represented as:

[runs_required, balls_remaining, wickets_left]

Example:

[25, 20, 6]

means:

- 25 runs required
- 20 balls remaining
- 6 wickets left

---

## 4. Training Data

Initially, a small manually created dataset will be used to understand and test the ML pipeline.

Later, this will be replaced with real IPL ball-by-ball data.

Planned data source:

Cricsheet IPL ball-by-ball dataset.

---

## 5. Model

```python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

model.fit(X_train, y_train)