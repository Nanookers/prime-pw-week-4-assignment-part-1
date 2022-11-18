console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Testing Greeting:`, helloName('Connor'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber;
  return total;
}
console.log(addNumbers(5,6));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let total = num0 * num1 * num2;
  return total;
}
console.log(multiplyThree(3,3,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
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
function getLast( array ) {
  let lastNumber = array.slice(-1);
  return lastNumber
}
let testArray = [1, 2, 3, 4, 9, 19];
let testArrayTwo = [];
console.log(getLast(testArray));
console.log(getLast(testArrayTwo)); //can't get it to return `undefined`.

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for( let i=0; i<array.length; i++){
    if (value === 9){
      return true;
    }
    else {
      return false ;
    }
  }
  
}
let anotherArray = [1, 2, 3, 4, 5, 6]
console.log( find( 9, testArray ));
console.log( find( 10, anotherArray ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
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
function sumAll( array ) {
  let sum = 0
  for( let i = 0; i <array.length; i++){
    sum += array[i];
  }
  console.log(sum);
  return sum; 
}// TODO: loop to add items
console.log(sumAll(anotherArray)); 

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
