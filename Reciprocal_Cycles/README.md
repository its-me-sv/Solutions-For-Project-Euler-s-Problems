# Program to find the number with `longest recurring cycle` in its `fraction` under `N`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = n => {
	const getCycleLength = no => {
		let cache = [];
		cache[1] = 1;
		let i = 2;
		let nr = 1;
		while (true){
			nr *= 10;
			let rem = nr % no;
			if (rem == 0)
				return 0;
			if (cache[rem])
				return i - cache[rem];
			cache[rem] = i;
			i += 1;
			nr = rem;
		}
	};
	let answers = [];
	let cycleLengths = [];
	answers[3] = 3;
	answers[4] = 3;
	cycleLengths[3] = 1;
	cycleLengths[4] = 1;
	for (let i = 5; i <= 10000; i += 1){
		let len = getCycleLength(i);
		if (len > cycleLengths[answers[i-1]]){
			answers[i] = i;
			cycleLengths[i] = len;
		} else{
			answers[i] = answers[i-1];
			cycleLengths[i] = cycleLengths[i-1];
		}
	}
	const ans = answers[n-1];
	console.log(ans);
};
```
#### Time Complexity = O(K) `[K = 40000]`
#### With N = 7, to find the cycle length of N we need to analyse the below pattern
```
1) 1 % 7 = 1
2) (1 * 10) % 7 = 3
3) (3 * 10) % 7 = 2
4) (2 * 10) % 7 = 6
5) (6 * 10) % 7 = 4
6) (4 * 10) % 7 = 5
7) (5 * 10) % 7 = 1
```
#### In the `7th step` we can find remainder = `1`, we can also see that `remainder is 1` for the `1st step` also. So our `answer` ie. length of the `recurring cycle` is the `differnce` between `step 7 and step 1` = 7 - 1 = `6`
#### We would now implement this to `getCycleLength` function.
```
cache = holds the remainder obtained at each step, for every element in cache, cache[rem] = step
i = refers to the step
nr = refers to numerator, which is always increased by 10 times the remainder obtained in the previous step
```
#### We would initialise `cache` to an `empty array or dictionary`. Since for any N > 1, `1 % N is always 1`. So we would add `cache[1] = 1`. Since we know this, we can assign `i` to `2` (second step) and `nr` to `1`.
#### Using an `while loop` we will do the following:
```
1) Multiply numerator by 10 ie. nr *= 10
2) Calculate remainder ie. rem = nr % no
3) if rem is 0 we return 0
4) if rem was already found in another step, we will return the differnce between current step i and the previous step with same remainder ie. cache[rem]
5) If step 3 and 4 were not satisfied, means that the current remainder is not obtained in any previous step
6) So we add cache[rem] = step
7) Increment the step ie. i by 1
8) Update numertor with current remainder ie. nr = rem
```
#### Using the concept of `Tabulation` which is an [Bottom Up](https://en.wikipedia.org/wiki/Bottom-up) approach in [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) we would calculate the `cycle length` for first `10 ^ 4` numbers and we would also keep an record of `maximum cycle length` under the given number in the loop.
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 10 ^ 1`
```
N: 10
Direct Solution, Ans: 7, Time: 0.9614052999997511 seconds
```
#### Case 2, `N = 10 ^ 2`
```
N: 100
Direct Solution, Ans: 97, Time: 0.9520766999996267 seconds
```
#### Case 3, `N = 10 ^ 3`
```
N: 1000
Direct Solution, Ans: 983, Time: 0.9581902999999001 seconds
```
#### Case 4, `N = 10 ^ 4`
```
N: 10000
Direct Solution, Ans: 9967, Time: 0.9549843999999575 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(K) `[K = 40000]`
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
def getCycleLength(n):
	cache = {1:1}
	i = 2
	nr = 1
	while True:
		nr *= 10
		rem = nr % n
		if not rem:
			return 0
		if rem in cache:
			return i - cache[rem]
		cache[rem] = i
		i += 1
		nr = rem

answers = {3:3, 4:3}
cycleLength = {3:1, 4:1}

for i in range(5, 10001):
	cl = getCycleLength(i)
	if cl > cycleLength[answers[i-1]]:
		answers[i] = i
		cycleLength[i] = cl
	else:
		answers[i] = answers[i-1]
		cycleLength[i] = cycleLength[i-1]

N = int(input("N: ")) - 1
print(answers[N])
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const getCycleLength = no => {
	let cache = [];
	cache[1] = 1;
	let i = 2;
	let nr = 1;
	while (true){
		nr *= 10;
		let rem = nr % no;
		if (rem == 0)
			return 0;
		if (cache[rem])
			return i - cache[rem];
		cache[rem] = i;
		i += 1;
		nr = rem;
	}
};

let answers = [];
let cycleLengths = [];
answers[3] = 3;
answers[4] = 3;
cycleLengths[3] = 1;
cycleLengths[4] = 1;
for (let i = 5; i <= 10000; i += 1){
	let len = getCycleLength(i);
	if (len > cycleLengths[answers[i-1]]){
		answers[i] = i;
		cycleLengths[i] = len;
	} else{
		answers[i] = answers[i-1];
		cycleLengths[i] = cycleLengths[i-1];
	}
}

rl.question("N: ", N => {
	console.log(answers[+N-1]);
	rl.close();
});
```