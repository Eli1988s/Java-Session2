var a = 5;
var b = 10;
var c = "5";
var d = false;
var arr = [1, 2, 3, true, 4, false];



Q1 = (!(b<5) && b >=(a*2));
console.log(Q1);
// The Answer is True.

// *****************

Q2 = (!(a == c) || a !==c);
console.log(Q2);
// The Answer is True.

// *****************

Q3 = (d == false && b-7 > a && d);
console.log(Q3);
// The Answer is False.

// *****************

Q4 = (a && b && c);
console.log(Q4);
// The Answer is 5.

// *****************

Q5 = (!a || !d == true || !d);
console.log(Q5);
// The Answer is True.

// *****************

Q6 = (a >= (b-5) && 0);
console.log(Q6);
// The Answer is 0.

// *****************

Q7 = (arr[10] || !(!d == false));
console.log(Q7);
// The Answer is True.

// *****************

Q8 = (arr.lenght > 0 && (b - a) === c);
console.log(Q8);
// The Answer is False.

// *****************

Q9 = (arr || false);
console.log(Q9);
// The Answer is [1, 2, 3, true, 4, false];

// *****************

Q10 = (arr[0] && arr[0] == 1);
console.log(Q10);
// The Answer is True.








