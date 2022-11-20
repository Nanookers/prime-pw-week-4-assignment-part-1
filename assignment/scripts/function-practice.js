console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log( `<_________1 starts Here_________>`);
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!":', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log( `<_________2 starts Here_________>`);
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Testing Greeting:`, helloName('Connor'));

// 3. Function to add two numbers together & return the result
console.log( `<_________3 starts Here_________>`);
function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber;
  return total;
}
console.log(addNumbers(5,6));

// 4. Function to multiply three numbers & return the result
console.log( `<_________4 starts Here_________>`);
function multiplyThree( num0, num1, num2 ){
  let total = num0 * num1 * num2;
  return total;
}
console.log(multiplyThree(3,3,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log( `<_________5 starts Here_________>`);
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log( `<_________6 starts Here_________>`);
function getLast( array ) {
  if( array >= [0]){
  let lastNumber = array.slice(-1);
  return lastNumber;  
  }
  else if( array < [0]){
    return;
  }
}
let testArray = [1, 2, 3, 4, 9, 19];
let testArrayTwo = [];
console.log(getLast(testArray));
console.log(getLast(testArrayTwo)); //can't get it to return `undefined`.

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log( `<_________7 starts Here_________>`);

testArray.some(find); //struggled with this: couldn't figure out a way to make the element customizable. I wanted to insert
// a way to customize the vale of 19 in the conditional, but I couldn't make it work without posting false for everything. 
function find(value) {
  if(value === 19){
    return true;
  }
  else if( value != 19){
    return false;
  }
}
console.log(testArray.some(find));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log( `<_________8 starts Here_________>`);


function isFirstLetter(letter, string) {
  if( string.includes(letter)){
    return true;
  }
  else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log( `<_________9 starts Here_________>`);
// TODO: loop to add items
function sumAll( array ) {
  let sum = 0
  for( let i = 0; i <array.length; i++){
    sum += array[i];
  }
  console.log(sum);
  return sum; 
}
console.log(sumAll(testArray)); 


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log( `<_________10 starts Here_________>`);
let myArray = [-1, 0, 1, 2, 3];

function positiveNumbers( num ) {
  return num > 0; 
}
 let newArray = myArray.filter(positiveNumbers); //filter method allows you to sift through the data inside an array and pull out whatever your fuction asks of it. 
 console.log( newArray );


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

console.log( `<_________11 starts Here_________>`);
//The goal is to return true/false statements on whether or not two values are equal to one another. 
//The function is pretty simple, and I did it through using an if else statement.
//I set the paramaters within my function to be num1, num2, representing the values of the numbers that will be weighed.
// within the if statement, I use a conditional to weight num1 against num2. This returns a true boolean.
//in the else statement, I only put a return with a false boolean.

function isSameNum( num1, num2 ){
  if( num1 === num2 ){
    return true;
  }
  else{
    return false;
  }
}
console.log(isSameNum( 3, 3 ));
console.log(isSameNum( 3, 4 ));
console.log(isSameNum( 3, 5 ));