# Programme to find the sum of numbers which are multiples of 3 or 5 within the given range
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 2 solutions :
### • Iterative solution
### • Mathematical solution
## 🐢 Iterative Solution :
```python
def calcLoop(n):
	Sum3 = 0
	Sum5 = 0
	Sum15 = 0
	for i in range(1, n):
		if not i % 3:
			Sum3 += i
		if not i % 5:
			Sum5 += i
		if not i % 15:
			Sum15 += i
	print(Sum3 + Sum5 - Sum15)
```
#### Time Complexity = O(log N)
#### In this solution, we use `for loop` to iterate from `1` till `n` to compute the `sum` of the numbers which are `divisible by 3 or 5`. We'll use 3 variables `Sum3`, `Sum5` and `Sum15` to store the sum of all multiples of 3, 5 and 15 respectively.
#### At last we use the below formula to compute the answer,
#### ```Sum of multiples of 3 or 5 under N = Sum3 + Sum5 - Sum15```
#### We subtract `Sum15` to `avoid overlapping` of multiples of 3 and 5 (15, 30, .....)
## 🐇 Mathematical Solution :
```python
def calcMath(n):
	Sum3 = 3 * ((n-1) // 3) * (((n-1) // 3) + 1) // 2
	Sum5 = 5 * ((n-1) // 5) * (((n-1) // 5) + 1) // 2
	Sum15 = 15 * ((n-1) // 15) * (((n-1) // 15) + 1) // 2
	print(Sum3 + Sum5 - Sum15)
```
#### Time Complexity = O(3)
#### In this solution, we use `sum of series` formula to calculate the `sum` of the numbers which are `divisible by 3 or 5`.
#### We first find the `Arthimetic Progression (AP)` of 3,
#### First Term = A = 3
#### Common Difference = D = 3
#### No. of Terms = N = (Given Range - 1) // 3 ; [(Given Range - 1) // 3 Refers to integral value of the quotient]
#### Last Term = L = (2 * A) + (N - 1) * D
#### AP = 3, 6, 9, ......, L
#### Sum(AP) = 3 + 6 + 9 + ...... + L = 3 (1 + 2 + 3 + .... + L / 3)
#### After taking 3 as `common`, we can apply sum of series formula to find the `sum of (1 + 2 + 3 + .... + L / 3)`.
#### We get the formula as,
#### ```Sum of multiples of 3 under N = 3 * (N * (N + 1)) / 2```
#### We do the above steps for 5 and 15, 
#### ```Sum of multiples of 5 under N = 5 * (N * (N + 1)) / 2```
#### ```Sum of multiples of 15 under N = 15 * (N * (N + 1)) / 2```
#### At last we use the below formula to compute the answer,
#### ```Sum of multiples of 3 or 5 under N = Sum3 + Sum5 - Sum15```
#### We subtract `Sum15` to `avoid overlapping` of multiples of 3 and 5 (15, 30, .....)
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `Range = 10 ^ 3`
```
Enter Upper Limit : 1000
Using Loops, Ans : 233168, Time : 0.0 seconds
Using Maths, Ans : 233168, Time : 0.0 seconds
```
#### Case 2, `Range = 10 ^ 5`
```
Enter Upper Limit : 100000
Using Loops, Ans : 2333316668, Time : 0.007978200912475586 seconds
Using Maths, Ans : 2333316668, Time : 0.0 seconds
```
#### Case 3, `Range = 10 ^ 7`
```
Enter Upper Limit : 10000000
Using Loops, Ans : 23333331666668, Time : 0.7734837532043457 seconds
Using Maths, Ans : 23333331666668, Time : 0.0 seconds
```
#### Case 4, `Range = 10 ^ 9`
```
Enter Upper Limit : 1000000000
Using Loops, Ans : 233333333166666668, Time : 78.03735566139221 seconds
Using Maths, Ans : 233333333166666668, Time : 0.0 seconds
```
## Time complexity of solutions 
### 🐢 Iterative Solution => O(log N)
### 🐇 Mathematical Solution => O(3)
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
n = int(input("Enter Upper Limit : ")) - 1
getSum = lambda x : x * (n // x) * ((n // x) + 1) // 2
print(getSum(3)+getSum(5)-getSum(15))
```
#### Solution in [JavaScript](solution.js)
```javascript
let n = prompt("Enter Upper Limit : ") - 1;
const getSum = x => x * Math.floor(n / x) * Math.floor((n / x) + 1) / 2;
alert(getSum(3)+getSum(5)-getSum(15));
```