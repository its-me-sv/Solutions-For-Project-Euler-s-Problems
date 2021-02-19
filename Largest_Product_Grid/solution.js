const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.split('\n').map(i=>i.slice(0,-1).split(' ').map(Number));

const n = input[0][0];
const grid = input.slice(1);
let maxProduct = 0, row, col, dg1, dg2;

for (let i = 0; i < n; i += 1){
	for (let j = 0; j < n-3; j += 1){
		row = grid[i][j]*grid[i][j+1]*grid[i][j+2]*grid[i][j+3];
		col = grid[j][i]*grid[j+1][i]*grid[j+2][i]*grid[j+3][i];
		maxProduct = Math.max(maxProduct, row, col);
		if (i < n-3){
			dg1 = grid[i][j]*grid[i+1][j+1]*grid[i+2][j+2]*grid[i+3][j+3];
			dg2 = grid[i][n-j-1]*grid[i+1][n-j-2]*grid[i+2][n-j-3]*grid[i+3][n-j-4];
			maxProduct = Math.max(maxProduct, dg1, dg2);
		}
	}
}

console.log(maxProduct);