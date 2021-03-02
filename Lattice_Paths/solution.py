factorials = [1]
for i in range(1, 1001):
	factorials.append(factorials[i-1]*i)
N, M = map(int, input("N and M : ").split())
ans = factorials[N+M]//(factorials[N]*factorials[M])
print(ans%1000000007)