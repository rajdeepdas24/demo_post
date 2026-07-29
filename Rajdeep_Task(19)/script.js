// Services Array
const services = [
    {
        name: "Dry Cleaning",
        price: 79.00,
        image: "https://imgs.search.brave.com/QVGaMPzm3AOm-yiEO9iS_-PASvqs-iDUMKoOtmHScrQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kcnkt/Y2xlYW5pbmctZXF1/aXBtZW50LWNhcnRv/b24taWNvbnMtc2V0/LWNvbGxlY3Rpb24t/ZGVzaWduLXdhc2hp/bmctaXJvbmluZy1j/bG90aGVzLXZlY3Rv/ci1zeW1ib2wtc3Rv/Y2std2ViLWlsbHVz/dHJhdGlvbi0xMjY4/NDI2MTEuanBn"
    },
    {
        name: "Wash & Fold",
        price: 99.00,
        image: "https://imgs.search.brave.com/6a8WTOR-4_eXlCL4B73ghj6pRGUg1MpMD1AUaGieAxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2ZyaWVuZGx5/LXdhc2hpbmctbWFj/aGluZS13aXRoLWxh/dW5kcnktYmFza2V0/LWNhcnRvb25fMTQ5/NTUyOC03OS5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"
    },
    {
        name: "Ironing",
        price: 49.00,
        image: "https://imgs.search.brave.com/K4uShr0UsDTObn1aKdVPNx9A5koFFJmL5PEHpEqIooQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb21p/Yy1jYXJ0b29uLXdv/bWFuLWlyb25pbmct/cmV0cm8tYm9vay1z/dHlsZS01Mjg3ODM2/OC5qcGc"
    }
];

let currentIndex = 0;
let cart = [];
let total = 0;

const serviceImg = document.querySelector("#service-img");
const serviceName = document.querySelector("#service-name");
const servicePrice = document.querySelector("#service-price");

const addBtn = document.querySelector(".add");
const skipBtn = document.querySelector(".skip");

const cartItems = document.querySelector("#cart-items");
const totalPrice = document.querySelector("#total-price");

// Show Current Service
function showService() {

    if (currentIndex >= services.length) {
        serviceImg.style.display = "none";
        serviceName.innerText = "No More Services";
        servicePrice.innerText = "";
        return;
    }

    serviceImg.style.display = "block";
    serviceImg.src = services[currentIndex].image;
    serviceName.innerText = services[currentIndex].name;
    servicePrice.innerText = "$" + services[currentIndex].price + ".00";
}

showService();

// Update Cart
function updateCart() {

    cartItems.innerHTML = "";
    total = 0;

    for (let i = 0; i < cart.length; i++) {

        total += cart[i].price;

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${cart[i].name}</td>
            <td>$${cart[i].price}</td>
        `;

        cartItems.append(row);
    }

    totalPrice.innerText = "$" + total + ".00";
}

// Add Item Button
addBtn.addEventListener("click", () => {

    if (currentIndex >= services.length) {
        return;
    }

    cart.push(services[currentIndex]);

    updateCart();

    currentIndex++;

    showService();
});

// Skip Button
skipBtn.addEventListener("click", () => {

    currentIndex++;

    showService();

});

// Form Validation
const form = document.querySelector("#book-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    if (phone.length !== 10) {
        alert("Phone number should contain 10 digits");
        return;
    }

    if (cart.length === 0) {
        alert("Please add at least one service");
        return;
    }

    alert("Booking Successful!");

    // Reset form
    form.reset();

    // Reset cart
    cart = [];
    total = 0;

    cartItems.innerHTML = `
        <tr>
            <td colspan="3">
                No Items Added <br>
                Add items to the cart from the services bar
            </td>
        </tr>
    `;

    totalPrice.innerText = "$0";

    // Start from beginning again
    currentIndex = 0;
    showService();
});