// Price per unit
const UNIT_PRICE = 1034550;

/**
 * Format number to Vietnamese Currency format (e.g. 1.034.550đ)
 * @param {number} amount 
 * @returns {string}
 */
function formatCurrency(amount) {
  return amount.toLocaleString('vi-VN') + '<sup>đ</sup>';
}

/**
 * JS function to calculate subtotal = Quantity * Product Price
 * Requirement: "JS: viết một hàm tính giá trị Tạm tính = Số lượng * Giá sản phẩm, và hiển thị vào trường Tạm tính"
 */
function calculateSubtotal() {
  const qtyInput = document.getElementById('quantity');
  let qty = parseInt(qtyInput.value);

  // Validate minimum quantity
  if (isNaN(qty) || qty < 1) {
    qty = 1;
    qtyInput.value = 1;
  }

  const subtotal = qty * UNIT_PRICE;
  
  // Display formatted subtotal to DOM element
  document.getElementById('subtotal').innerHTML = formatCurrency(subtotal);
}

/**
 * Increase quantity handler
 */
function increaseQty() {
  const qtyInput = document.getElementById('quantity');
  qtyInput.value = parseInt(qtyInput.value) + 1;
  calculateSubtotal();
}

/**
 * Decrease quantity handler
 */
function decreaseQty() {
  const qtyInput = document.getElementById('quantity');
  let currentQty = parseInt(qtyInput.value);
  if (currentQty > 1) {
    qtyInput.value = currentQty - 1;
    calculateSubtotal();
  }
}

/**
 * Switch main image on thumbnail click
 * @param {string} src 
 */
function changeImage(src) {
  document.getElementById('main-img').src = src;
  
  // Update active status for thumbnail border
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

// Initial calculation on page load
document.addEventListener('DOMContentLoaded', () => {
  calculateSubtotal();
});
