# Programme to find the sum of even valued Fibonacii numbers that do not exceed the given value
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 2 solutions :
### • Iterative solution
### • Mathematical solution
## 🐢 Iterative Solution :
```python
def calcIterative(maxVal):
    sumEven = 0
    recFibo = lambda no : no if no < 2 else recFibo(no-1) + recFibo(no-2)
    for pos in range(3,maxVal,3):
        num = recFibo(pos)
        if num > maxVal:
            return sumEven
        sumEven += num
```
#### Time Complexity = O(log N/3)
#### When we take a look at the Fibonacci Series `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...`, we find that `Even` valued term's are `indices are multiples of 3`. 
```
FIBO(3)  = 2
FIBO(6)  = 8
FIBO(9)  = 34
FIBO(12) = 144
FIBO(15) = 610
FIBO(18) = 2584
And so on ....
```
#### Now we create an function `recFibo` which will return the `Nth` term of the fibonacci series by `Recursion`. Iterating from `3` we'll keep increasing the `index` by `3`, mean while we'll add those values to the variables `sum` which was intialized as `0`. When the `term becomes greater than maxVal` we'll `return` the sum.  
## 🐇 Mathematical Solution :
```python
def calcMath(maxVal):
	if maxVal < 2:
		return 0
	if maxVal < 8:
		return 2
	sumEven = 10
	secondPrev = 2
	firstPrev = 8
	while True:
		currNum = (firstPrev*4) + secondPrev
		if currNum > maxVal:
			return sumEven
		sumEven += currNum
		secondPrev = firstPrev
		firstPrev = currNum
```
#### Time Complexity = O(log K)
#### Taking a close look at the even valued Fibonacci series `2, 8, 34, 144, 610, 2584, 10946, ...`, we can find that they obey an pattern.
```
from 8,
8 = (2 * 4) + 0
34 = (8 * 4) + 2
144 = (34 * 4) + 8
610 = (144 * 4) + 34
2584 = (610 * 4) + 144
And so on ....
```
#### We can conlude that `Nth Even Term = ((N-1)th Even Term * 4) + (N-2)th Even Term`
#### Now we can solve this using the below algorithm:
##### • If `maxVal` < 2 return `0`
##### • If `maxval` < 8 return `2`
##### • If either of the condition is not satisfied, follow the below steps:
##### • Initialise 3 variables `sumEven, secondPrev, firstPrev` as `10, 2, 8` respectively
##### • Now do the below steps repeatedly till `currNum` is not greater than `maxVal`
##### • Assign `currNum` as sum of `secondPrev` and `firstPrev * 4`
##### • Add `currNum` to `evenSum`
##### • Assign `firstPrev` to `secondPrev` and `currNum` to `firstPrev`
##### • At when the loop has finished executing, return `evenSum`
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `Range = 10 ^ 3`
```
Enter Maximum Value : 1000
Using Iteration, Ans : 798, Time : 0.0 seconds
Using Maths, Ans : 798, Time : 0.0 seconds
```
#### Case 2, `Range = 10 ^ 5`
```
Enter Maximum Value : 100000
Using Iteration, Ans : 60696, Time : 0.05643963813781738 seconds
Using Maths, Ans : 60696, Time : 0.0 seconds
```
#### Case 3, `Range = 10 ^ 7`
```
Enter Maximum Value : 10000000
Using Iteration, Ans : 4613732, Time : 4.233164548873901 seconds
Using Maths, Ans : 4613732, Time : 0.0 seconds
```
#### Case 4, `Range = 10 ^ 9`
```
Enter Maximum Value : 1000000000
Using Iteration, Ans : 350704366, Time : 313.5654134750366 seconds
Using Maths, Ans : 350704366, Time : 0.0 seconds
```
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
maxVal = int(input("Enter Maximum Value : "))
if maxVal < 2:
	print(0)
elif maxVal < 8:
	print(2)
else:
	sumEven = 10
	secondPrev = 2
	firstPrev = 8
	while True:
		currNum = (firstPrev*4) + secondPrev
		if currNum > maxVal:
			break
		sumEven += currNum
		secondPrev = firstPrev
		firstPrev = currNum
	print(sumEven)
```
#### Solution in [JavaScript](solution.js)
```javascript
const MAXVAL = prompt("Enter Maximum Value : ") - 0;
if (MAXVAL < 2)
alert(0);
else if (MAXVAL < 8)
alert(2);
else {
	let sumEven = 10, secondPrev = 2, firstPrev = 8;
	let currNum;
	while (true){
		currNum = (firstPrev*4) + secondPrev;
		if (currNum > MAXVAL)
		break;
		sumEven += currNum;
		secondPrev = firstPrev;
		firstPrev = currNum;
	}
	alert(sumEven);
}
```