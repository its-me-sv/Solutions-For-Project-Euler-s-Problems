n = int(input("Enter Upper Limit : ")) - 1
getSum = lambda x : x * (n // x) * ((n // x) + 1) // 2
print(getSum(3)+getSum(5)-getSum(15))