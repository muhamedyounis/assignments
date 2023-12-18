// 1- Write a program that allow to user enter number then printit
// num = window.prompt("Enter Number");
// console.log(num);

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// num = window.prompt("Enter Number");
// if( num % 3 == 0 && num % 4 == 0 ) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// 3- Write a program that allows the user to insert 2 integers then print the max
// num1 = window.prompt("Enter First Number");
// num2 = window.prompt("Enter Second Number");
// if( num1 > num2 ) {
//     console.log(num1);
// }
// else {
//     console.log(num2);
// }

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// num = window.prompt("Enter Number");
// if( num < 0 ) {
//     console.log("Number is Negative");
// }
// else {
//     console.log("Number is Positive");
// }

// 5- Write a program that take 3 integers from user then print the max element and the min element.
// num1 = window.prompt("Enter First Number");
// num2 = window.prompt("Enter Second Number");
// num3 = window.prompt("Enter Third Number");
// if( num1 > num2 && num1 > num3 ) {
//     console.log(num1 + " " + "is the max number");
// }
// else if( num1 < num2 && num1 < num3 ) {
//     console.log(num1 + " " + "is the min number");
// }

// if( num2 > num1 && num2 > num3 ) {
//     console.log(num2 + " " + "is the max number");
// }
// else if( num2 < num1 && num2 < num3 ) {
//     console.log(num2 + " " + "is the min number");
// }

// if( num3 > num2 && num3 > num1 ) {
//     console.log(num3 + " " + "is the max number");
// }
// else if( num3 < num2 && num3 < num1 ) {
//     console.log(num3 + " " + "is the min number");
// }

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// num = window.prompt("Enter Number");
// if( num % 2 == 1 ) {
//  console.log("Number is Odd");
// }
// else {
//     console.log("Number is Even");
// }

// 7- Write a program that take character from user then if it is vowel chars (a,e,i,o,u) then print vowel otherwise print consonant
// char = window.prompt("Enter Character");
// if( char == "a" || char == "e" || char == "i"  || char == "o" || char == "u") {
//     console.log("vowel");
// }
// else {
//     console.log("consonant");
// }

// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// num = window.prompt("Enter Number");
// for( i = 2 ; i < num ; i++ ) {
//     console.log(i);
// }

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// num = window.prompt("Enter Number");
// for (i = 2; i < 14; i++) {
//   console.log(num * i);
// }

// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// num = + window.prompt("Enter Number");
// for( i = 2 ; i < num ; i+=2 ) {
//     console.log(i);
// }

// 12- Write a program that take two integers then print the power
// num1 = window.prompt("Enter First Number");
// num2 = window.prompt("Enter Second Number");
// powerNum = num1 ** num2;

// console.log("Power is" + " " + powerNum);

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// subj1 = window.prompt("Enter Subject 1 (Full Mark from 50)");
// subj2 = window.prompt("Enter Subject 2 (Full Mark from 50)");
// subj3 = window.prompt("Enter Subject 3 (Full Mark from 50)");
// subj4 = window.prompt("Enter Subject 4 (Full Mark from 50)");
// subj5 = window.prompt("Enter Subject 5 (Full Mark from 50)");

// var total =
//   Number(subj1) + Number(subj2) + Number(subj3) + Number(subj4) + Number(subj5);
// var average =
//   (Number(subj1) +
//     Number(subj2) +
//     Number(subj3) +
//     Number(subj4) +
//     Number(subj5)) /
//   5;
// var percentage = (total / 250) * 100;

// console.log("Total is" + " " + total);
// console.log("Average is" + " " + average);
// console.log("Percentage is" + " " + percentage + "%");

// 13- Write a program to input month number and print number of days in that month.

// monthNum = +window.prompt("Enter Month Number");

// switch (monthNum) {
//   case 1:
//     console.log("January have 31 days");
//     break;

//   case 2:
//     console.log("February have 28 days and 29 days in leap year");
//     break;

//   case 3:
//     console.log("March have 31 days");
//     break;

//   case 4:
//     console.log("April have 30 days");
//     break;

//   case 5:
//     console.log("May have 31 days");
//     break;

//   case 6:
//     console.log("June have 30 days");
//     break;

//   case 7:
//     console.log("July have 31 days");
//     break;

//   case 8:
//     console.log("August have 31 days");
//     break;

//   case 9:
//     console.log("September have 30 days");
//     break;

//   case 10:
//     console.log("October have 31 days");
//     break;

//   case 11:
//     console.log("November have 30 days");
//     break;

//   case 12:
//     console.log("December have 31 days");
//     break;

//   default:
//     console.log("You've entered incorrect month number!");
// }

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// var physics = + window.prompt("Enter Physics Marks (Full Mark from 50)");
// var chemistry = + window.prompt("Enter Chemistry Marks (Full Mark from 50)");
// var biology = + window.prompt("Enter Biology Marks (Full Mark from 50)");
// var mathematics = + window.prompt("Enter Mathematics Marks (Full Mark from 50)");
// var computer = + window.prompt("Enter Computer Marks (Full Mark from 50)");
// var totalMarks = physics + chemistry + biology + mathematics + computer;
// var percentageMarks = (totalMarks / 250) * 100;

// switch(true) {
//     case percentageMarks >= 90 :
//         console.log("Grad A");
//         break;

//     case percentageMarks >= 80 :
//         console.log("Grad B");
//         break;

//     case percentageMarks >= 70 :
//         console.log("Grad C");
//         break;

//     case percentageMarks >= 60 :
//         console.log("Grad D");
//         break;

//     case percentageMarks >= 40 :
//         console.log("Grad E");
//         break;

//     case percentageMarks < 40 :
//         console.log("Grad F");
// }

// 15- Write a program to print total number of days in month
// DONE IN QUESTION NUMBER 13

// 16- Write a program to check whether an alphabet is vowel or consonant
// (a,e,i,o,u)

// var char = window.prompt("Enter a character");

// switch(char) {
//     case "a" :
//         console.log("vowel");
//         break;
//     case "e" :
//         console.log("vowel");
//         break;
//     case "i" :
//         console.log("vowel");
//         break;
//     case "o" :
//         console.log("vowel");
//         break;
//     case "u" :
//         console.log("vowel");
//         break;
//     default :
//         console.log("consonant");
// }

// 17- Write a program to find maximum between two numbers

// var num1 = window.prompt("Enter First Number");
// var num2 = window.prompt("Enter Second Number");

// switch(true) {
//     case num1 > num2 :
//         console.log("Maximum number is" + " " + num1);
//         break;
//     case num2 > num1 :
//     console.log("Maximum number is" + " " + num2);
// }

// 18- Write a program to check whether a number is even or odd

// var num = + window.prompt("Enter a Number");

// switch (true) {
//     case num % 2 == 0 :
//         console.log("Your number is Even");
//         break;
//     case num % 2 == 1 :
//         console.log("Your number is Odd");
// }

// 19- Write a program to check whether a number is positive or negative or zero

// var num = + window.prompt("Enter a Number");

// switch(true) {
//     case num > 0 :
//         console.log("Your number is Positive");
//         break;
//     case num < 0 :
//         console.log("Your number is Negative");
//         break;
//     case num == 0 :
//         console.log("Your number is Zero");
// }

// 20- Write a program to create Simple Calculator

var question = window.prompt(
  "Choose your equation method from ( plus , minus , multiply , divide , power )"
);

switch (question) {
  case "plus":
    var num1 = +window.prompt("Enter first number");
    var num2 = +window.prompt("Enter second number");
    window.alert(num1 + num2);
    break;
  case "minus":
    var num1 = +window.prompt("Enter first number");
    var num2 = +window.prompt("Enter second number");
    window.alert(num1 - num2);
    break;
  case "multiply":
    var num1 = +window.prompt("Enter first number");
    var num2 = +window.prompt("Enter second number");
    window.alert(num1 * num2);
    break;
  case "divide":
    var num1 = +window.prompt("Enter first number");
    var num2 = +window.prompt("Enter second number");
    window.alert(num1 / num2);
    break;
  case "power":
    var num1 = +window.prompt("Enter first number");
    var num2 = +window.prompt("Enter second number");
    window.alert(num1 ** num2);
}
