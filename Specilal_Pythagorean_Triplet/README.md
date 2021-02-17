# Programme to find the product of `Pythagorean Triplet` whose sum is equal to `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 2 solutions :
### • Iterative solution
### • Mathematical solution
#### `Note` - In Both the solutions we make use of the below formulae :
#### `Eq1` => a + b + c = N 
#### `Eq2` => a^2 + b^2 = c^2
## 🐢 Iterative Solution :
```python
def usingLoops(no):
	product = -1
	for a in range(1,no//3):
		for b in range(a,no//2):
			c = no-a-b
			if c*c == a*a + b*b:
				product = max(product, a*b*c)
	print(product)
```
#### Time Complexity = O((N^2)/6)
#### In this solution, we will try to solve the problem by considering `a` and `b` as `constants`, where `a` is range `{1,N/3}` and `b` is in range `{a,N/2}`. 
#### We make use of the `for loop` to solve this. At each iteration, we will calculate `c` using `Eq1` and we will check whether `a`, `b` and `c` are satisfying `Eq2`. If `Eq2` is satisfied we will update `Product` with `a*b*c` if they are `greater` than the `existing product`.
## 🐇 Mathematical Solution :
```python
def usingMaths(no):
	product = -1
	for a in range(1,(no//3)+1):
		b = (no*no - 2*no*a)//(2*no - 2*a)
		c = no - a - b
		if c*c == a*a + b*b:
			product = max(product, a*b*c)
	print(product)
```
#### Time Complexity = O(N/3)
#### In this solution, we will first simply `Eq1` and `Eq2`,
```
c = N-a-b [from Eq1]
Substituting value of c in Eq2
a^2 + b^2 = (N-a-b)^2
a^2 + b^2 = N^2 + (a+b)^2 - 2N(a+b)
a^2 + b^2 = N^2 + a^2 + b^2 + 2ab - 2aN - 2bN
N^2 + 2ab - 2aN - 2bN = 0
b = (N^2 - 2aN)/(2(N-a))
```
#### We can now do the same steps from the `iterative solution`, but by eliminating the `nested for loop` (i.e) we would only be considering `a` as `constant`.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 4 x 10^1`
```
N : 40
Using Loops, Ans : 2040, Time : 0.0009927749633789062 seconds
Using Maths, Ans : 2040, Time : 0.0 seconds
```
#### Case 2, `N = 3 x 10^2`
```
N : 300
Using Loops, Ans : 937500, Time : 0.0009970664978027344 seconds
Using Maths, Ans : 937500, Time : 0.0 seconds
```
#### Case 3, `N = 2 x 10^3`
```
N : 2000
Using Loops, Ans : 255000000, Time : 0.04746532440185547 seconds
Using Maths, Ans : 255000000, Time : 0.0 seconds
```
#### Case 4, `N = 1 x 10^4`
```
N : 10000
Using Loops, Ans : 31875000000, Time : 1.1859071254730225 seconds
Using Maths, Ans : 31875000000, Time : 0.0 seconds
```
## Time complexity of solutions 
### 🐢 Iterative Solution => O((N^2)/6)
### 🐇 Mathematical Solution => O(N/3)
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
no = int(input("N : "))
product = -1
for a in range(1,(no//3)+1):
	b = (no*no - 2*no*a)//(2*no - 2*a)
	c = no - a - b
	if c*c == a*a + b*b:
		product = max(product, a*b*c)
print(product)
```
#### Solution in [JavaScript](solution.js)
```javascript
const N = parseInt(prompt("N : "));
let product = -1;
let a, b, c;
for (a = 1; a <= N/3; a += 1){
	b = parseInt((N*N - 2*N*a)/(2*N - 2*a));
	c = N - a - b;
	if ((c*c == a*a + b*b) && (a*b*c > product))
	product = a*b*c;
}
alert(product);
```