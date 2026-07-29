let heading = document.querySelector("h1");

let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let name = input.value;

    if (name === "") {
        heading.innerText = "Hello";
    } else {
        heading.innerText = `Hello, ${name}`;
    }
});

let redBox = document.querySelector("#redbox");
let greenBox = document.querySelector("#greenbox");
let blueBox = document.querySelector("#bluebox");
let yellowBox = document.querySelector("#yellowbox");

redBox.addEventListener("click", () => {
    redBox.style.backgroundColor = "red";
    redbox.style.color = "white";
});

greenBox.addEventListener("click", () => {
    greenBox.style.backgroundColor = "green";
    greenbox.style.color = "white";
});

blueBox.addEventListener("click", () => {
    blueBox.style.backgroundColor = "blue";
    bluebox.style.color = "white";
});

yellowBox.addEventListener("click", () => {
    yellowBox.style.backgroundColor = "yellow";
    yellowbox.style.color = "black";
});