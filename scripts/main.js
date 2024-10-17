// Select Elements from HTML DOM
// const seatsLeft = document.getElementById("seats-left");
// const selectedSeatCount = document.getElementById("selected-seat-count");
// const totalPrice = document.getElementById("total-price");
// const grandTotal = document.getElementById("grand-total");
// const couponInput = document.getElementById("coupon-input");
// const tableBody = document.getElementById("table-body");
const applyCouponBtn = document.getElementById("apply-coupon");
applyCouponBtn.setAttribute("disabled", true);

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

    //   Selected Seat background changed and disabled
    seatElement.classList.remove("bg-gray-100");
    seatElement.classList.add("bg-[#1DD100]");
    seatElement.setAttribute("disabled", false);

    //   Seat Left update
    let seatLeft = getInnerTextValue("seats-left") - 1;
    setInnerTextValue("seats-left", seatLeft);

    //   Seat Count increasing
    let seatCount = getInnerTextValue("selected-seat-count") + 1;
    setInnerTextValue("selected-seat-count", seatCount);

    //   Apply Coupon
    seatCount > 3 ? applyCouponBtn.removeAttribute("disabled") : "";

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

// Coupon Apply function
function applyCoupon() {
  const couponInput = document.getElementById("coupon-input").value;
  const discountElement = document.getElementById("discount");
  let totalPrice = getInnerTextValue("total-price");
  if (couponInput === "Couple 20") {
    let discount = totalPrice * 0.2;
    let grandTotal = totalPrice - discount;
    discountElement.innerHTML = `
    <div class="flex justify-between px-5">
        <p class="text-lg">Discount</p>
        <p class="text-lg">${discount}</p>
    </div>
        `;
    setInnerTextValue("grand-total", grandTotal);
  } else if (couponInput === "NEW15") {
    let discount = totalPrice * 0.15;
    let grandTotal = totalPrice - discount;
    discountElement.innerHTML = `
    <div class="flex justify-between px-5">
        <p class="text-lg">Discount</p>
        <p class="text-lg">${discount}</p>
    </div>
        `;
    setInnerTextValue("grand-total", grandTotal);
  }
}

// Next button functionality
const nextBtn = document.getElementById("next-btn");
nextBtn.setAttribute("disabled", true);
const phoneNumber = document.getElementById("phone-number");
phoneNumber.addEventListener("keyup", function (event) {
  let number = event.target.value;
  const seatCount = getInnerTextValue("selected-seat-count");
  if (seatCount > 0 && number.length > 10) {
    nextBtn.removeAttribute("disabled", true);
  }
});
