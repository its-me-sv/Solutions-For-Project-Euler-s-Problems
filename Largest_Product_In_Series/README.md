# Find the greatest product of `K` consecutive digits in the `N` digit number
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Iterative solution
## 🐢 Iterative Solution :
```python
def iterativeSolution(n, k):
	def getProduct(lst):
		product = 1
		for no in lst:
			product *= no
		return product
	no = [int(i) for i in str(n)]
	maxProduct = 0
	for i in range(len(no) - k):
		prodLst = getProduct(no[i:i+k])
		if prodLst > maxProduct:
			maxProduct = prodLst
	print(maxProduct)
```
#### Time Complexity = O(len(N) - K)
#### In this solution, we will create an function called `getProduct` which will return the product of all the elements in the `list` which was passed as `argument`.
#### We will convert the given number `N` to an list `no` which will consists of all the digits in the `N` as list element. 
#### We then use an `for loop` where we will start iterating from `0` till the diffrence between total no of digits and K (i.e) till `len(no) - K`. In each iteration we will find the `product` of each sub list having an length of `K`, and we will have an record of the product obtained in `maxProduct`. After `len(no) - K ` iterations, we will be holding the maximum product value in `maxProduct`.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 3675356291, K = 5`
```
N : 3675356291
K : 5
Using Loops, Ans : 3150, Time : 0.0 seconds
```
#### Case 2, `N = 2709360626, K = 5`
```
N : 2709360626
K : 5
Using Loops, Ans : 0, Time : 0.0 seconds
```
#### Case 3, `Digits(N) <= 10 ^ 3, K = 4`
```
N : 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450
K : 4
Using Loops, Ans : 5832, Time : 0.0009975433349609375 seconds
```
#### Case 4, `Digits(N) <= 10 ^ 3, K = 13`
```
N : 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450
K : 13
Using Loops, Ans : 23514624000, Time : 0.0 seconds
```
## Time complexity of solutions
### 🐢 Iterative Solution => O(len(N) - K)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
n = int(input("N : "))
k = int(input("K : "))
def getProduct(lst):
	product = 1
	for no in lst:
		product *= no
	return product
no = [int(i) for i in str(n)]
maxProduct = 0
for i in range(len(no) - k):
	prodLst = getProduct(no[i:i+k])
	if prodLst > maxProduct:
		maxProduct = prodLst
print(maxProduct)
```
#### Solution in [JavaScript](solution.js)
```javascript
const n = parseInt(prompt("N : "));
const k = parseInt(prompt("K : "));
const getProduct = lst => lst.reduce((a, b) => a * b, 1);
const no = [...n.toString()].map(i => parseInt(i));
let maxProduct = 0;
for (let i = 0; i < no.length - k; i += 1){
	const prodLst = getProduct(no.slice(i,i+k))
	if (prodLst > maxProduct)
	maxProduct = prodLst;
}
alert(maxProduct);
```