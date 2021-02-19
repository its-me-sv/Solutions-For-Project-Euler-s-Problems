from time import time

def prefixSE(n):
	start = time()
	prefixSum = [0,0]
	sieve = [True] * n
	for i in range(2,n):
		if sieve[i]:
			prefixSum.append(prefixSum[i-1]+i)
			for j in range(i*2,n,i):
				sieve[j] = False
		else:
			prefixSum.append(prefixSum[i-1])
	print("Using Sieve Of Eratosthenes, Ans : {}, Time : {}".format(prefixSum[n-1],time()-start))

N = int(input("N : ")) + 1
prefixSE(N)