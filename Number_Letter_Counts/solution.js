const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
const getHundred = value => {
	const a = ['One' , 'Two' , 'Three' , 'Four' , 'Five' , 'Six' , 'Seven' , 'Eight' , 'Nine'];
	const b = ['Eleven' , 'Twelve' , 'Thirteen' , 'Fourteen' , 'Fifteen' , 'Sixteen' , 'Seventeen' , 'Eighteen' , 'Nineteen'];
	const c = ['Ten', 'Twenty' , 'Thirty' , 'Forty' , 'Fifty' , 'Sixty' , 'Seventy' , 'Eighty','Ninety'];
	if (value === "000")
		return '';
	let ansString = '';
	if (value[0] !== '0'){
		ansString += a[value[0]-1] + ' ' + 'Hundred' + ' ';
		if (value[1] !== '0' || value[2] !== '0')
			ansString += 'And ';
	}
	let temp = +value.slice(1);
	if (temp > 10 && temp <= 19)
		ansString += b[temp-11] + ' ';
	else if (value[1] !== '0' && value[2] === '0')
		ansString += c[value[1]-1] + ' ';
	else if (value[1] === '0' && value[2] !== '0')
		ansString += a[value[2]-1] + ' ';
	else if (value[1] !== '0' && value[2] !== '0')
		ansString += c[value[1]-1] + ' ' + a[value[2]-1] + ' ';
	return ansString;
};
const getAsString = value => {
	let answer = '';
	while (value.length !== 12)
		value = '0' + value;
	let billion, million, thousand, hundred;
	billion = getHundred(value.slice(0, 3));
	million = getHundred(value.slice(3, 6));
	thousand = getHundred(value.slice(6, 9));
	hundred = getHundred(value.slice(9, value.length));
	if (billion !== '')
		answer += billion + 'Billion ';
	if (million !== '')
		answer += million + 'Million ';
	if (thousand !== '')
		answer += thousand + 'Thousand ';
	if (hundred !== '')
		answer += hundred + ' ';
	return answer;
};
readline.question("Limit : ", limit => {
	let answer = 0;
	for (let i = 1; i <= limit; i += 1){
		let numberString = getAsString(i+'');
		answer += numberString.split(' ').join('').length;
	}
	console.log(answer);
	readline.close();
});