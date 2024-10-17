// Select Elements from HTML DOM
// const seatsLeft = document.getElementById("seats-left");
// const selectedSeatCount = document.getElementById("selected-seat-count");
// const totalPrice = document.getElementById("total-price");
// const grandTotal = document.getElementById("grand-total");
// const couponInput = document.getElementById("coupon-input");
// const tableBody = document.getElementById("table-body");

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
    let totalPrice = getInnerTextValue("total-price");
    totalPrice = totalPrice + 500;
    setInnerTextValue("total-price", totalPrice);
  });
}

function getInnerTextValue(id) {
  const innerTextValue = document.getElementById(id).innerText;
  const convertedValue = parseInt(innerTextValue);
  return convertedValue;
}

function setInnerTextValue(id, value) {
  const innerTextValue = (document.getElementById(id).innerText = value);
  return innerTextValue;
}
