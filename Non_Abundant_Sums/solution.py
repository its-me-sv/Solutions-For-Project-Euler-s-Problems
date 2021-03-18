MAXVALUE = 28124

abundants = list()
allNumbers = ["NO"] * MAXVALUE

def divisorSum(n):
	result = 1
	for i in range(2, int(n ** 0.5) + 1):
		if not n % i:
			result += i if i == n//i else i + (n//i)
	return result

for i in range(1, MAXVALUE):
	ds = divisorSum(i)
	if ds > i:
		abundants.append(i)

for i in range(len(abundants)):
	for j in range(i, len(abundants)):
		if abundants[i] + abundants[j] >= MAXVALUE:
			break
		allNumbers[abundants[i] + abundants[j]] = "YES"

no = int(input("Number: "))
answer = 0
# For Project Euler
# for i in range(1, MAXVALUE):
# 	answer += i if allNumbers[i] == "NO" else 0
# print(answer)
answer = "YES" if no >= MAXVALUE else allNumbers[no]
print(answer)