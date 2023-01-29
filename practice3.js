// method 1
var num1 = 13;
var num2 = 79;
var num3 = 45;

// var largest = Math.max(num1, num2, num3);

// console.log(largest);

// Method 2
 
var num1 = 13;
var num2 = 79;
var num3 = 80;

if(num1 > num2 && num1 > num3) {
    console.log(`$num1 is Big Number` );
}else if (num2 > num1 && num2 > num3) {
    console.log(`$num2 is Big Number`);
}else if(num3 > num1 && num3 > num2) {
    console.log(`$nam3 is Big Number`);
}

let a = 9;
let b = 8;
let c = 9;

if (a + b > c && b + c > a && a + c > b) {
  if (a === b || a === c || b === c) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Not an Isosceles Triangle");
  }
} else {
  console.log("This is not a triangle");
}
