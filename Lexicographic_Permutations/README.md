# Program to find `Nth Permutation` of an given `Sequence`
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution
#### `NOTE:` Change the `string` to any other string other than `"0123456789"` to get the `nth` permutation of that string
## 🐢  🐇 Direct Solution :
```javascript
const directSolution = K => {
	const array = "0123456789".split('');
	const N = array.length;
	let factorials = [1];
	for (let i = 1; i <= N; i += 1)
		factorials.push(factorials[i-1]*i);
	const getNthPermute = (arr, k, n = N, ans = []) => {
		if (n === 1){
			ans.push(arr[0]);
			return ans;
		}
		let index = Math.floor(k/factorials[n-1]);
		if (k % factorials[n-1] === 0)
			index -= 1;
		ans.push(arr.splice(index, 1)[0]);
		k -= factorials[n-1] * index;
		return getNthPermute(arr, k, n - 1, ans);
	};
	let answer = getNthPermute(array, K).join('');
	console.log(answer);
};
```
#### Time Complexity = O(N)
#### First, we `precompute` all the `factorials` from `1` to length of string ie. `N`
#### Second, we create a `function` with following parameters:
```
arr = The array which holds contents of string in the form of an array/list
k = The nth permutation to be found
n = The live size of arr
ans = Empty array/string in which the final answer will be stored
```
#### Below is the `algorithm` for the `function`:
#### 1. Check if `n` is `1`, if `True` append the `1st` element to the `ans` and return the `ans`
#### 2. If `step 1` is not satisfied, compute `index`
#### 3. `index` = floor Divison of `k` by `factorials[n-1]`
#### 4. If `k` was `exactly divisble` by `factorials[n-1]`, reduce k by `1`
#### 5. Append the `element` of `index` from `arr` to `ans` and `remove` the element from `arr`
#### 6. Deduce `k` by `factorials[n-1] * index`
#### 7. Return the `same function` with the `same arguments` as mentioned in `second step` after deducing `n` by `1`
#### Outside the function, accept an `integer` from user and `call our function`
##### Credits : [TECH DOSE](https://www.youtube.com/watch?v=W9SIlE2jhBQ)
## 🤔 Comparing all the solutions 
### Code used for comparing [workout.js](workout.js)
#### Case 1, `N = 1`
```
N: 1
Direct Solution, Ans: 0123456789, Time: 0.00006510000000707805 seconds
```
#### Case 2, `N = 10 ^ 2`
```
N: 100
Direct Solution, Ans: 0123495786, Time: 0.00006490000011399389 seconds
```
#### Case 3, `N = 10 ^ 4`
```
N: 10000
Direct Solution, Ans: 0139846572, Time: 0.00006510000000707805 seconds
```
#### Case 4, `N = 10 ^ 6`
```
N: 1000000
Direct Solution, Ans: 2783915460, Time: 0.0000645000000949949 seconds
```
## Time complexity of solutions
### 🐢 🐇 Direct Solution => O(N)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
string = "0123456789"
array = list(string)
N = len(string)

factorials = [1]
for i in range(1, N + 1):
	factorials.append(factorials[i-1] * i)

def getNthPermutation(arr, k, n = N, ans = ""):
	if n == 1:
		ans += arr.pop()
		return ans
	index = k // factorials[n - 1]
	if not k % factorials[n - 1]:
		index -= 1
	ans += arr.pop(index)
	k -= factorials[n - 1] * index
	return getNthPermutation(arr, k, n - 1, ans)

n = int(input("N: "))
print(getNthPermutation(array[:], n))
```
#### Solution in [JavaScript](solution.js)
```javascript
const readline = require('readline');
rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("N: ", K => {
	K = +K;
	const array = "0123456789".split('');
	const N = array.length;
	let factorials = [1];
	for (let i = 1; i <= N; i += 1)
		factorials.push(factorials[i-1]*i);
	const getNthPermute = (arr, k, n = N, ans = []) => {
		if (n === 1){
			ans.push(arr[0]);
			return ans;
		}
		let index = Math.floor(k/factorials[n-1]);
		if (k % factorials[n-1] === 0)
			index -= 1;
		ans.push(arr.splice(index, 1)[0]);
		k -= factorials[n-1] * index;
		return getNthPermute(arr, k, n - 1, ans);
	};
	let answer = getNthPermute(array, K).join('');
	console.log(answer);
	rl.close();
});
```