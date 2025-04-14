document.getElementById('you-link').addEventListener('click', function() {
  document.getElementById('you-page-content').classList.remove('hidden');
});

document.getElementById('orders-link').addEventListener('click', function() {
  document.getElementById('you-page-content').classList.add('hidden');
  document.getElementById('orders-page-content').classList.remove('hidden');
  showOrders();
});

function showOrders() {
  const orderList = document.getElementById('order-list');
  orderList.innerHTML = '';

  const orders = generateRandomOrders();
  orders.forEach(order => {
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.innerHTML = `
      <img src="durex_condoms.jpg" alt="Durex Condoms">
      <div class="order-details">
        <h3>${order.productName}</h3>
        <p>Delivered on ${order.deliveryDate}</p>
        <p class="rating">${generateRandomRating()}</p>
        <a href="#">Rate this product</a>
      </div>
    `;
    orderList.appendChild(orderItem);
  });
}

function generateRandomOrders() {
  const orders = [];
  const productNames = [
    "Durex Mutual Climax 3 Pack",
    "Durex Mutual Climax Ribbed & Dotted",
    "Durex Mutual Climax Ultra Thin",
    "Durex Mutual Climax for Mutual Stimulation",
    "Durex Mutual Climax Extra Dots"
  ];

  for (let i = 0; i < 10; i++) {
    const productName = productNames[Math.floor(Math.random() * productNames.length)];
    const deliveryDate = generateRandomDate();
    orders.push({ productName, deliveryDate });
  }
  return orders;
}

function generateRandomDate() {
  const startDate = new Date(2024, 11, 1);
  const endDate = new Date(2025, 2, 31);
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);
  return randomDate.toLocaleDateString();
}

function generateRandomRating() {
  const stars = Math.floor(Math.random() * 5) + 1;
  return '★'.repeat(stars);
}
