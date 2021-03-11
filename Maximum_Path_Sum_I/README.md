# Programme to find `maximum path sum` of an `triangle` with `N` rows
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = (size, arr) => {
	let row = size - 2;
	let arrCpy = arr.slice();
	while (row >= 0){
		for (let i = 0; i < arrCpy[row].length; i += 1)
			arrCpy[row][i] += Math.max(arrCpy[row+1][i], arrCpy[row+1][i+1]);
		row -= 1;
	}
	const answer = arrCpy[0][0];
	console.log(answer);
};
```
#### Time Complexity = O(N x log(N))
#### In this solution, we make use of `Tabulation` which is an [Bottom Up](https://en.wikipedia.org/wiki/Bottom-up) approach in [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming)
#### We would create an variable `row` which will hold the `2nd last row indice`. We would then create an `while loop` which will break when `row` becomes `negative`. 
#### At each `iteration` we will use an `for loop` and `update` each `element` of the `current row` by adding the `maximum  value` of the `adjacent` element of the `next row`.
```
Current Element += max(Adjacent elements of next row)
```
## 🤔 Comparing all the solutions
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 4`, Input File : [rinput.txt](rinput.txt)
```
Direct Solution, Ans : 23, Time : 0.000012399999424815177 seconds
```
#### Case 2, `N = 15`, Input File : [input.txt](input.txt)
```
Direct Solution, Ans : 1074, Time : 0.0000343000004068017 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N x log(N))
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
n = int(input())
triangle = [list(map(int, input().split())) for _ in range(n)]
def getMax(size, arr):
	row = size - 2
	while row >= 0:
		for i in range(len(arr[row])):
			arr[row][i] += max(arr[row+1][i], arr[row+1][i+1])
		row -= 1
	print(arr[0][0])
getMax(n, triangle[:])
```
#### Solution in [JavaScript](solution.js)
```javascript
const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.replace(/(\r\n|\n|\r)/gm, ",").split(',');

let n = +input[0];
let triangle = [];
for (let i = 1; i <= n; i += 1)
	triangle.push(input[i].split(' ').map(Number));

const getMaxPure = (size, arr) => {
	let row = size - 2;
	let arrCpy = arr.slice();
	while (row >= 0){
		for (let i = 0; i < arrCpy[row].length; i += 1)
			arrCpy[row][i] += Math.max(arrCpy[row+1][i], arrCpy[row+1][i+1]);
		row -= 1;
	}
	const answer = arrCpy[0][0];
	console.log(answer);
};

getMaxPure(n, triangle);
```