const n = parseInt(prompt("N : "));
let prefixSum = [0, 0];
let sieve = [];
for (let i = 2; i <= n; i += 1){
	if (!sieve[i]){
		prefixSum.push(prefixSum[i-1]+i);
		for (let j = i * 2; j <= n; j += i)
		sieve[j] = true;
	} else
	prefixSum.push(prefixSum[i-1]);
}
alert(prefixSum[n]);