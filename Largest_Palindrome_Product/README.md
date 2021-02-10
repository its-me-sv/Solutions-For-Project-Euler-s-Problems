# Find the `Largest` palindrome number which is an product of two `N` digit numbers 
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Iterative solution
## 🐢 Iterative Solution :
```python
def iterativeSolution(n):
	isPalindrome = lambda x: x == int(str(x)[::-1])
	upperLimit = (10 ** n) - 1
	lowerLimit = (upperLimit//10) + 1
	maxProduct = 0
	for i in range(upperLimit, lowerLimit - 1, -1):
		for j in range(i, lowerLimit - 1, -1):
			product = i * j
			if product < maxProduct:
				break
			if isPalindrome(product) and product > maxProduct:
				maxProduct = product
	print(maxProduct)
```
#### Time Complexity = O((10 ^ N) ^ 2)
#### In this solution we will write an function called `isPlaindrome` which will check whether the `no` passed as argument is an `palindrome` or not. First find the `largest` and `smallest` `N` digit number and store them in `upperLimit` and `lowerLimit`.
#### Create an variable called `maxProduct` which will be updated with the `largest palindrome product` at every iteration. Using an `for loop` we start iterating from `upperLimit` till `lowerLimit`, in each of the iteration we nest another `for loop` which will start iterating from the current number till `lowerLimit`.
#### Inside the `nested` for loop, declare an variable `product` which will hold the product of number from first loop and number from second loop. If the `product` is less than `maxProduct` we will `break` the inner for loop, if the `product` is an `palindrome number` and greater than `maxProduct` we will update `maxProduct` with the current `product`'s value.
#### After the for loops has finshed executing, we can print the `maxProduct` which is the required answer.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 1`
```
N : 1
Using Loops, Ans : 9, Time : 0.0 seconds
```
#### Case 2, `N = 2`
```
N : 2
Using Loops, Ans : 9009, Time : 0.0 seconds
```
#### Case 3, `N = 4`
```
N : 4
Using Loops, Ans : 99000099, Time : 0.002991914749145508 seconds
```
#### Case 4, `N = 6`
```
N : 6
Using Loops, Ans : 999000000999, Time : 0.28723669052124023 seconds
```
## Time complexity of solutions
### 🐢 Iterative Solution => O((10 ^ N) ^ 2)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
n = int(input("N : "))
isPalindrome = lambda x: x == int(str(x)[::-1])
upperLimit = (10 ** n) - 1
lowerLimit = (upperLimit//10) + 1
maxProduct = 0
for i in range(upperLimit, lowerLimit - 1, -1):
	for j in range(i, lowerLimit - 1, -1):
		product = i * j
		if product < maxProduct:
			break
		if isPalindrome(product) and product > maxProduct:
			maxProduct = product
print(maxProduct)
```
#### Solution in [JavaScript](solution.js)
```javascript
const n = parseInt(prompt("N : "));
const isPalindrome = no => no.toString() == no.toString().split("").reverse().join("");
const upperLimit = (10 ** n) - 1;
const lowerLimit = (upperLimit/10) + 1;
let maxProduct = 0, product;
for (let i = upperLimit; i >= lowerLimit; i -= 1){
	for (let j = i; j >= lowerLimit; j -= 1){
		product = i * j;
		if (product < maxProduct)
		break;
		if (isPalindrome(product) == true && product > maxProduct)
		maxProduct = product;
	}
}
alert(maxProduct);
```