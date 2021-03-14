# Programme to find `sum of digits` of `factorial` of `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = number => {
	let factorials = [1n];
	for (let i = 1; i <= 1000; i += 1)
		factorials.push(factorials[i-1]*BigInt(i));
	number = factorials[number];
	let sum = 0n;
	while (number != 0n){
		sum += number % 10n;
		number -= number % 10n
		number /= 10n;
	}
	let answer = Number(sum);
	console.log(answer);
};
```
#### Time Complexity = O(`max`(`1000`, no of digits in `N!`))
#### In this solution, we `pre-compute` the factorials of all the numbers in the `range 1 to 1000` (inclusive) using the [Bottom Up](https://en.wikipedia.org/wiki/Bottom-up) approach of [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming). Now we will have factorial of `i` at `ith` index of the `factorials` array.
#### We can now find the factorial of `n` and caclulate the sum of the digits using an `while loop` which will add `each digit` to sum and keep dividing `n` until it becomes 0
## 🤔 Comparing all the solutions
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10`
```
Number : 10
Direct Solution, Ans: 27, Time: 0.0006312000006437301 seconds
```
#### Case 2, `N = 100`
```
Number : 100
Direct Solution, Ans: 648, Time: 0.000701799999922514 seconds
```
#### Case 3, `N = 500`
```
Number : 500
Direct Solution, Ans: 4599, Time: 0.0032110000010579826 seconds
```
#### Case 4, `N = 1000`
```
Number : 1000
Direct Solution, Ans: 10539, Time: 0.012189600000157952 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(max(`1000`, no of digits in `N!`))
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
factorials = [1]
for i in range(1, 1001):
	factorials.append(factorials[i-1]*i)

number = int(input("Number : "))
number = factorials[number]

sumOfDigits = 0
while number != 0:
	sumOfDigits += number % 10
	number //= 10

print(sumOfDigits)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question("Number : ", number => {
	let factorials = [1n];
	for (let i = 1; i <= 1000; i += 1)
		factorials.push(factorials[i-1]*BigInt(i));
	number = factorials[number];
	let sum = 0n;
	while (number != 0n){
		sum += number % 10n;
		number -= number % 10n
		number /= 10n;
	}
	console.log(Number(sum));
	readline.close();
});
```