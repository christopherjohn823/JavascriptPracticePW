// try {
//     //Code that may throw error
//     let user;
//     console.log("Username");
// }
// catch(error){
// console.error("Error caught:", error.message);
// }
// finally{
//     console.log("Cleaned up code always runs");
// }

//custom exceptions
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  let quotient = a / b;
    console.log(quotient);
     return quotient;
}

divide(2,1);




