# Program to find the `Possible ways` to make the `Amount` from the given set of `Coins`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 2 solution :
### • Dynaminc programming with `2D Array` 
### • Dynaminc programming with `1D Array` 
## 🐢  Dynaminc programming with `2D Array` :
```python
def using2dArray(userAmount):
    START = time()
    dp2 = [[0] * (MAX_AMOUNT + 1)] * (N + 1)
    for i in range(N + 1):
        dp2[i][0] = 1
    for i in range(1, N + 1):
        for j in range(MAX_AMOUNT + 1):
            if j >= GIVEN_COINS[i-1]:
                dp2[i][j] = dp2[i][j-GIVEN_COINS[i-1]] + dp2[i-1][j]
            else:
                dp2[i][j] = dp2[i-1][j]
    answer = dp2[N][userAmount] % MOD
    print("Using 2D Array, Ans: {}, Time: {} seconds".format(answer, time()-START))
```
#### Time Complexity = O(No. of Coins x Amount)
####  We would first create an `2D array` of dimension `(N + 1) x (Amount + 1)`, where `N = Total No. of given Coins` and `Amount` is the user input, whose `total possible ways` to be found.
####  We need to fill the `1st row` with `0` because we would have `0` ways to make the `Amount` using the `0` coin
####  We need to fill the `1st column` with `1` because we can always make an `0 Amount` by either using the given coin or by excluding it.
####  We use nested `for loops` where the `first loop` will iterate with `i` from `1` till `N + 1` and the `second loop` will iterate with `j` from `0` till `Amount + 1` 
####  `Inside` of these loops, we will check whether `j` is greater than or equal to `GIVEN_COINS[i-1]`. If its greater we will include it to the array, else we will only include the possible way of the `amount` from its previous ways.
####  In order to pass all the test cases of `HackerRank` we will apply mod of `(10^9)+7` to the `Obtained answer`.
####  The Obtained answer is nothing but the `right most bottom array element`
## 🐇 Dynaminc programming with `1D Array` :
```python
def using1dArray(userAmount):
    START = time()
    dp1 = [0] * (MAX_AMOUNT + 1)
    dp1[0] = 1
    for i in range(N):
        for j in range(GIVEN_COINS[i], MAX_AMOUNT + 1):
            dp1[j] += dp1[j-GIVEN_COINS[i]]
    answer = dp1[userAmount] % MOD
    print("Using 1D Array, Ans: {}, Time: {} seconds".format(answer, time()-START))
```
#### This approach is similar to the `2D array aprroach`, but we would make use of the `prefix sum` concept wisely in order to `elminate` the places which we actually `don't require` for the finding the result
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.py](workout.py)
#### Case 1, `Amount = 2 x 10^2`
```bash
Using 2D Array, Ans: 73682, Time: 0.13067936897277832 seconds
Using 1D Array, Ans: 73682, Time: 0.06981182098388672 seconds
```
#### Case 2, `Amount = 10^3`
```bash
Using 2D Array, Ans: 321335886, Time: 0.12968063354492188 seconds
Using 1D Array, Ans: 321335886, Time: 0.07081127166748047 seconds
```
#### Case 3, `Amount = 10^4`
```bash
Using 2D Array, Ans: 296710490, Time: 0.1286320686340332 seconds
Using 1D Array, Ans: 296710490, Time: 0.07084035873413086 seconds
```
#### Case 4, `Amount = 10^5`
```bash
Using 2D Array, Ans: 836633026, Time: 0.12833523750305176 seconds
Using 1D Array, Ans: 836633026, Time: 0.06981587409973145 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(No. of Coins x Amount)
## ✅ Final / Efficient solution 
### `1D Array` approach was pretty faster when compared with `2D Array` approach
#### Solution in [Python](solution.py)
```python
GIVEN_COINS = [1, 2, 5, 10, 20, 50, 100, 200]
N = len(GIVEN_COINS)
amount = int(input("Amount: "))

dp = [0] * (amount + 1)
dp[0] = 1

for i in range(N):
    for j in range(GIVEN_COINS[i], amount + 1):
        dp[j] += dp[j-GIVEN_COINS[i]]

MOD = (10 ** 9) + 7
print(dp[amount] % MOD)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const GIVEN_COINS = [1, 2, 5, 10, 20, 50, 100, 200];
const N = GIVEN_COINS.length;
const MOD = (10 ** 9) + 7;
const dp = new Array(amount + 1).fill(0);
dp[0] = 1;

readline.question(
    "Amount: ", 
    amount => {
        amount = parseInt(amount);
        for (let i = 0; i < N; i += 1) 
            for (let j = GIVEN_COINS[i]; j <= amount; j += 1)
                dp[j] += dp[j-GIVEN_COINS[i]];
        console.log(dp[amount] % MOD);
        readline.close();
    }
);
```