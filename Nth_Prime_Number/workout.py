from time import time

def iterativeSolution(n):
	start = time()
	MAXVAL = 110000
	sieve = [True] * MAXVAL
	number = 2
	while number <= MAXVAL ** 0.5:
		if sieve[number]:
			for i in range(number * 2, MAXVAL, number):
				sieve[i] = False
		number += 1
	allPrimes = [no for no in range(2, MAXVAL) if sieve[no]]
	print("Using Loops, Ans : {}, Time : {} seconds".format(allPrimes[n - 1], time() - start))

N = int(input("Enter N : "))
iterativeSolution(N)