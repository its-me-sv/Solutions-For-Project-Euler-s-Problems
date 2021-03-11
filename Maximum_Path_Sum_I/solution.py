n = int(input())
triangle = [list(map(int, input().split())) for _ in range(n)]
def getMax(size, arr):
	row = size - 2
	while row >= 0:
		for i in range(len(arr[row])):
			arr[row][i] += max(arr[row+1][i], arr[row+1][i+1])
		row -= 1
	print(arr[0][0])
getMax(n, triangle[:])