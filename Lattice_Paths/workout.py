from time import time

factorials = [1]
def directSolution(N,M):
	start = time()
	for i in range(1, 1001):
		factorials.append(factorials[i-1]*i)
	ans = factorials[N+M]//(factorials[N]*factorials[M])
	print("Direct solution, Ans : {}, Time : {} Seconds".format(ans%1000000007, time()-start))

N, M = map(int, input("N and M : ").split())
directSolution(N, M)