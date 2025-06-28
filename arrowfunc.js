//Simple arrow
// const add = (a, b) => a + b;
// console.log(add(3, 5));  // Output: 8

// //arrow with single parameter
// const greet = (name) => "Hello, " + name;
// console.log(greet("Bob"));  // Output: Hello, Bob

// arrow function with multiple lines
// const multiply = (a, b) => {
//     let result = a * b;
// results= result + ":output";
//     return results;
// };
// console.log(multiply(3,5));

//without return keyword
// const multiply = (a, b) => {
//     let result = a * b;
//     //return result;
// };
// console.log(multiply(3,5));


// remove the semi colon
const multiply = (a, b) => {
    let result = a * b
results= result + ":output"
    return results
}
console.log(multiply(3,5))
