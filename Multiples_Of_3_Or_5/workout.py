from time import time
def calcLoop(n):
	start = time()
	Sum3 = 0
	Sum5 = 0
	Sum15 = 0
	for i in range(1,n):
		if not i % 3:
			Sum3 += i
		if not i % 5:
			Sum5 += i
		if not i % 15:
			Sum15 += i
	print("Using Loops, Ans : {}, Time : {} seconds".format(Sum3 + Sum5 - Sum15, time() - start))

def calcMath(n):
	start = time()
	Sum3 = 3 * ((n-1) // 3) * (((n-1) // 3) + 1) // 2
	Sum5 = 5 * ((n-1) // 5) * (((n-1) // 5) + 1) // 2
	Sum15 = 15 * ((n-1) // 15) * (((n-1) // 15) + 1) // 2
	print("Using Maths, Ans : {}, Time : {} seconds".format(Sum3 + Sum5 - Sum15, time() - start))

n = int(input("Enter Upper Limit : "))
calcLoop(n)
calcMath(n)