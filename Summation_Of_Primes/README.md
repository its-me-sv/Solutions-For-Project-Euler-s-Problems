# Find the `sum of primes` under `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Iterative solution (Sieve Of Eratosthenes)
## 🐢 Iterative Solution :
```python
def prefixSE(n):
	prefixSum = [0,0]
	sieve = [True] * n
	for i in range(2,n):
		if sieve[i]:
			prefixSum.append(prefixSum[i-1]+i)
			for j in range(i*2,n,i):
				sieve[j] = False
		else:
			prefixSum.append(prefixSum[i-1])
	print(prefixSum[n-1])
```
#### Time Complexity = O(N)
#### In this problem, we use [Sieve Of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to find `primes` under `N` and we use [Prefix Sum](https://en.wikipedia.org/wiki/Prefix_sum) to keep an record of `total sum` at each iteration. At last we will return the `last element` in the `array` which was storing the `prefix sum`.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 10`
```
N : 10
Using Sieve Of Eratosthenes, Ans : 17, Time : 0.0
```
#### Case 1, `N = 10 ^ 2`
```
N : 100
Using Sieve Of Eratosthenes, Ans : 1060, Time : 0.0
```
#### Case 1, `N = 10 ^ 4`
```
N : 10000
Using Sieve Of Eratosthenes, Ans : 5736396, Time : 0.0009970664978027344
```
#### Case 1, `N = 10 ^ 6`
```
N : 1000000
Using Sieve Of Eratosthenes, Ans : 37550402023, Time : 0.18403291702270508
```
## Time complexity of solutions
### 🐢 Iterative Solution => O(N)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
n = int(input("N : ")) + 1
prefixSum = [0,0]
sieve = [True] * n
for i in range(2,n):
	if sieve[i]:
		prefixSum.append(prefixSum[i-1]+i)
		for j in range(i*2,n,i):
			sieve[j] = False
	else:
		prefixSum.append(prefixSum[i-1])
print(prefixSum[n-1])
```
#### Solution in [JavaScript](solution.js)
```javascript
const n = parseInt(prompt("N : "));
let prefixSum = [0, 0];
let sieve = [];
for (let i = 2; i <= n; i += 1){
	if (!sieve[i]){
		prefixSum.push(prefixSum[i-1]+i);
		for (let j = i * 2; j <= n; j += i)
		sieve[j] = true;
	} else
	prefixSum.push(prefixSum[i-1]);
}
alert(prefixSum[n]);
```