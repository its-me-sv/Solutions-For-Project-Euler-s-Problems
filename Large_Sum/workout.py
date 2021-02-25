from time import time

def directSolution(n, nos):
	start = time()
	def getLength(no):
	    cnt = 0
	    while no != 0:
	        cnt += 1
	        no //= 10
	    return cnt
	total = 0
	for no in nos:
		total += no
	power = getLength(total) - 10
	answer = (total)//(10**power)
	print("Without using inbuilt functions, Ans : {} Time : {} seconds".format(answer, time()-start))

N = int(input("N : "))
nos = list()
print("Enter numbers : ")
for _ in range(N):
	nos.append(int(input()))
directSolution(N, nos)