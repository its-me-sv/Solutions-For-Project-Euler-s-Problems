# Programme to find the `sum of digits` of `2^N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = no => {
    const getNthTerm = n => 2n*(2n**(n-1n));
    const getDigitSum = no => {
        if (no <= 10n)
            return no;
        let digitSum = 0n;
        while (no != 0n){
            digitSum += no % 10n;
            no -= no % 10n;
            no /= 10n;
        }
        return digitSum;
    };
    console.log(Number(getDigitSum(getNthTerm(no))));
};
```
#### Time Complexity = O(K) `[K = Total no of digits in 2^N]`
#### In this solution we will find `2 ^ N` using the geometric progression. `2 ^ N` is nothing but the `Nth` term of the `GP {2, 4, 8, ...}` whose `First term (a) = 2` and `common ratio (r) = 2`. Given below is the formula to find the `Nth` term of the `GP`.
```
Nth term of GP = A x (R ^ (N - 1))
where, 
A = First Term of GP
R = Common ratio for the GP
```
#### For our problem we put `A = 2` and `R = 2`. Next we will be finding the `sum of digits` in `2 ^ N` using the function `getDigitSum`. 
#### In the function, we will check whether number is `less than 11`. If `True` we will `return the number` else we will get each and `every single digit` of that number and `add them`. At last we will return that `variable` holding the `sum` of the digits.  
## 🤔 Comparing all the solutions
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10`
```
N : 10
Direct Solution, Ans : 7, Time : 0.000052099999971687794 seconds
```
#### Case 2, `N = 100`
```
N : 100
Direct Solution, Ans : 115, Time : 0.0000625 seconds
```
#### Case 3, `N = 1000`
```
N : 1000
Direct Solution, Ans : 1366, Time : 0.00025579999946057796 seconds
```
#### Case 4, `N = 10000`
```
N : 10000
Direct Solution, Ans : 13561, Time : 0.015208499999716877 seconds
```
## Time complexity of solutions 
### 🐢 🐇 Direct Solution => O(K) `[K = Total no of digits in 2^N]`
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
no = int(input("N : "))
no = 2*(2**(no-1))
ans = 0
if no <= 10:
	ans = no
else:
	while no != 0:
		ans += no % 10
		no //= 10
print(ans)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("N : ", no => {
	no = BigInt(no);
	no = 2n*(2n**(no-1n));
	let ans = 0n;
	if (no <= 10n)
		ans = no;
	else{
		while (no != 0n){
			ans += no % 10n;
			no -= no % 10n;
			no /= 10n;
		}
	}
	console.log(Number(ans));
	readline.close();
});
```