from time import time

def iterativeSolution(n):
	start = time()
	sumSeriesSquare = 0
	sumSquaredSeries = 0
	for i in range(1, n + 1):
		sumSeriesSquare += i
		sumSquaredSeries += (i ** 2)
	sumSeriesSquare **= 2
	print("Using Loops, Ans : {}, Time : {} seconds".format(sumSeriesSquare - sumSquaredSeries,time()-start))

def mathematicalSolution(n):
	start = time()
	sumSeriesSquare = ((n*(n + 1))//2)**2
	sumSquaredSeries = (n*(n + 1)*((2*n)+1))//6
	print("Using Maths, Ans : {}, Time : {} seconds".format(sumSeriesSquare - sumSquaredSeries,time()-start))

N = int(input("Enter range : "))
mathematicalSolution(N)
iterativeSolution(N)