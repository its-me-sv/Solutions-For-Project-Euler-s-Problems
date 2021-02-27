# Programme to find the number under `N` which produces the `longest collatz sequence`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution `(Using memoisation)`
## 🐢  🐇 Direct Solution :
```python
cache = {1:1}
def directSolution(limit):
	def getCollatzLength(no):
		if no in cache:
			return cache[no]
		result = 1 + getCollatzLength(3*no + 1 if no % 2 else no//2)
		cache[no] = result
		return result
	maxLen = 1
	maxValue = 1
	for i in range(limit//2, limit):
		length = getCollatzLength(i)
		if length >= maxLen:
			maxLen = length
			maxValue = i
	print(maxValue)
```
#### In this solution we make use of [Memoisation](https://en.wikipedia.org/wiki/Memoization) and [Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) in the `getCollatzLength` function. We will use two variables `maxLen` and `maxValue` which will keep an record of the `maximum collatz length` and that `respective number`. 
#### We use an `for loop` and iterate from `limit/2` till `limit` at each iteration we will find the collatz length keep updating `maxLen` and `maxValue` with `highest values`. After the for loop has finished executing we will have the required answer in `maxValue`
#### Time Complexity = O(3*N+1)
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N <= 10^1`
```
Limit : 10
Direct solution, Ans : 9, Time : 0.0 Seconds
```
#### Case 2, `N <= 10^3`
```
Limit : 1000
Direct solution, Ans : 871, Time : 0.0 Seconds
```
#### Case 3, `N <= 10^4`
```
Limit : 10000
Direct solution, Ans : 6171, Time : 0.004986286163330078 Seconds
```
#### Case 4, `N <= 10^6`
```
Limit : 1000000
Direct solution, Ans : 837799, Time : 0.6539885997772217 Seconds
```
## Time complexity of solutions 
### 🐢 🐇 Direct Solution => O(3*N+1)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
cache = {1:1}
def getCollatzLength(no):
	if no in cache:
		return cache[no]
	result = 1 + getCollatzLength(3*no + 1 if no % 2 else no//2)
	cache[no] = result
	return result
limit = int(input("Limit : "))
maxValue = 1
maxLength = 1
for i in range(limit//2, limit):
	currLength = getCollatzLength(i)
	if currLength >= maxLength:
		maxLength = currLength
		maxValue = i
print(maxValue)
```
#### Solution in [JavaScript](solution.js)
```javascript
let cache = {1:1};
const getCollatzLength = no => {
	if (cache[no])
		return cache[no];
	let result = 1 + getCollatzLength(no%2==0?Math.floor(no/2):no*3+1);
	cache[no] = result;
	return result;
};
const limit = parseInt(prompt("Limit : "));
let maxValue = 1, maxLength = 1;
for (let i = Math.floor(limit/2); i < limit; i += 1){
	let currLength = getCollatzLength(i);
	if (currLength >= maxLength){
		maxLength = currLength;
		maxValue = i;
	}
}
alert(maxValue);
```