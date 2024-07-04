
// Exercises
// 1.Declare a variable age and assign your age to it. Write it out in the console together with a description of the age. Like, "this is my age...".
// 2.Declare three variables using the three different keywords that we have learned. Write them all out in the console. What was the different between these keywords?
// 3.Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.
// 4.Create a const variabel called name and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?
// 5.Think about one case when we would like to use a boolean value. Discuss it with another person.
// 6.If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using let or const and why?
// 7.Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.
// 8.Reuse the number1 and number2 variables and create three new variables:
// result1 should contain the difference (subtraction) between the numbers
// result2 should contain the product (multiplication) of the two numbers
// result3 should contain the quotient (division) of the two numbers
// 9.Log them all to the console.
// 10.Create a variable a and assign it a value. Log it to the console. Now add 5 to a by reassigning the value of a by using the existing a and the number 5. Log it to the console.



/**
 * Exercise 1
 */

let age = 40;
console.log(`My age is ${age}`);



/**
 * Exercise 2
 */

var avoid = 'avoid using var';          // have global (and function) scope and is hoisted, may appear to be used (anywhere) before it is declared (bug risk)
let good = 'this is better';                            // can be reassigned, and is block-scoped
const birthdate = 'birthdate does not change';          // block-scoped local variable, must be initialized and may not be reassigned



/**
 * Exercise 3
 */

var text = 'string text etc';
let isEnabled = true;
const cost = 16.3;

console.log(`The text is ${text}`);
console.log(`It is ${isEnabled}`);
console.log(`It will cost ${cost}`);



/**
 * Exercise 4
 */

const name = 'Darkwing Duck';   // name cannot be reassigned because it is of const type. Change const to let to fix this problem.
console.log(`${name}`);

let betterNameType = 'Darkwing Duck';       // let is reassignable
console.log(`${betterNameType}`);

betterNameType = 'Dick Dastardly';
console.log(`${betterNameType}`);



/**
 * Exercise 5
 */

// To check if something is enabled. Perhaps we have a variable named isMuted and it returns true if a sound source is muted, and false if not.
let muted=false;
muted?"Muted":"Silent"



/**
 * Exercise 6
 */

// Const cannot be reassigned



/**
 * Exercise 7
 */

const number1 = 1.0;
const number2 = 2.4;

const result = number1 + number2;
console.log(`${result}`);



/**
 * Exercise 8
 */

const result1 = number1 - number2;
const result2 = number1 * number2;
const result3 = number1 / number2;

console.log(`$result1 $result2 $result3`)

/**
 * Exercise 9
 */

let a = 5;
console.log(`${a}`);

a += 5;
console.log(`${a}`);



/**
 * Exercise 10
 */

// a is 9



/**
 * Exercise 11
 * 
 * 
 * 
 * a is assigned the value 10
 * 
 * a is reduced by 4
 * 
 * a is reassigned with the value 7(we do not need to think about the first lines)
 * 
 * a is incresed by 2 (thus it is  7 now)
 * 
 */