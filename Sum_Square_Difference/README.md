# Programme to find the difference between the `sum of the squares` of the first `N` natural numbers and the `square of the sum`.
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
	sumSeriesSquare = 0
	sumSquaredSeries = 0
	for i in range(1, n + 1):
		sumSeriesSquare += i
		sumSquaredSeries += (i ** 2)
	sumSeriesSquare **= 2
	print(sumSeriesSquare - sumSquaredSeries)
```
#### Time Complexity = O(N)
#### In this solution, we use `for loop` and iterate till `N`. At each iteration, `sumSeriesSquare` is incremented by `i` and `sumSquaredSeries` is incremented by `i ^ 2`. After the `for loop` has finsehed executing, we `square` the `sumSeriesSquare`. At last we print the difference (i.e) `sumSeriesSquare - sumSquaredSeries`.
## 🐇 Mathematical Solution :
```python
sumSeriesSquare = ((n*(n + 1))//2)**2
sumSquaredSeries = (n*(n + 1)*((2*n)+1))//6
print(sumSeriesSquare - sumSquaredSeries)
```
#### Time Complexity = O(3)
#### In this solution, we use `mathematical formulae` to solve the problem `efficiently`
#### Sum of first N natural numbers `A` = `(N x N+1) / 2`
#### Sum of square of first N natural numbers `B` = `(N x N+1 x 2N+1) / 6`
#### At last we print the difference between them after squaring the `sum of first N natural numbers` (i.e) `A^2 - B`
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 10 ^ 4`
```
Enter range : 10000
Using Maths, Ans : 2500166641665000, Time : 0.0 seconds
Using Loops, Ans : 2500166641665000, Time : 0.001994609832763672 seconds
```
#### Case 2, `N = 10 ^ 6`
```
Enter range : 1000000
Using Maths, Ans : 250000166666416666500000, Time : 0.0 seconds
Using Loops, Ans : 250000166666416666500000, Time : 0.20054149627685547 seconds
```
#### Case 3, `N = 10 ^ 8`
```
Enter range : 100000000
Using Maths, Ans : 25000000166666664166666650000000, Time : 0.0 seconds
Using Loops, Ans : 25000000166666664166666650000000, Time : 20.16089391708374 seconds
```
#### Case 4, `N = 10 ^ 10`
```
Enter range : 10000000000
Using Maths, Ans : 2500000000166666666641666666665000000000, Time : 0.0 seconds
Using Loops, Ans : 2500000000166666666641666666665000000000, Time : 2995.3822104930878 seconds
```
## Time complexity of solutions 
### 🐢 Iterative Solution => O(N)
### 🐇 Mathematical Solution => O(3)
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
N = int(input("Enter range : "))
sumSeriesSquare = ((N*(N + 1))//2)**2
sumSquaredSeries = (N*(N + 1)*((2*N)+1))//6
print(sumSeriesSquare - sumSquaredSeries)
```
#### Solution in [JavaScript](solution.js)
```javascript
let N = +prompt("Enter upper limit : ");
const sumSeriesSquare = ((N*(N + 1))/2)**2;
const sumSquaredSeries = (N*(N + 1)*((2*N)+1))/6;
alert(sumSeriesSquare - sumSquaredSeries);
```