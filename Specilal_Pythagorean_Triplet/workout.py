from time import time

def usingLoops(no):
	start = time()
	product = -1
	for a in range(1,no//3):
		for b in range(a,no//2):
			c = no-a-b
			if c*c == a*a + b*b:
				product = max(product, a*b*c)
	print("Using Loops, Ans : {}, Time : {} seconds".format(product, time() - start))

def usingMaths(no):
	start = time()
	product = -1
	for a in range(1,(no//3)+1):
		b = (no*no - 2*no*a)//(2*no - 2*a)
		c = no - a - b
		if c*c == a*a + b*b:
			product = max(product, a*b*c)
	print("Using Maths, Ans : {}, Time : {} seconds".format(product, time() - start))

N = int(input("N : "))
usingLoops(N)
usingMaths(N)