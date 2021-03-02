let factorials = [1];
const applyMod = no => no % 1000000007;
for (let i = 1; i <= 40; i += 1)
	factorials[i] = factorials[i-1]*i;
let [N, M] = prompt("N and M : ").split(" ").map(Number);
let nr = factorials[N+M];
let dr = factorials[N]*factorials[M];
let ans = Math.floor(nr/dr);
alert(ans % 1000000007);