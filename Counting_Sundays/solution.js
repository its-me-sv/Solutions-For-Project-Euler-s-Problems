const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');
input = input.replace(/(\r\n|\n|\r)/gm, ",").split(',');

let startDate = input[0].split(' ').map(Number);
let endDate = input[1].split(' ').map(Number);

const isSunday = (d, m, y) => {
	if (m < 3){
		m += 12;
		y -= 1;
	}
	let q = d;
	let k = y % 100;
	let j = Math.floor(y/100);
	let h = (q + k + Math.floor(k/4) + Math.floor(j/4) + (5 * j) + Math.floor((13 * (m + 1))/5))%7;
	return h == 1;
};

let [d1, m1, y1] = [...startDate];
let [d2, m2, y2] = [...endDate];
let totalSundays = 0;
for (let year = y1; year <= y2; year += 1){
	let startMonth = year == y1 ? m1 : 1;
	let endMonth = year == y2 ? m2 : 12;
	for (let month = startMonth; month <= endMonth; month += 1){
		if (month == m1 && year == y1 && d1 != 1)
			continue;
		else if (isSunday(1, month, year))
			totalSundays += 1;
	}
}
console.log(totalSundays);