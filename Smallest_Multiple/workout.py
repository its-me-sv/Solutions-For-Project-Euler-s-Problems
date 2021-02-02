from time import time
from functools import reduce

def iterativeSolution(n):
	start = time()
	i = 1
	while True:
		for no in range(1, n+1):
			if i % no:
				break
		else:
			print("Iterative solution, Ans : {}, Time : {} seconds".format(i, time()-start))
			return
		i += 1

def mathematicalSolution(n):
	start = time()
	getGCD = lambda a,b : a if not b else getGCD(b,a%b)
	getLCM = lambda a,b : (a*b)//getGCD(a,b)
	print("Mathematical solution, Ans : {}, Time : {} seconds"
		.format(reduce(getLCM, range(1, n+1)), time()-start))

no = int(input("Enter upper limit : "))
iterativeSolution(no)
mathematicalSolution(no)