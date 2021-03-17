file = open('input.txt')
fileInput = file.readline()
file.close()

namesList = fileInput.replace('\"', '').split(',')

def getScore(name, pos):
	score = 0
	for letter in name:
		score += ord(letter) - 64
	return score * (pos + 1)

namesList.sort()
totalScore = 0
for pos, name in enumerate(namesList):
	totalScore += getScore(name, pos)

print(totalScore)