function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

async function showName() {
    console.log("Wait>>>>>>");
    const name = await fetchName(); // waits for promise to finish
    console.log("Name is:", name);
}

showName();

// async function completeOrder(){
//     let coffee = await orderCoffee();
//     console.log(coffee);

//     let sandwich = await orderSandwich();
//     console.log(sandwich);

//     let donut = await orderDonut();
//     console.log(donut);

//     let bill = await getBill();
//     console.log(bill);
// }

// completeOrder();