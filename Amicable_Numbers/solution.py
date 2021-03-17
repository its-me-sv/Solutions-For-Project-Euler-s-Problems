def getProperDivisorsSum(no):
	answer = 1
	for i in range(2, int(no ** 0.5)):
		if not no % i:
			answer += i if i == no//i else i + (no//i)
	return answer

n = int(input("Range: "))

amicableSum = [0]
divisorSum = [0]

for i in range(1, n + 1):
	divisorSum.append(getProperDivisorsSum(i))
	if i == getProperDivisorsSum(divisorSum[i]) and i != divisorSum[i]:
		amicableSum.append(amicableSum[i-1] + i)
	else:
		amicableSum.append(amicableSum[i-1])

print(amicableSum[n])