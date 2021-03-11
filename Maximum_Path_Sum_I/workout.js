const fs = require('fs');
const {performance} = require('perf_hooks');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.replace(/(\r\n|\n|\r)/gm, ",").split(',');

let n = +input[0];
let triangle = [];
for (let i = 1; i <= n; i += 1)
	triangle.push(input[i].split(' ').map(Number));

const directSolution = (size, arr) => {
	const start = performance.now();
	let row = size - 2;
	let arrCpy = arr.slice();
	while (row >= 0){
		for (let i = 0; i < arrCpy[row].length; i += 1)
			arrCpy[row][i] += Math.max(arrCpy[row+1][i], arrCpy[row+1][i+1]);
		row -= 1;
	}
	const answer = arrCpy[0][0];
	console.log(`Direct Solution, Ans : ${answer}, Time : ${(performance.now()-start)/1000} seconds`);
};

directSolution(n, triangle);