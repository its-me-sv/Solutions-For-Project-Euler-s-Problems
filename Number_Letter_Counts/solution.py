def getHundred(value):
	a = ['One' , 'Two' , 'Three' , 'Four' , 'Five' , 'Six' , 'Seven' , 'Eight' , 'Nine']
	b = ['Eleven' , 'Twelve' , 'Thirteen' , 'Fourteen' , 'Fifteen' , 'Sixteen' , 'Seventeen' , 'Eighteen' , 'Nineteen']
	c = ['Ten', 'Twenty' , 'Thirty' , 'Forty' , 'Fifty' , 'Sixty' , 'Seventy' , 'Eighty','Ninety']
	if value == "000":
		return ''
	ansString = ""
	if value[0] != '0':
		ansString += a[int(value[0])-1] + ' Hundred '
		if value[1] != '0' or value[2] != '0':
			ansString += 'And '
	temp = int(value[1:])
	if 10 < temp <= 19:
		ansString += b[temp-11] + ' '
	elif value[1] != '0' and value[2] == '0':
		ansString += c[int(value[1])-1] + ' '
	elif value[1] == '0' and value[2] != '0':
		ansString += a[int(value[2])-1] + ' '
	elif value[1] != '0' and value[2] != '0':
		ansString += c[int(value[1])-1] + ' ' + a[int(value[2])-1] + ' '
	return ansString

def getAsString(value):
	answer = ''
	while len(value) != 12:
		value = '0' + value
	billion = getHundred(value[:3])
	million = getHundred(value[3:6])
	thousand = getHundred(value[6:9])
	hundred = getHundred(value[9:])
	if billion != '':
		answer += billion + 'Billion '
	if million != '':
		answer += million + 'Million '
	if thousand != '':
		answer += thousand + 'Thousand '
	if hundred != '':
		answer += hundred + ' '
	return answer

limit = int(input("Limit : "))
answer = 0
for i in range(1, limit+1):
	numberString = getAsString(str(i))
	answer += len(''.join(numberString.split()))
print(answer)