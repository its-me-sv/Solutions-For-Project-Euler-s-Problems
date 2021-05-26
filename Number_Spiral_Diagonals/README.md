# Program to find the `number diagnol sum` of 2 dimensional matrix of dimension `N x N` where `N` is an `odd number`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const {performance} = require('perf_hooks');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const directSolution = no => {
    const START = performance.now();

    no = BigInt(no);
    no = (no - 1n) / 2n;
    let squaredN = no * no;

    let requiredSum = (8n * squaredN) + (15n * no) + 13n;
    requiredSum *= (no * 2n);
    requiredSum /= 3n;
    requiredSum += 1n;

    console.log(`Direct Solution, Ans : ${requiredSum}, Time : ${(performance.now() - START) / 1000} seconds`);
};

readline.question("N: ", n => {
    directSolution(n);
    readline.close();
});
```
#### Time Complexity = O(1)
```
43 44 45 46 47 48 49
42 21 22 23 24 25 26
41 20  7  8  9 10 27
40 19  6  1  2 11 28
39 18  5  4  3 12 29
38 17 16 15 14 13 30
37 36 35 34 33 32 31
```
#### When we take an close look on this matrix we can split the 2 diagnols into 4 parts and name them A, B, C, D
```
    A = 9, 25, 49, ...
    B = 7, 21, 43, ...
    C = 5, 17, 37, ...
    D = 3, 13, 31, ...
```
#### We can derieve an formula for each part
```
    A = Squared Odd Number (2n + 1) ^ 2  = 4n^2 + 4n + 1
    B = A - 2n = 4n^2 + 4n + 1 - 2n      = 4n^2 + 2n + 1
    C = B - 2n = 4n^2 + 2n + 1 -2n       = 4n^2 + 1
    D = C - 2n                           = 4n^2 - 2n + 1
```
#### Since we have divided the diagnols into 4 (Because we will not go through complete `N` terms), we only need half of the diagnols, so our `n` here is `(N - 1) / 2`. We do this because we know `N` is `odd` and we need half of `N`. So we reduce `N` by `1` and divide the value by `2`.
#### Now we need to find the Diagnols sums A, B, C, D from `1` till `n`
```
    requiredSum = 1 + sigma{i: 1 -> n}(A+B+C+D)
    requiredSum = 1 + sigma{i: 1 -> n}(4i^2 + 4i + 1 + 4i^2 + 2i + 1 + 4i^2 + 1 + 4i^2 - 2i + 1)
    requiredSum = 1 + sigma{i: 1 -> n}(16i^2 + 4i + 4)
    requiredSum = 1 + 16 * sigma{i: 1 -> n}(i^2) + 4 * sigma{i: 1 -> n}(i) + sigma{i: 1 -> n}{4}
    requiredSum = 1 
            + 16 * (n * (n + 1) * (2n + 1) / 6) 
            + 4 * (n * (n + 1) / 2)
            + 4n
    After simplification,
        requiredSum = 1 + (2/3)*n*(8n^2 + 15n + 13)
```
#### So the input we need is `N` (odd no), with which we find `n` using `n = (N - 1) / 2`. Then we will put `n` in `1 + (2 / 3) * n * (8n^2 + 15n + 13)` to get the required `number diagnol sum`
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10 ^ 3`
```
N: 1000
Direct Solution, Ans : 665168997, Time : 0.000012699998915195465 seconds
```
#### Case 2, `N = 10 ^ 10 + 1`
```
N: 10000000001
Direct Solution, Ans : 666666666916666666710000000001, Time : 0.000014100000262260437 seconds
```
#### Case 3, `N = 10 ^ 12 + 1`
```
N: 1000000000001
Direct Solution, Ans : 666666666669166666666671000000000001, Time : 0.00003369999676942825 seconds
```
#### Case 4, `N = 10 ^ 15 + 1`
```
N: 1000000000000001
Direct Solution, Ans : 666666666666669166666666666671000000000000001, Time : 0.000014500007033348083 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(1)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
n = int(input("N: "))
n = (n - 1) // 2
squaredN = n * n

requiredSum = (8 * squaredN) + (15 * n) + 13
requiredSum *= (n * 2)
requiredSum //= 3
requiredSum += 1

print(requiredSum)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("N: ", n => {
    n = BigInt(n);
    n = (n - 1n) / 2n;
    let squaredN = n * n;

    let requiredSum = (8n * squaredN) + (15n * n) + 13n;
    requiredSum *= (2n * n);
    requiredSum /= 3n;
    requiredSum += 1n;
    
    console.log(requiredSum);
    readline.close();
});
```