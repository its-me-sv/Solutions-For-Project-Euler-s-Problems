const fs = require('fs');

let input = fs.readFileSync('./rinput.txt', 'utf8');
input = input.replace(/(\r\n|\n|\r)/gm, ",").split(',');

let n = +input[0];
let triangle = [];
for (let i = 1; i <= n; i += 1)
	triangle.push(input[i].split(' ').map(Number));

const getMaxPure = (size, arr) => {
	let row = size - 2;
	let arrCpy = arr.slice();
	while (row >= 0){
		for (let i = 0; i < arrCpy[row].length; i += 1)
			arrCpy[row][i] += Math.max(arrCpy[row+1][i], arrCpy[row+1][i+1]);
		row -= 1;
	}
	const answer = arrCpy[0][0];
	console.log(answer);
};

getMaxPure(n, triangle);