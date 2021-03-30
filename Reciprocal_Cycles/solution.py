def getCycleLength(n):
	cache = {1:1}
	i = 2
	nr = 1
	while True:
		nr *= 10
		rem = nr % n
		if not rem:
			return 0
		if rem in cache:
			return i - cache[rem]
		cache[rem] = i
		i += 1
		nr = rem

answers = {3:3, 4:3}
cycleLength = {3:1, 4:1}

for i in range(5, 10001):
	cl = getCycleLength(i)
	if cl > cycleLength[answers[i-1]]:
		answers[i] = i
		cycleLength[i] = cl
	else:
		answers[i] = answers[i-1]
		cycleLength[i] = cycleLength[i-1]

N = int(input("N: ")) - 1
print(answers[N])