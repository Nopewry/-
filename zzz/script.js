// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const orderList = document.getElementById('order-list');
    const totalPrice = document.getElementById('total-price');
    const clearOrderBtn = document.getElementById('clear-order');
  
    let total = 0;
  
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));
        total += price;
        orderList.innerHTML += `<li>${name} - $${price.toFixed(2)}</li>`;
        totalPrice.textContent = `$${total.toFixed(2)}`;
      });
    });
  
    clearOrderBtn.addEventListener('click', function () {
      orderList.innerHTML = '';
      total = 0;
      totalPrice.textContent = '$0.00';
    });
  });
  