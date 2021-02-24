from time import time

def iterativeSolution(limit):
	start = time()
	def getDivisors(no):
		cnt = 0
		for i in range(1,no+1):
			if not no % i:
				cnt += 1
		return cnt
	n = 1
	tSum = 1
	while getDivisors(tSum) <= limit:
		n += 1
		tSum += n
	print("Iterative solution, Ans : {}, Time : {} seconds".format(tSum, time()-start))

def mathematicalSolution(limit):
	start = time()
	def getDivisors(no):
		if no == 1:
			return 1
		i, total = 2, 1
		temp = no
		while i*i <= temp:
			cnt = 1
			while not temp % i:
				temp //= i
				cnt += 1
			i += 1
			total *= cnt
		if temp == no or temp > 1:
			total *= 2
		return total
	n = 1
	tSum = 1
	while getDivisors(tSum) <= limit:
		n += 1
		tSum += n
	print("Mathematical solution, Ans : {}, Time : {} seconds".format(tSum, time()-start))

n = int(input("N : "))
iterativeSolution(n)
mathematicalSolution(n)