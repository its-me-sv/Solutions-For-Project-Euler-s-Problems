N = int(input("Enter range : "))
sumSeriesSquare = ((N*(N + 1))//2)**2
sumSquaredSeries = (N*(N + 1)*((2*N)+1))//6
print(sumSeriesSquare - sumSquaredSeries)