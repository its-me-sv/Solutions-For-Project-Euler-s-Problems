# Programme to find the Largest Prime Factor of the give number
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 2 solutions :
### • Iterative solution
### • Mathematical solution
## 🐢 Iterative Solution :
```python
largestPrime = 0
def is_Prime(no):
    if no < 2:
        return False
    for i in range(2,no):
        if not no % i:
            return False
    return True
for i in range(n,0,-1):
    if not n % i and is_Prime(i):
        largestPrime = i
        break
print(largestPrime)
```
#### Time Complexity = O(N)
#### In this solution, we create an function `is_Prime` which would return `True` if the no passed as argument is `Prime` else it returns `False`.
#### Now, we iterate from `n` till `1` and check which number is `Prime` as wells as `Factor` of `n`. When we find such number, we'll `terminate` the loop and print that number
## 🐇 Mathematical Solution :
```python
largestPrime = 0
while not n % 2:
    largestPrime = 2
    n //= 2
i = 3  
while i < int(n**0.5):
    while not n % i:
        largestPrime = i
        n //= i
	i += 2
if n > 2:
	largestPrime = n
print(largestPrime)
```
#### Time Complexity = O(N**0.5)
#### In this solution, we'll first try to keep dividing `n` by `2`, until `n` is `not divisible` by 2. At one instance `n` will become odd and we'll stop dividing. Later we'll repeat the above step for all odd numbers that are `less than n**0.5` and at each divison we'll keep updating the `largestPrime` with the `Odd` number. When the loop has finished executing, we'll now check whether `n` is greater than `2`, if its `True`, we'll assign `n` to `largestPrime`.
#### NOTE : Prime Factor of an number is always less than or equal to square root of the number.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `n <= 10 ^ 3`
```
Enter No : 999
Using Loops, Ans : 37, Time : 0.0 seconds
Using Maths, Ans : 37, Time : 0.0 seconds
```
#### Case 2, `n <= 10 ^ 5`
```
Enter No : 13195
Using Loops, Ans : 29, Time : 0.0029916763305664062 seconds
Using Maths, Ans : 29, Time : 0.0 seconds
```
#### Case 3, `n <= 10 ^ 7`
```
Enter No : 1319513
Using Loops, Ans : 101501, Time : 0.03790640830993652 seconds
Using Maths, Ans : 101501, Time : 0.0009701251983642578 seconds
```
#### Case 4, `n <= 10 ^ 10`
```
Enter No : 1319513195
Using Loops, Ans : 9091, Time : 79.001699924469 seconds
Using Maths, Ans : 9091, Time : 0.0 seconds
```
## ✅ Final / Efficient solution 
### Mathematical solution is preferred as Final / Efficient solution for this problem
#### Solution in [Python](solution.py)
```python
n = int(input("Enter Number : "))
largestPrime = 0
while not n % 2:
	largestPrime = 2
	n //= 2
i = 3  
while i < int(n**0.5):
	while not n % i:
		largestPrime = i
		n //= i
	i += 2
if n > 2:
	largestPrime = n
print(largestPrime)
```
#### Solution in [JavaScript](solution.js)
```javascript
let n = prompt("Enter Maximum Value : ") - 0;
let largestPrime = 0;
while (n % 2 == 0){
	largestPrime = 2;
	n /= 2;
}
let i = 3;
while (i < n**0.5){
	while (n % i == 0){
		largestPrime = i;
		n /= i;
	}
	i += 2;
}
if (n > 2)
largestPrime = n;
alert(largestPrime);
```