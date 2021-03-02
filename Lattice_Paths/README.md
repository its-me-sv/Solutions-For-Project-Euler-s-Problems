# Programme to find the `total no of lattice paths` from `(0, 0)` till `(N, M)` of an `N x M` grid
## Table of Contents :
### • 🧪 All Solutions
### • 🤔 Comparison of solutions
### • ✅ Final / Efficient solution in JavaScript and Python
## 🧪 This problem has 1 solution :
### • Direct Solution `(modified prefix sum algorithm)`
#### `Note : ` Since the answers for some inputs are very large we will `apply mod 10^9 + 7` to the final solution. But still we face `runtime error` in `JavaScript` because of the `large value`.
## 🐢  🐇 Direct Solution :
```python
factorials = [1]
def directSolution(N,M):
	for i in range(1, 1001):
		factorials.append(factorials[i-1]*i)
	ans = factorials[N+M]//(factorials[N]*factorials[M])
	print(ans%1000000007)
```
#### Time Complexity = O(10^3)
#### In this solution we make use of [Prefix Sum](https://en.wikipedia.org/wiki/Prefix_sum). But we make some changes so that that the `factorials` array will hold factorial of `i th number`.
#### We use the below formula,
```
possible lattice paths from (0,0) -> (M, N) = (N+M)!/N!M!
```
#### Assuming the fact there `M+N` combinations of possible ways in which there are `N` combinations of possible paths and `M` combinationas of possible paths, We would arrive at the above formula. 
#### For example it is the possible way of choosing 1 ball from 2 red balls and 2 green balls which is `4!/2!2!`. You can know more about the lattice from [here](https://en.wikipedia.org/wiki/Lattice_path).
## 🤔 Comparing all the solutions
### Code used for comparing [workout.py](workout.py)
#### Case 1, `N = 2`
```
N and M : 2 2
Direct solution, Ans : 6, Time : 0.0 Seconds
```
#### Case 2, `N = 10`
```
N and M : 10 10
Direct solution, Ans : 184756, Time : 0.0009970664978027344 Seconds
```
#### Case 3, `N = 20`
```
N and M : 20 20
Direct solution, Ans : 846527861, Time : 0.000997304916381836 Seconds
```
#### Case 4, `N = 500`
```
N and M : 500 500
Direct solution, Ans : 159835829, Time : 0.0009794235229492188 Seconds
```
## Time complexity of solutions 
### 🐢 🐇 Direct Solution => O(10^3)
## ✅ Final / Efficient solution 
#### Solution in [Python](solution.py)
```python
factorials = [1]
for i in range(1, 1001):
	factorials.append(factorials[i-1]*i)
N, M = map(int, input("N and M : ").split())
ans = factorials[N+M]//(factorials[N]*factorials[M])
print(ans%1000000007)
```
#### Solution in [JavaScript](solution.js)
```javascript
let factorials = [1];
const applyMod = no => no % 1000000007;
for (let i = 1; i <= 40; i += 1)
	factorials[i] = factorials[i-1]*i;
let [N, M] = prompt("N and M : ").split(" ").map(Number);
let nr = factorials[N+M];
let dr = factorials[N]*factorials[M];
let ans = Math.floor(nr/dr);
alert(ans % 1000000007);
```