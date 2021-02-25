def getLength(no):
	cnt = 0
	while no != 0:
		cnt += 1
		no //= 10
	return cnt
N = int(input("N : "))
total = 0
print("Enter numbers below :")
for _ in range(N):
	total += int(input())
power = getLength(total) - 10
answer = (total)//(10**power)
print("Answer :",answer)