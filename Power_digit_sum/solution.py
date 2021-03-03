no = int(input("N : "))
no = 2*(2**(no-1))
ans = 0
if no <= 10:
	ans = no
else:
	while no != 0:
		ans += no % 10
		no //= 10
print(ans)