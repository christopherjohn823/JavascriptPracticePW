function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 1000);
    });
}

function showName() {
    const name = fetchName(); // ❌ This returns a Promise, not the value
    console.log("Name is:", name);
}

showName();

