# Programme to find `Sum of Amicable Numbers` under `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = range => {
	const getProperDivisorsSum = no => {
		let sum = 1;
		for (let i = 2; i < no ** 0.5; i += 1)
			if (no % i == 0)
				sum += i == Math.floor(no/i) ? i : i + Math.floor(no/i);
		return sum;
	};
	const amicableSum = [0];
	const divisorSum = [0];	
	for (let i = 1; i <= range; i += 1){
		divisorSum.push(getProperDivisorsSum(i));
		if (i == getProperDivisorsSum(divisorSum[i]) && divisorSum[i] != i)
			amicableSum.push(amicableSum[i-1] + i);
		else
			amicableSum.push(amicableSum[i-1]);
	}
	let answer = amicableSum[range];
	console.log(answer);
};
```
#### Time Complexity = O(N x sqrt(k))
#### In this solution, we will create a function `getProperDivisorsSum` which will return the `sum` of all `proper divisors` of the number passed as `argument`. 
#### We make use of the concept that, if an number `i` evenly divides an number `n`, then we can conclude that both `i` and `n/i` are divisors of `n`. This helps to compute the `sum` of proper divisors in `O(sqrt(n))` time complexity.
#### Using the concept of `Tabulation` which is an [Bottom Up](https://en.wikipedia.org/wiki/Bottom-up) approach in [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) we would have an track of the `sum of amicable numbers` as well as `sum of proper divisors`
#### The `last element` of `amicableSum` is our required answer
## 🤔 Comparing all the solutions
#### Case 1, `N = 500`
```
Range: 500
Direct Solution, Ans: 504, Time: 0.0012774000000208617 seconds
```
#### Case 2, `N = 10 ^ 3`
```
Range: 1000
Direct Solution, Ans: 504, Time: 0.0035509999999776484 seconds
```
#### Case 3, `N = 10 ^ 4`
```
Range: 10000
Direct Solution, Ans: 31626, Time: 0.020447099999524654 seconds
```
#### Case 4, `N = 10 ^ 5`
```
Range: 100000
Direct Solution, Ans: 852810, Time: 0.3116968999998644 seconds
```
### Code used for comparing [workout.js](workout.js)
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N x sqrt(k))
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
def getProperDivisorsSum(no):
	answer = 1
	for i in range(2, int(no ** 0.5)):
		if not no % i:
			answer += i if i == no//i else i + (no//i)
	return answer

n = int(input("Range: "))

amicableSum = [0]
divisorSum = [0]

for i in range(1, n + 1):
	divisorSum.append(getProperDivisorsSum(i))
	if i == getProperDivisorsSum(divisorSum[i]) and i != divisorSum[i]:
		amicableSum.append(amicableSum[i-1] + i)
	else:
		amicableSum.append(amicableSum[i-1])

print(amicableSum[n])
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const getProperDivisorsSum = no => {
	let sum = 1;
	for (let i = 2; i < no ** 0.5; i += 1)
		if (no % i == 0)
			sum += i == Math.floor(no/i) ? i : i + Math.floor(no/i);
	return sum;
};

readline.question("Range: ", range => {
	range = +range;
	const amicableSum = [0];
	const divisorSum = [0];
	for (let i = 1; i <= range; i += 1){
		divisorSum.push(getProperDivisorsSum(i));
		if (i == getProperDivisorsSum(divisorSum[i]) && divisorSum[i] != i)
			amicableSum.push(amicableSum[i-1] + i);
		else
			amicableSum.push(amicableSum[i-1]);
	}
	console.log(amicableSum[range]);
	readline.close();
});
```