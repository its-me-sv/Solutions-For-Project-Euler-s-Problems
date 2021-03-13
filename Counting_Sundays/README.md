# Programme to find number of `Sundays` that fell on the `first of the month` during the given `dates`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = (startDate, endDate) => {
	const isSunday = (d, m, y) => {
		if (m < 3){
			m += 12;
			y -= 1;
		}
		let q = d;
		let k = y % 100;
		let j = Math.floor(y/100);
		let h = (q + k + Math.floor(k/4) + Math.floor(j/4) + (5 * j) + Math.floor((13 * (m + 1))/5))%7;
		return h == 1;
	};
	let [d1, m1, y1] = [...startDate];
	let [d2, m2, y2] = [...endDate];
	let totalSundays = 0;
	for (let year = y1; year <= y2; year += 1){
		let startMonth = year == y1 ? m1 : 1;
		let endMonth = year == y2 ? m2 : 12;
		for (let month = startMonth; month <= endMonth; month += 1){
			if (month == m1 && year == y1 && d1 != 1)
				continue;
			else if (isSunday(1, month, year))
				totalSundays += 1;
		}
	}
	console.log(totalSundays);
};
```
#### Time Complexity = O(K) `[K = Absolute difference between the years of dates]`
#### In this solution, we will make use of the algorithm [Zeller's congruence](https://en.wikipedia.org/wiki/Zeller%27s_congruence#Implementations_in_software). We will create an function `isSunday` which will check whether the given date is a `sunday`.
#### Using an `for loop` we will iterate between all the `1st day of every month` of every year in the `given dates`, if it is an `sunday`, we will `increment our counter by 1`. After the for loop has finished executing we will print our counnter
## 🤔 Comparing all the solutions
### Code used for comparing [workout.js](workout.js)
#### Case 1,

```
Input File Content
1 1 1901
31 12 2000
Output
Direct Solution, Ans : 171, Time : 0.00030079999938607214 seconds
```
### `Note :` Feel free to test the code, by changing contents of [input.txt](input.txt)
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(K) `[K = Absolute difference between the years of dates]`
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
file = open('input.txt')
lines = [line.replace('\n', '') for line in file.readlines()]
file.close()

startDate = list(map(int, lines[0].split()))
endDate = list(map(int, lines[1].split()))

def isSunday(d, m, y):
	if m < 3:
		m += 12
		y -= 1
	q = d
	k = y % 100
	j = y // 100
	h = (q + k + (k//4) + (j//4) + (5 * j) + ((13 * (m + 1))//5)) % 7
	return h == 1

d1, m1, y1 = startDate
d2, m2, y2 = endDate

totalSundays = 0

for year in range(y1, y2 + 1):
	startMonth = m1 if year == y1 else 1
	endMonth = m2 if year == y2 else 12
	for month in range(startMonth, endMonth + 1):
		if month == m1 and year == y1 and d1 != 1:
			continue
		elif isSunday(1, month, year):
			totalSundays += 1

print(totalSundays)
```
#### Solution in [JavaScript](solution.js)
```javascript
const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.replace(/(\r\n|\n|\r)/gm, ",").split(',');

let startDate = input[0].split(' ').map(Number);
let endDate = input[1].split(' ').map(Number);

const isSunday = (d, m, y) => {
	if (m < 3){
		m += 12;
		y -= 1;
	}
	let q = d;
	let k = y % 100;
	let j = Math.floor(y/100);
	let h = (q + k + Math.floor(k/4) + Math.floor(j/4) + (5 * j) + Math.floor((13 * (m + 1))/5))%7;
	return h == 1;
};

let [d1, m1, y1] = [...startDate];
let [d2, m2, y2] = [...endDate];
let totalSundays = 0;
for (let year = y1; year <= y2; year += 1){
	let startMonth = year == y1 ? m1 : 1;
	let endMonth = year == y2 ? m2 : 12;
	for (let month = startMonth; month <= endMonth; month += 1){
		if (month == m1 && year == y1 && d1 != 1)
			continue;
		else if (isSunday(1, month, year))
			totalSundays += 1;
	}
}
console.log(totalSundays);
```