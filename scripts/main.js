// Select Elements from HTML DOM
const seatsLeft = document.getElementById("seats-left");
const selectedSeatCount = document.getElementById("selected-seat-count");
const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");
const couponInput = document.getElementById("coupon-input");
const tableBody = document.getElementById("table-body");

const allSeats = document.getElementsByClassName("seat");
for (const seat of allSeats) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    const className =
      seatName.charAt(0) === "A"
        ? "First Class"
        : seatName.charAt(0) === "B"
        ? "Business Class"
        : seatName.charAt(0) === "C"
        ? "Premium Economy"
        : "Economy";
    // console.log(event.target.innerText);
    console.log(className);
  });
}
