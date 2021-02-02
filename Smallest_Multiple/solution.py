from functools import reduce
n = int(input("Enter upper limit : "))
getGCD = lambda a,b : a if not b else getGCD(b,a%b)
getLCM = lambda a,b : (a*b)//getGCD(a,b)
print(reduce(getLCM, range(1, n+1)))