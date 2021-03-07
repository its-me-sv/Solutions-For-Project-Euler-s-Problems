# Programme to find `Letter Count` of all the numbers in the range `1` to `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directionSolution = no => {
	const getHundred = value => {
		const a = ['One' , 'Two' , 'Three' , 'Four' , 'Five' , 'Six' , 'Seven' , 'Eight' , 'Nine'];
		const b = ['Eleven' , 'Twelve' , 'Thirteen' , 'Fourteen' , 'Fifteen' , 'Sixteen' , 'Seventeen' , 'Eighteen' , 'Nineteen'];
		const c = ['Ten', 'Twenty' , 'Thirty' , 'Forty' , 'Fifty' , 'Sixty' , 'Seventy' , 'Eighty','Ninety'];
		if (value === "000")
			return '';
		let ansString = '';
		if (value[0] !== '0'){
			ansString += a[value[0]-1] + ' ' + 'Hundred' + ' ';
			if (value[1] !== '0' || value[2] !== '0')
				ansString += 'And ';
		}
		let temp = +value.slice(1);
		if (temp > 10 && temp <= 19)
			ansString += b[temp-11] + ' ';
		else if (value[1] !== '0' && value[2] === '0')
			ansString += c[value[1]-1] + ' ';
		else if (value[1] === '0' && value[2] !== '0')
			ansString += a[value[2]-1] + ' ';
		else if (value[1] !== '0' && value[2] !== '0')
			ansString += c[value[1]-1] + ' ' + a[value[2]-1] + ' ';
		return ansString;
	};
	const getAsString = value => {
		let answer = '';
		while (value.length !== 12)
			value = '0' + value;
		let billion, million, thousand, hundred;
		billion = getHundred(value.slice(0, 3));
		million = getHundred(value.slice(3, 6));
		thousand = getHundred(value.slice(6, 9));
		hundred = getHundred(value.slice(9, value.length));
		if (billion !== '')
			answer += billion + 'Billion ';
		if (million !== '')
			answer += million + 'Million ';
		if (thousand !== '')
			answer += thousand + 'Thousand ';
		if (hundred !== '')
			answer += hundred + ' ';
		return answer;
	};
	let answer = 0;
	for (let i = 1; i <= no; i += 1){
		let numberString = getAsString(i+'');
		answer += numberString.split(' ').join('').length;
	}
	console.log(answer);
};
```
#### Time Complexity = O(N)
#### In this solution, we will create 2 functions, `getHundred` and `getAsString`. The `getHundred` function will take an `string` of length `3` as argument and will return it in words.
#### The `getAsString` function will take an `number` as argument and adds `zeros` at the head until the length becomes `12`. We would now `split` the number by `4` and find their words using the `getHundred` function, we would check whether the respective `denotions[Billion, Million, Thousand, Hundred]` are valid for the given number, if they are valid we will add them to the final string along with their `word represenation` and `denotion`.
#### We can now iterate from `1` till `N` and find the `word count` of each `no` in ther range, after replacing the `space` with `empty` character we can add that `string length` to an variable, in our case it is `answer`.
## 🤔 Comparing all the solutions
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 5`
```
Limit : 5
Direct Solution, Ans : 19, Time : 0.00012839999981224538 seconds
```
#### Case 2, `N = 100`
```
Limit : 100
Direct Solution, Ans : 864, Time : 0.0003739999998360872 seconds
```
#### Case 3, `N = 1000`
```
Limit : 1000
Direct Solution, Ans : 21124, Time : 0.018285199999809265 seconds
```
#### Case 4, `N = 10000`
```
Limit : 10000
Direct Solution, Ans : 319141, Time : 0.03277929999865591 seconds
```
#### Case 5, `N = 1000000`
```
Limit : 1000000
Direct Solution, Ans : 50218010, Time : 1.3575420999992638 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
def getHundred(value):
	a = ['One' , 'Two' , 'Three' , 'Four' , 'Five' , 'Six' , 'Seven' , 'Eight' , 'Nine']
	b = ['Eleven' , 'Twelve' , 'Thirteen' , 'Fourteen' , 'Fifteen' , 'Sixteen' , 'Seventeen' , 'Eighteen' , 'Nineteen']
	c = ['Ten', 'Twenty' , 'Thirty' , 'Forty' , 'Fifty' , 'Sixty' , 'Seventy' , 'Eighty','Ninety']
	if value == "000":
		return ''
	ansString = ""
	if value[0] != '0':
		ansString += a[int(value[0])-1] + ' Hundred '
		if value[1] != '0' or value[2] != '0':
			ansString += 'And '
	temp = int(value[1:])
	if 10 < temp <= 19:
		ansString += b[temp-11] + ' '
	elif value[1] != '0' and value[2] == '0':
		ansString += c[int(value[1])-1] + ' '
	elif value[1] == '0' and value[2] != '0':
		ansString += a[int(value[2])-1] + ' '
	elif value[1] != '0' and value[2] != '0':
		ansString += c[int(value[1])-1] + ' ' + a[int(value[2])-1] + ' '
	return ansString

def getAsString(value):
	answer = ''
	while len(value) != 12:
		value = '0' + value
	billion = getHundred(value[:3])
	million = getHundred(value[3:6])
	thousand = getHundred(value[6:9])
	hundred = getHundred(value[9:])
	if billion != '':
		answer += billion + 'Billion '
	if million != '':
		answer += million + 'Million '
	if thousand != '':
		answer += thousand + 'Thousand '
	if hundred != '':
		answer += hundred + ' '
	return answer

limit = int(input("Limit : "))
answer = 0
for i in range(1, limit+1):
	numberString = getAsString(str(i))
	answer += len(''.join(numberString.split()))
print(answer)
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
const getHundred = value => {
	const a = ['One' , 'Two' , 'Three' , 'Four' , 'Five' , 'Six' , 'Seven' , 'Eight' , 'Nine'];
	const b = ['Eleven' , 'Twelve' , 'Thirteen' , 'Fourteen' , 'Fifteen' , 'Sixteen' , 'Seventeen' , 'Eighteen' , 'Nineteen'];
	const c = ['Ten', 'Twenty' , 'Thirty' , 'Forty' , 'Fifty' , 'Sixty' , 'Seventy' , 'Eighty','Ninety'];
	if (value === "000")
		return '';
	let ansString = '';
	if (value[0] !== '0'){
		ansString += a[value[0]-1] + ' ' + 'Hundred' + ' ';
		if (value[1] !== '0' || value[2] !== '0')
			ansString += 'And ';
	}
	let temp = +value.slice(1);
	if (temp > 10 && temp <= 19)
		ansString += b[temp-11] + ' ';
	else if (value[1] !== '0' && value[2] === '0')
		ansString += c[value[1]-1] + ' ';
	else if (value[1] === '0' && value[2] !== '0')
		ansString += a[value[2]-1] + ' ';
	else if (value[1] !== '0' && value[2] !== '0')
		ansString += c[value[1]-1] + ' ' + a[value[2]-1] + ' ';
	return ansString;
};
const getAsString = value => {
	let answer = '';
	while (value.length !== 12)
		value = '0' + value;
	let billion, million, thousand, hundred;
	billion = getHundred(value.slice(0, 3));
	million = getHundred(value.slice(3, 6));
	thousand = getHundred(value.slice(6, 9));
	hundred = getHundred(value.slice(9, value.length));
	if (billion !== '')
		answer += billion + 'Billion ';
	if (million !== '')
		answer += million + 'Million ';
	if (thousand !== '')
		answer += thousand + 'Thousand ';
	if (hundred !== '')
		answer += hundred + ' ';
	return answer;
};
readline.question("Limit : ", limit => {
	let answer = 0;
	for (let i = 1; i <= limit; i += 1){
		let numberString = getAsString(i+'');
		answer += numberString.split(' ').join('').length;
	}
	console.log(answer);
	readline.close();
});
```