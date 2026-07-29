const buttons = document.querySelectorAll(".cart-btn");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

let total = 0;
let serialNo = 1;

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const serviceItem = button.parentElement;

        const serviceName =
            serviceItem.querySelector("h4").textContent;

        const servicePrice =
            Number(
                serviceItem
                .querySelector(".price")
                .textContent
                .replace("₹", "")
            );

        const emptyCart =
            document.getElementById("empty-cart");

        if (emptyCart) {
            emptyCart.remove();
        }

        if (button.textContent === "Add Item") {

            const row = document.createElement("tr");

            row.setAttribute("id", serviceName);

            row.innerHTML = `
                <td>${serialNo}</td>
                <td>${serviceName}</td>
                <td>₹${servicePrice.toFixed(2)}</td>
            `;

            cartItems.appendChild(row);

            serialNo++;

            total += servicePrice;

            totalPrice.textContent =
                `₹${total.toFixed(2)}`;

            button.textContent = "Remove Item";
            button.style.background = "#ef4444";
            button.style.color = "white";

        }

        else {

            const row =
                document.getElementById(serviceName);

            if (row) {

                row.remove();

                total -= servicePrice;

                totalPrice.textContent =
                    `₹${total.toFixed(2)}`;

            }

            button.textContent = "Add Item";
            button.style.background = "#f1f5f9";
            button.style.color = "#000";

            if (cartItems.children.length === 0) {

                cartItems.innerHTML = `
                    <tr id="empty-cart">
                        <td colspan="3" class="empty-cart-message">
                            No items added
                        </td>
                    </tr>
                `;

                serialNo = 1;

            }

        }

    });

});


const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    if(total === 0){
        alert("Please add at least one service.");
        return;
    }

    const templateParams = {

        fullname: document.getElementById("fullname").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        total: document.getElementById("total-price").textContent

    };

    emailjs.send(
        "service_19b6q5o",
        "template_zfruw9o",
        templateParams
    )

    .then(function(){

        bookingMessage.style.display = "block";

        bookingMessage.textContent =
        "✓ Booking confirmed! Check your email.";

        bookingForm.reset();

        setTimeout(() => {
        
            bookingMessage.style.display = "none";

        }, 10000);

    })

    .catch(function(error){

        bookingMessage.textContent =
        "Failed to send email.";

        console.log(error);

    });

});