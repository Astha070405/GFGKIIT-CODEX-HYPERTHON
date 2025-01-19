let totalPrice = 0;

function addToCart(price) {
  totalPrice += price; // Add the price of the food item to the total
  document.getElementById("total-price").textContent = totalPrice.toFixed(2); // Update the total price
}
