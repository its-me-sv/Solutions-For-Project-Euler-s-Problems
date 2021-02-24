# Programme to find the `triangle number` having more than `N` divisors
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Iterative solution
### • Mathematical solution
#### For both the solutions, we will find the `triangle number` using an `while loop`. But finding the `total no of divisors` will be different.
## 🐢 Iterative Solution :
```python
def iterativeSolution(limit):
	def getDivisors(no):
		cnt = 0
		for i in range(1,no+1):
			if not no % i:
				cnt += 1
		return cnt
	n = 1
	tSum = 1
	while getDivisors(tSum) <= limit:
		n += 1
		tSum += n
	print(tSum)
```
#### Time Complexity = O(N ^ 2)
#### In this solution, we will find the `total no of divisors` using an for loop which will iterate from `1` till `N`, and check whether the number evenly divides the given number, if it divides then we will count it and return the `total count`.
## 🐇 Mathematical Solution :
```python
def mathematicalSolution(limit):
	def getDivisors(no):
		if no == 1:
			return 1
		i, total = 2, 1
		temp = no
		while i*i <= temp:
			cnt = 1
			while not temp % i:
				temp //= i
				cnt += 1
			i += 1
			total *= cnt
		if temp == no or temp > 1:
			total *= 2
		return total
	n = 1
	tSum = 1
	while getDivisors(tSum) <= limit:
		n += 1
		tSum += n
	print(tSum)
```
#### Time Complexity = O(N x sqrt(N))
#### In this solution we will find the total no of divisors using the mathematical theory, Say the prime factors of the number `n` is `(a^x)(b^y)(c^z)` then the total divisors of `n` is `(x+1)(b+1)(c+1)`.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 10`
```
N : 10
Iterative solution, Ans : 120, Time : 0.0 seconds
Mathematical solution, Ans : 120, Time : 0.0 seconds
```
#### Case 2, `N = 100`
```
N : 100
Iterative solution, Ans : 73920, Time : 0.28173232078552246 seconds
Mathematical solution, Ans : 73920, Time : 0.0009968280792236328 seconds
```
#### Case 3, `N = 150`
```
N : 150
Iterative solution, Ans : 749700, Time : 8.784595012664795 seconds
Mathematical solution, Ans : 749700, Time : 0.004833698272705078 seconds
```
#### Case 4, `N = 500`
```
N : 500
Iterative solution, Ans : 76576500, Time : 9286.559392929077 seconds
Mathematical solution, Ans : 76576500, Time : 0.28678131103515625 seconds
```
## Time complexity of solutions 
### 🐢 Iterative Solution => O(N ^ 2)
### 🐇 Mathematical Solution => O(N x sqrt(N))
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
limit = int(input("N : "))
def getDivisors(no):
	if no == 1:
		return 1
	i, total = 2, 1
	temp = no
	while i*i <= temp:
		cnt = 1
		while not temp % i:
			temp //= i
			cnt += 1
		i += 1
		total *= cnt
	if temp == no or temp > 1:
		total *= 2
	return total
n = 1
tSum = 1
while getDivisors(tSum) <= limit:
	n += 1
	tSum += n
print(tSum)
```
#### Solution in [JavaScript](solution.js)
```javascript
const limit = parseInt(prompt("N : "));
const getDivisors = no => {
	if (no == 1)
		return 1;
	let i = 2, total = 1;
	let temp = no;
	while (i*i <= temp){
		let cnt = 1;
		while(temp%i == 0){
			temp = Math.floor(temp/i);
			cnt += 1;
		}
		i += 1;
		total *= cnt;
	}
	if (temp == no || temp > 1)
		total *= 2;
	return total;
};
let n = 1, tSum = 1;
while (getDivisors(tSum) <= limit){
	n += 1;
	tSum += n;
}
alert(tSum);
```