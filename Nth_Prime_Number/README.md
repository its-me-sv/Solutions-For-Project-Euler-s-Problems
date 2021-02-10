# Programme to find the `Nth` Prime Number
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Iterative solution (Sieve of Eratosthenes)
## 🐢 Iterative Solution :
```python
def iterativeSolution(n):
	MAXVAL = 110000
	sieve = [True] * MAXVAL
	number = 2
	while number <= MAXVAL ** 0.5:
		if sieve[number]:
			for i in range(number * 2, MAXVAL, number):
				sieve[i] = False
		number += 1
	allPrimes = [no for no in range(2, MAXVAL) if sieve[no]]
	print(allPrimes[n - 1])
```
#### In this soultion we use the `Sieve of Eratosthenes` algorithm to generate the first `10000` prime numbers. Check more about Sieve of Eratosthenes [Here](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
#### Time Complexity = O(sqrt(MAXVAL) * (MAXVAL / 2)); [MAXVAL = 110000]
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N <= 10 ^ 1`
```
Enter N : 9
Using Loops, Ans : 23, Time : 0.008977651596069336 seconds
```
#### Case 2, `N <= 10 ^ 2`
```
Enter N : 99
Using Loops, Ans : 523, Time : 0.008976221084594727 seconds
```
#### Case 3, `N <= 10 ^ 3`
```
Enter N : 999
Using Loops, Ans : 7907, Time : 0.00897216796875 seconds
```
#### Case 4, `N <= 10 ^ 4`
```
Enter N : 9999
Using Loops, Ans : 104723, Time : 0.00897526741027832 seconds
```
## Time complexity of solutions 
### 🐢 Iterative Solution => O(sqrt(MAXVAL) * (MAXVAL / 2)); [MAXVAL = 110000]
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
N = int(input("Enter N : "))
MAXVAL = 110000
sieve = [True] * MAXVAL
number = 2
while number <= MAXVAL ** 0.5:
	if sieve[number]:
		for i in range(number * 2, MAXVAL, number):
			sieve[i] = False
	number += 1
allPrimes = [no for no in range(2, MAXVAL) if sieve[no]]
print(allPrimes[N - 1])
```
#### Solution in [JavaScript](solution.js)
```javascript
const N = prompt("Enter N : ") - 1;
const MAXVAL = 110000;
let sieve = new Array();
for (let number = 2; number < MAXVAL ** 0.5; number += 1){
	if (!sieve[number])
	for (let i = number * 2; i < MAXVAL; i += number)
	sieve[i] = true;
}
let allPrimes = new Array();
for (let i = 2; i < MAXVAL; i += 1)
if (!sieve[i])
allPrimes.push(i);
alert(allPrimes[N]);
```