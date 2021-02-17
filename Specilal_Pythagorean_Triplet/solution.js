const N = parseInt(prompt("N : "));
let product = -1;
let a, b, c;
for (a = 1; a <= N/3; a += 1){
	b = parseInt((N*N - 2*N*a)/(2*N - 2*a));
	c = N - a - b;
	if ((c*c == a*a + b*b) && (a*b*c > product))
	product = a*b*c;
}
alert(product);