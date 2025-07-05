//in this example there is no async/await, so that means it becomes a synchronous function
//which means it will not wait for 5000 ms. Which means it won't return the 'Sidharth', 
// which means that the 'name' under 'showName()' will not get the value 'Sidharth'
// since the 'fetchName()' is synchromous and it will only return the status of the Promise 
// which is { <pending> } because it is still running. That's why we need async await or .then. 
// This is what happens when you use Promise without async await or .then.

function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

function showName() {
    const name = fetchName(); // ❌ This returns a Promise, not the value
    console.log("Name is:", name);
}

showName();

