// function orderCoffee(callback) {
//   setTimeout(() => {
//     callback("☕ Coffee is ready!");
//   }, 2000);
// }

// orderCoffee((coffee) => {
//   console.log(coffee);
// });
// function waitWithCallback(ms, callback) {
//  setTimeout(() => {
//    callback(`⏳ Waited ${ms}ms (callback)`);
//  }, ms);
// }


// console.log("FUNCTION 01-Start (callback)");


// waitWithCallback(3000, (msg) => {
//  console.log(msg);
//  console.log("FUNCTION 02-End (callback)");
// });


// console.log("FUNCTION 03-This runs immediately after async call");

// orderCoffee((coffee) => {
//   console.log(coffee);
//   orderSandwich((sandwich) => {
//     console.log(sandwich);
//     orderDonut((donut) => {
//       console.log(donut);
//       getBill((bill) => {
//         console.log(bill);
//       });
//     });
//   });
// });

//Usage of Promise
// orderCoffee()
//   .then(coffee => {
//     console.log(coffee);
//     return orderSandwich();
//   })
//   .then(sandwich => {
//     console.log(sandwich);
//     return orderDonut();
//   })
//   .then(donut => {
//     console.log(donut);
//     return getBill();
//   })
//   .then(bill => {
//     console.log(bill);
//   });