from time import time
def calcLoop(n):
	start = time()
	largestPrime = 0
	def is_Prime(no):
		if no < 2:
			return False
		for i in range(2,no):
			if not no % i:
				return False
		return True
	for i in range(n,0,-1):
		if not n % i and is_Prime(i):
			largestPrime = i
			break
	print("Using Loops, Ans : {}, Time : {} seconds".format(largestPrime,time()-start))

def calcMath(n):
	start = time()
	largestPrime = 0
	while not n % 2:
		largestPrime = 2
		n //= 2
	i = 3  
	while i < int(n**0.5):
		while not n % i:
			largestPrime = i
			n //= i
		i += 2
	if n > 2:
		largestPrime = n
	print("Using Maths, Ans : {}, Time : {} seconds".format(largestPrime, time() - start))

n = int(input("Enter No : "))
calcLoop(n)
calcMath(n)