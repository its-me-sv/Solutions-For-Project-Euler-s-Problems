from time import time

def itertativeSolution(grid):
	start = time()
	n = len(grid)
	maxProduct = 0
	for i in range(n):
		for j in range(n-3):
			row = grid[i][j]*grid[i][j+1]*grid[i][j+2]*grid[i][j+3]
			col = grid[j][i]*grid[j+1][i]*grid[j+2][i]*grid[j+3][i]
			maxProduct = max(maxProduct, row, col)
			if i < n-3:
				dg1 = grid[i][j]*grid[i+1][j+1]*grid[i+2][j+2]*grid[i+3][j+3]
				dg2 = grid[i][n-j-1]*grid[i+1][n-j-2]*grid[i+2][n-j-3]*grid[i+3][n-j-4]
				maxProduct = max(maxProduct, dg1, dg2)
	print("Using Loops, Ans : {}, Time : {} seconds".format(maxProduct, time()-start))

n = int(input("N : "))
grid = [list(map(int,input().split())) for _ in range(n)]

itertativeSolution(grid)