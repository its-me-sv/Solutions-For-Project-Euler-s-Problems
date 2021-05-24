# Program to find the `product` of the coefficients, `a` and `b`, for the `quadratic expression` that produces the `maximum number` of primes for consecutive values of `n`, starting with `n = 0`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const {performance} = require('perf_hooks');

const directSolution = (N) => {
    let start = performance.now();
    const MAX_VALUE = 22000;
    let i = 2, j;
    let sieve = new Array(MAX_VALUE).fill(true);
    while (i * i <= MAX_VALUE) {
        if (sieve[i] === true)
            for (j = i * 2; j <= MAX_VALUE; j += i)
                sieve[j] = false;
        i += 1;
    }
    sieve[0] = false;
    sieve[1] = false;
    const getMaxN = (c1, c2) => {
        let n = 0;
        while (sieve[n*n+c1*n+c2] === true)
            n += 1;
        return n;
    };
    let cnt = 0, maxCnt = 0;
    let a, b;
    let maxA = 0, maxB = 0;
    for (b = 3; b < N; b += 2) {
        for (a = -N; a < 0; a += 1) {
            cnt = getMaxN(a, b);
            if (cnt > maxCnt) {
                maxCnt = cnt;
                maxA = a;
                maxB = b;
            }
        }
    }
    let answer = maxA * maxB;
    console.log(`Direct Solution, Ans : ${answer}, Time : ${(performance.now() - start) / 1000} seconds`);
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("N : ", input => {
    directSolution(+input);
    readline.close();
});
```
#### Time Complexity = O(N*N)
#### 1. First we need to find the prime numbers upto `22,000` using `sieve of eratosthenes`.
#### 2. Then we will create a function that takes 2 parameters which are the co-effcients `a` and `b` then we will keep incrementing `n = 0` by `1` until the value `n*n+a*n+b` is an prime number and at last we will return `n` after the `loop ends`
#### 3. We would now have variables to have track of maximum value for `a`, `b` and `maxCnt`.
#### 4. We will use `for loop` with `b` from 3 till `N` and keep incrementing `b` by `2`. An nested `for loop` with `a` from `-N` till `0` and keep incrementing `a` by `1`. Inside these nested loops we will find the `the maximum value` for the given `a` nd `b`.
#### 5. If `cnt` is `greater` than the `existing maxCnt`, we will update `maxCnt`, `maxA` and `maxB` with `cnt`, `a` and `b` respectively.
#### After the `for loops` have finished executing, our answer will be the `product` of `maxA` and `maxB` 
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10 ^ 1`
```
N : 100
Direct Solution, Ans : -1455, Time : 0.003600699998438358 seconds
```
#### Case 2, `N = 5 * 10 ^ 2`
```
N : 500
Direct Solution, Ans : -18901, Time : 0.00976179999858141 seconds
```
#### Case 3, `N = 10 ^ 3`
```
N : 1000
Direct Solution, Ans : -59231, Time : 0.02075789999961853 seconds
```
#### Case 4, `N = 2 * 10 ^ 3`
```
N : 2000
Direct Solution, Ans : -126479, Time : 0.06074759999662638 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N*N)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
MAX_VAL = 22000
sieve = [True] * MAX_VAL
for i in range(2, int(MAX_VAL ** 0.5) + 1):
    if sieve[i]:
        for j in range(i * 2, MAX_VAL, i):
            sieve[j] = False
sieve[0] = False
sieve[1] = False

def getMaxN(c1, c2):
    n = 0
    while sieve[(n*n)+(n*c1)+c2]:
        n += 1
    return n

N = int(input())

maxN = 0
maxA = 0
maxB = 0
cnt = 0

for b in range(3, N, 2):
    for a in range(-N, 0):
        cnt = getMaxN(a, b)
        if cnt > maxN:
            maxN = cnt
            maxA = a
            maxB = b

print(maxA * maxB)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const solve = N => {
    let MAX_VALUE = 22000;
    let i = 2, j;
    
    sieve = new Array(MAX_VALUE).fill(true);
    
    while (i * i <= MAX_VALUE) {
        if (sieve[i] === true)
            for (j = i * 2; j <= MAX_VALUE; j += i)
                sieve[j] = false;
        i += 1;
    }
    
    sieve[0] = false;
    sieve[1] = true;


    const getMaxN = (c1, c2) => {
        let n = 0;
        while (sieve[n*n+c1*n+c2] === true)
            n += 1;
        return n;
    };

    let a = 0, b = 0;
    let maxA = 0, maxB = 0;
    let cnt = 0, maxCnt = 0;

    for (b = 3; b < N; b += 2)
        for (a = -N; a < 0; a += 1) {
            cnt = getMaxN(a, b);
            if (cnt > maxCnt) {
                maxCnt = cnt;
                maxA = a;
                maxB = b;
            }
        }
    return maxA * maxB;
};

readline.question("N: ", input => {
    console.log(solve(+input));
    readline.close();
});
```