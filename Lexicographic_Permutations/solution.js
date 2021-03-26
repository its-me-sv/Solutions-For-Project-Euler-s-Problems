const readline = require('readline');
rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("N: ", K => {
	K = +K;
	const array = "0123456789".split('');
	const N = array.length;
	let factorials = [1];
	for (let i = 1; i <= N; i += 1)
		factorials.push(factorials[i-1]*i);
	const getNthPermute = (arr, k, n = N, ans = []) => {
		if (n === 1){
			ans.push(arr[0]);
			return ans;
		}
		let index = Math.floor(k/factorials[n-1]);
		if (k % factorials[n-1] === 0)
			index -= 1;
		ans.push(arr.splice(index, 1)[0]);
		k -= factorials[n-1] * index;
		return getNthPermute(arr, k, n - 1, ans);
	};
	let answer = getNthPermute(array, K).join('');
	console.log(answer);
	rl.close();
});