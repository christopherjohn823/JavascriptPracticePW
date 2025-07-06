// // function using waitwithCallback
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

// converting the above into PROMISE

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

function runWithPromise() {
  wait(3000)
    .then((msg) => {
      console.log(msg);
      console.log("FUNCTION-02: End (promise)");
    });
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();

