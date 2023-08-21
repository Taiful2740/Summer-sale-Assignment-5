let total = 0;
function addProductHandler(target) {
  //  appendChild
  const cartName = document.getElementById("card-name");
  const productName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = productName;
  cartName.appendChild(li);

  // price Total
  const cardPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(cardPrice);
  const tk = document.getElementById("taka");
  const totalProductPrice = (document.getElementById("total-price").innerText =
    total.toFixed(2));
  totalProductPrice.innerText = total + tk;

  // discount area
  const discountCoupon = document
    .getElementById("coupon-button")
    .addEventListener("click", function () {
      const couponId = document.getElementById("coupon-field");
      const couponValue = couponId.innerText;
      const couponDiscountNumber = "0.2";
      const discountSection = document.getElementById("discount-section");
      // Total and discount section
      if (totalProductPrice >= 200) {
        total =
          parseFloat(totalProductPrice) * parseFloat(couponDiscountNumber);
        const totalDiscountPrice = (document.getElementById(
          "discount-section"
        ).innerText = total).toFixed(2);
        const totalContainer = document.getElementById("total-result");
        totalContainer.innerText;
        total = parseFloat(totalProductPrice) - parseFloat(totalDiscountPrice);
        document.getElementById("total-result").innerText = total.toFixed(2);
      }
    });
  // purchase btn
  const totalSection = totalProductPrice;
  const purchaseButton = document.getElementById("Make-purchase");
  if (totalSection > 0) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", true);
  }
}

// coupon area

document
  .getElementById("coupon-field")
  .addEventListener("keyup", function (coupon) {
    const couponInput = coupon.target.value;
    const applyBtn = document.getElementById("coupon-button");
    if (couponInput === "SELL200") {
      applyBtn.removeAttribute("disabled");
    } else {
      applyBtn.setAttribute("disabled", true);
    }
  });
