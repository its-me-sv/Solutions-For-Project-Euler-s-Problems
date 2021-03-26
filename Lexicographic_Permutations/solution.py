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