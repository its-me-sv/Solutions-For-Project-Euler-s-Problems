# Program to find first `N digit Fibonacci` number
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = no => {
	let fibonacii = [0n, 1n, 1n];
	let nDigitFibo = {1: 1};
	let size = 10n;
	let digit = 2;
	for (let i = 3; i <= 23923; i += 1){
		fibonacii.push(fibonacii[i-1] + fibonacii[i-2]);
		if (fibonacii[i] >= size){
			nDigitFibo[digit] = i;
			size *= 10n;
			digit += 1;
		}
	}
	let answer = nDigitFibo[no];
	console.log(answer);
};
```
#### Time Complexity = O(K) `[K = 23923]`
#### Using the concept of `Tabulation` which is an [Bottom Up](https://en.wikipedia.org/wiki/Bottom-up) approach in [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) we would calculate the first `23,923` fibonacii numbers.
#### While finding them, we will check whether they are `greater` than `size` which keeps `increasing` by `10 times` the current size. We would store the `ith` value to an `dictionary / Hash Map` with its `length` as `key`
#### The `Nth` key will now point to an number `x` where total no. of digits in `xth` fibonacci number is `N` 
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10 ^ 1`
```
N: 10
Direct Solution, Ans: 45, Time: 0.0326952999997884 seconds
```
#### Case 2, `N = 10 ^ 2`
```
N: 100
Direct Solution, Ans: 476, Time: 0.024038900000043214 seconds
```
#### Case 3, `N = 10 ^ 3`
```
N: 1000
Direct Solution, Ans: 4782, Time: 0.024324499999638646 seconds
```
#### Case 4, `N = 5 x 10 ^ 3`
```
N: 5000
Direct Solution, Ans: 23922, Time: 0.03528099999995902 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(K) `[K = 23923]`
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
no = int(input("N: "))

fibonacii = [0, 1, 1]
nDigitFibo = {1:1}
size = 10
digit = 2

for i in range(3, 23924):
	fibonacii.append(fibonacii[i-1]+fibonacii[i-2])
	if fibonacii[i] >= size:
		nDigitFibo[digit] = i
		size *= 10
		digit += 1

print(nDigitFibo[no])
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let fibonacii = [0n, 1n, 1n];
let nDigitFibo = {1: 1};
let size = 10n;
let digit = 2;
for (let i = 3; i <= 23923; i += 1){
	fibonacii.push(fibonacii[i-1] + fibonacii[i-2]);
	if (fibonacii[i] >= size){
		nDigitFibo[digit] = i;
		size *= 10n;
		digit += 1;
	}
}

rl.question("N: ", n => {
	console.log(nDigitFibo[+n]);
	rl.close();
});
```