const limit = parseInt(prompt("N : "));
const getDivisors = no => {
	if (no == 1)
		return 1;
	let i = 2, total = 1;
	let temp = no;
	while (i*i <= temp){
		let cnt = 1;
		while(temp%i == 0){
			temp = Math.floor(temp/i);
			cnt += 1;
		}
		i += 1;
		total *= cnt;
	}
	if (temp == no || temp > 1)
		total *= 2;
	return total;
};
let n = 1, tSum = 1;
while (getDivisors(tSum) <= limit){
	n += 1;
	tSum += n;
}
alert(tSum);