file = open('input.txt')
lines = [line.replace('\n', '') for line in file.readlines()]
file.close()

startDate = list(map(int, lines[0].split()))
endDate = list(map(int, lines[1].split()))

def isSunday(d, m, y):
	if m < 3:
		m += 12
		y -= 1
	q = d
	k = y % 100
	j = y // 100
	h = (q + k + (k//4) + (j//4) + (5 * j) + ((13 * (m + 1))//5)) % 7
	return h == 1

d1, m1, y1 = startDate
d2, m2, y2 = endDate

totalSundays = 0

for year in range(y1, y2 + 1):
	startMonth = m1 if year == y1 else 1
	endMonth = m2 if year == y2 else 12
	for month in range(startMonth, endMonth + 1):
		if month == m1 and year == y1 and d1 != 1:
			continue
		elif isSunday(1, month, year):
			totalSundays += 1

print(totalSundays)