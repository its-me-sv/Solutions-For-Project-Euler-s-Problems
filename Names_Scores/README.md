# Programme to find `Total Score` for the given names after `Sorting`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = namesList => {
	const getScore = (name, pos) => {
		let score = 0;
		for (letter of name)
			score += letter.charCodeAt() - 64;
		return score * (pos + 1);
	};
	namesList = namesList.sort();
	let totalScore = 0;
	for (let i = 0; i < namesList.length; i += 1)
		totalScore += getScore(namesList[i], i);
	console.log(totalScore);
};
```
#### Time Complexity = O(N^2 x log (K) `[N - Total names, k - Length of each name]`
#### In this solution, apart from reading the `input from file`, we will create a function `getScore` which will return the `score` of an `name` multiplied with its `natural position` [1, 2, ....]
#### We would now sort the input and go through each name, caclulate its score using `getScore` and update the score to `totalScore`
## 🤔 Comparing all the solutions
#### Case 1, `Input File:` [input.txt](input.txt)
```
Direct Solution, Ans: 871198282, Time: 0.00451859999995213 seconds
```
### Code used for comparing [workout.js](workout.js)
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N^2 x log (K) `[N - Total names, k - Length of each name]`
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
file = open('input.txt')
fileInput = file.readline()
file.close()

namesList = fileInput.replace('\"', '').split(',')

def getScore(name, pos):
	score = 0
	for letter in name:
		score += ord(letter) - 64
	return score * (pos + 1)

namesList.sort()
totalScore = 0
for pos, name in enumerate(namesList):
	totalScore += getScore(name, pos)

print(totalScore)
```
#### Solution in [JavaScript](solution.js)
```javascript
const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
let namesList = input.split(',').map(i => i.slice(1, -1));

const getScore = (name, pos) => {
	let score = 0;
	for (letter of name)
		score += letter.charCodeAt() - 64;
	return score * (pos + 1);
};

namesList = namesList.sort();
let totalScore = 0;
for (let i = 0; i < namesList.length; i += 1)
	totalScore += getScore(namesList[i], i);

console.log(totalScore);
```