const getLength = no => {
	let cnt = 0;
	while (no != 0){
		cnt += 1;
		no = Math.floor(no/10);
	}
	return cnt;
};
let N = parseInt(prompt("N : "));
let total = 0;
alert("Enter Numbers : ");
for (let i = 0; i < N; i++)
	total += parseInt(prompt());
let power = getLength(total) - 10;
const answer = Math.floor(total/(10**power));
alert(answer);