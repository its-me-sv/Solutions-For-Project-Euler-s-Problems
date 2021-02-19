n = int(input("N : ")) + 1
prefixSum = [0,0]
sieve = [True] * n
for i in range(2,n):
	if sieve[i]:
		prefixSum.append(prefixSum[i-1]+i)
		for j in range(i*2,n,i):
			sieve[j] = False
	else:
		prefixSum.append(prefixSum[i-1])
print(prefixSum[n-1])