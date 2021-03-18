# Program to find `sum` of all `Non-abundant Numbers`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = no => {
	const divisorsSum = n => {
		let result = 1;
		for (let i = 2; i <= Math.floor(n ** 0.5); i += 1)
			if (n % i == 0)
				result += i == Math.floor(n/i) ? i : i + Math.floor(n/i);
		return result;
	};
	const MAXVALUE = 28124;
	let abudants = [];
	let allNumbers = Array(MAXVALUE).fill("NO");
	for (let i = 1; i < MAXVALUE; i +=1){
		let s = divisorsSum(i);
		if (s > i)
			abudants.push(i);
	}
	for (let i = 0; i < abudants.length; i += 1){
		for (let j = i; j < abudants.length; j += 1){
			if (abudants[i] + abudants[j] >= MAXVALUE)
				break;
			allNumbers[abudants[i] + abudants[j]] = "YES";
		}
	}
	let answer = 0;
	//For Project Euler
	// for (let i = 1; i < MAXVALUE; i += 1)
	// 	if (allNumbers[i] == "NO")
	// 		answer += i;
	// console.log(answer);
	answer = no > MAXVALUE ? "YES" : allNumbers[no];
	console.log(answer);
};
```
#### Time Complexity = O(N^2) `[N = 28124]`
#### In this solution, we will have an function `divisorsSum` which will return the `sum` of all `proper divisors` of the `number` passed as argument.
#### We will find all the `abundant` numbers under `28124` and store them in an array. We will now find all `possible sum` of 2 abundant numbers to an array. The `given number` acts as `idice` for that array and will hold `YES` if it is an abundant number else it holds `NO`
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10 ^ 2`
```
Number: 100
Direct Solution, Ans: YES, Time: 0.06681809999980032 seconds
```
#### Case 2, `N = 10 ^ 3`
```
Number: 1000
Direct Solution, Ans: YES, Time: 0.06556650000018999 seconds
```
#### Case 3, `N = 10 ^ 4`
```
Number: 10000
Direct Solution, Ans: YES, Time: 0.06594549999991432 seconds
```
#### Case 4, `N = 10 ^ 5`
```
Number: 100000
Direct Solution, Ans: YES, Time: 0.06640849999990314 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N^2) `[N = 28124]`
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
MAXVALUE = 28124

abundants = list()
allNumbers = ["NO"] * MAXVALUE

def divisorSum(n):
	result = 1
	for i in range(2, int(n ** 0.5) + 1):
		if not n % i:
			result += i if i == n//i else i + (n//i)
	return result

for i in range(1, MAXVALUE):
	ds = divisorSum(i)
	if ds > i:
		abundants.append(i)

for i in range(len(abundants)):
	for j in range(i, len(abundants)):
		if abundants[i] + abundants[j] >= MAXVALUE:
			break
		allNumbers[abundants[i] + abundants[j]] = "YES"

no = int(input("Number: "))
answer = 0
# For Project Euler
# for i in range(1, MAXVALUE):
# 	answer += i if allNumbers[i] == "NO" else 0
# print(answer)
answer = "YES" if no >= MAXVALUE else allNumbers[no]
print(answer)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const divisorsSum = n => {
	let result = 1;
	for (let i = 2; i <= Math.floor(n ** 0.5); i += 1)
		if (n % i == 0)
			result += i == Math.floor(n/i) ? i : i + Math.floor(n/i);
	return result;
};

rl.question("Number: ", no => {
	no = +no;
	const MAXVALUE = 28124;
	let abudants = [];
	let allNumbers = Array(MAXVALUE).fill("NO");
	for (let i = 1; i < MAXVALUE; i +=1){
		let s = divisorsSum(i);
		if (s > i)
			abudants.push(i);
	}
	for (let i = 0; i < abudants.length; i += 1){
		for (let j = i; j < abudants.length; j += 1){
			if (abudants[i] + abudants[j] >= MAXVALUE)
				break;
			allNumbers[abudants[i] + abudants[j]] = "YES";
		}
	}
	let answer = 0;
	//For Project Euler
	// for (let i = 1; i < MAXVALUE; i += 1)
	// 	if (allNumbers[i] == "NO")
	// 		answer += i;
	// console.log(answer);
	answer = no > MAXVALUE ? "YES" : allNumbers[no];
	console.log(answer);
	rl.close();
});
```