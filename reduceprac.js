// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 1);  
// console.log(sum); 
let results = ['pass', 'fail', 'pass'];
let passCount = results.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
console.log(passCount);