//write a  program to find factorial of a number,checking the palindrome or not ,and armstrong or not,fibanocci series using node js local modules
const factorial = require('./factorial');
const isPalindrome = require('./palindrome');
const isArmstrong = require('./armstrong');
// const fibonacci = require('./fibonacci'); 

const number = 5;
const str = 'racecar';
const armstrongNumber = 153;
// const fibIndex = 7;

console.log(`Factorial of ${number}:`, factorial(number));
console.log(`Is "${str}" a palindrome?`, isPalindrome(str));
console.log(`Is ${armstrongNumber} an Armstrong number?`, isArmstrong(armstrongNumber));
// console.log(`Fibonacci series at index ${fibIndex}:`, fibonacci(fibIndex));