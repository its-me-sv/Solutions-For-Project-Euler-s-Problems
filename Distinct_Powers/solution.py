a = 2
b = int(input("B: "))

cache = []
distinctPowersCount = 0

for i in range(a, b + 1):
    for j in range(a, b + 1):
        val = i ** j
        if val not in cache:
            cache.append(val)
            distinctPowersCount += 1

print(distinctPowersCount)