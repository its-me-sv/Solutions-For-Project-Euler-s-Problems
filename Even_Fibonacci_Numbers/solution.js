const MAXVAL = prompt("Enter Maximum Value : ") - 0;
if (MAXVAL < 2)
alert(0);
else if (MAXVAL < 8)
alert(2);
else {
	let sumEven = 10, secondPrev = 2, firstPrev = 8;
	let currNum;
	while (true){
		currNum = (firstPrev*4) + secondPrev;
		if (currNum > MAXVAL)
		break;
		sumEven += currNum;
		secondPrev = firstPrev;
		firstPrev = currNum;
	}
	alert(sumEven);
}