let N = +prompt("Enter upper limit : ");
const sumSeriesSquare = ((N*(N + 1))/2)**2;
const sumSquaredSeries = (N*(N + 1)*((2*N)+1))/6;
alert(sumSeriesSquare - sumSquaredSeries);