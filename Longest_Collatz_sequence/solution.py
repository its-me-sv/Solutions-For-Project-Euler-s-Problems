cache = {1:1}
def getCollatzLength(no):
	if no in cache:
		return cache[no]
	result = 1 + getCollatzLength(3*no + 1 if no % 2 else no//2)
	cache[no] = result
	return result
limit = int(input("Limit : "))
maxValue = 1
maxLength = 1
for i in range(limit//2, limit):
	currLength = getCollatzLength(i)
	if currLength >= maxLength:
		maxLength = currLength
		maxValue = i
print(maxValue)