const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(a / b);
        }
    });
};

console.log("Dividing 10 by 2...");

divide(10, 2)
.then((result) => {
    console.log("Result:", result);

    console.log("\nDividing 10 by 0...");
    return divide(10, 0);
})
.catch((error) => {
    console.log(error);

    console.log("\nDividing 27 by 3...");
    return divide(27, 3);
})
.then((result) => {
    console.log("Result:", result);

    console.log("\nDividing 8 by 0...");
    return divide(8, 0);
})
.catch((error) => {
    console.log(error);

    console.log("\nDividing 9 by 3...");
    return divide(9, 3);
})
.then((result) => {
    console.log("Result:", result);
})
.catch((error) => {
    console.log(error);
});