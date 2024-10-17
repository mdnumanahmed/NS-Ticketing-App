// Select Elements from HTML DOM
// const seatsLeft = document.getElementById("seats-left");
// const selectedSeatCount = document.getElementById("selected-seat-count");
// const totalPrice = document.getElementById("total-price");
// const grandTotal = document.getElementById("grand-total");
// const couponInput = document.getElementById("coupon-input");
// const tableBody = document.getElementById("table-body");

const allSeats = document.getElementsByClassName("seat");
// let seatsLeft = 40;
// let seatCount = 0;
for (const seat of allSeats) {
  seat.addEventListener("click", function (event) {
    const seatElement = event.target;
    const seatName = event.target.innerText;
    const className =
      seatName.charAt(0) === "A"
        ? "First Class"
        : seatName.charAt(0) === "B"
        ? "Business Class"
        : seatName.charAt(0) === "C"
        ? "Premium Economy"
        : "Economy";

    //   Display selected Data
    showSelecetSeatInfo(seatName, className, 500);
    //   Total Price update
    let totalPrice = getInnerTextValue("total-price");
    totalPrice = totalPrice + 500;
    setInnerTextValue("total-price", totalPrice);
    setInnerTextValue("grand-total", totalPrice);
  });
}

// Get converted value generic function
function getInnerTextValue(id) {
  const innerTextValue = document.getElementById(id).innerText;
  const convertedValue = parseInt(innerTextValue);
  return convertedValue;
}

// Set value generic function
function setInnerTextValue(id, value) {
  const innerTextValue = (document.getElementById(id).innerText = value);
  return innerTextValue;
}

// Display seat booking info and cost function
function showSelecetSeatInfo(seatName, className, price) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML += `
    <tr>
        <td>${seatName}</td>
        <td>${className}</td>
        <td>${price}</td>
    </tr>
    `;
}
