limit = int(input("N : "))
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
print(tSum)