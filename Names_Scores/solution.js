const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
let namesList = input.split(',').map(i => i.slice(1, -1));

const getScore = (name, pos) => {
	let score = 0;
	for (letter of name)
		score += letter.charCodeAt() - 64;
	return score * (pos + 1);
};

namesList = namesList.sort();
let totalScore = 0;
for (let i = 0; i < namesList.length; i += 1)
	totalScore += getScore(namesList[i], i);

console.log(totalScore);