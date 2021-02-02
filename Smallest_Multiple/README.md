# Programme to find the smallest divident which is evenly divisible by all the nos in range 1 to `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 2 solutions :
### • Iterative solution
### • Mathematical solution
## 🐢 Iterative Solution :
```python
def iterativeSolution(n):
	i = 1
	while True:
		for no in range(1, n+1):
			if i % no:
				break
		else:
			print(i)
			return
		i += 1
```
#### Time Complexity = O(N ^ K) [K - No. of iterations of while loop]
#### In this solution, we use an `while loop` with initial no as `i = 1`, in each iteration we check whether `i` is `evenly divisible` by all the numbers in the range `1...N`, even if one of the number is not dividing `i` we will `break` the inner `for loop` and increment `i` by `1` in the `while loop`. If all the numbers in the range divided `i` we can return `i` which is the required `smallest divident`.
#### This approach will consume lot of `time` as the upper limit `N` increases.
## 🐇 Mathematical Solution :
```python
def mathematicalSolution(n):
	getGCD = lambda a,b : a if not b else getGCD(b,a%b)
	getLCM = lambda a,b : (a*b)//getGCD(a,b)
	print(reduce(getLCM, range(1, n+1)))
```
#### Time Complexity = O(N)
#### When we take an close look on this problem, we can find that the required small divident is `LCM` of all the numbers in the given range. In order to find the LCM of all the elements, we use two functions,
#### `getGCD` - To compute the `GCD` of 2 numbers through `recursion`
#### `getLCM` - To compute the `LCM` using the formula `(A x B) = LCM(A,B) * GCD(A,B)`
#### Finally we use the `reduce` method [Python - Imported from functools, JavaScript - One of array's method] to compute the `LCM` of all the elements. But we must make an `Array` or `List` of the numbers in order to perform `reduce` operation.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 5`
```
Enter upper limit : 5
Iterative solution, Ans : 60, Time : 0.0 seconds
Mathematical solution, Ans : 60, Time : 0.0 seconds
```
#### Case 2, `N = 10`
```
Enter upper limit : 10
Iterative solution, Ans : 2520, Time : 0.0 seconds
Mathematical solution, Ans : 2520, Time : 0.0 seconds
```
#### Case 3, `N = 15`
```
Enter upper limit : 15
Iterative solution, Ans : 360360, Time : 0.0718080997467041 seconds
Mathematical solution, Ans : 360360, Time : 0.0 seconds
```
#### Case 4, `N = 20`
```
Enter upper limit : 20
Iterative solution, Ans : 232792560, Time : 47.98136329650879 seconds
Mathematical solution, Ans : 232792560, Time : 0.0 seconds
```
## Time complexity of solutions 
### 🐢 Iterative Solution => O(N ^ K)
### 🐇 Mathematical Solution => O(N)
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
from functools import reduce
n = int(input("Enter upper limit : "))
getGCD = lambda a,b : a if not b else getGCD(b,a%b)
getLCM = lambda a,b : (a*b)//getGCD(a,b)
print(reduce(getLCM, range(1, n+1)))
```
#### Solution in [JavaScript](solution.js)
```javascript
let n = +prompt("Enter upper limit : ");
const getGCD = (a,b) => b == 0 ? a : getGCD(b,a%b);
const getLCM = (a,b) => (a*b)/getGCD(a,b);
alert([...new Array(n+1).keys()].slice(1).reduce(getLCM));
```