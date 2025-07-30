// Sample Products with Images
const products = [
  { id: 1, name: "Smartphone", price: 299, image: "https://sparx.pk/cdn/shop/files/New-5-pro.jpg?v=1721641789" },
  { id: 2, name: "Headphones", price: 99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgv_MElQPfeqQRKNeT7qt0GaE-wkdRliDVQ&s" },
  { id: 3, name: "Keyboard", price: 49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTI_MxrW1ayHfftlXVwjx_Bdm2BYjQbjhEg&s" },
  { id: 4, name: "Phone X", price: 59, image: "https://image.made-in-china.com/155f0j00oKuWzZdgSqkw/High-Quality4g-Android-11-0-Smart-Phone-6-7inch-Smartphone-Mobile-Phones-Android-Mobile-Phones.webp" },
  { id: 5, name: "Adapter", price: 99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiXZhdfL2HQQid_xTzqBHqi6aHqz6CW6q9w&s" },
  { id: 6, name: "Smartwatch", price: 79, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHU_lS-uZKaAzvFN5IYXY6GP7yszjFlB4wuA&s" },
  { id: 7, name: "Gaming Mouse", price: 35, image: "https://easetec.com.pk/wp-content/uploads/2023/01/4-20.jpg" },
  { id: 8, name: "Bluetooth Speaker", price: 120, image: "https://www.ratdin.pk/cdn/shop/products/g500-led-wireless-charging-bluetooth-speaker-smart-table-night-light-bt-music-player-phone-wireless-charging-rgb-desk-lamp-without-clock-993385_large.jpg?v=1708425106" },
  { id: 9, name: "Tablet", price: 199, image: "https://image.made-in-china.com/2f0j00qkNlgiUWnOYe/Mtk6789-Octa-Core-Tablet-Computer-Portable-Flat-PC-RAM-8GB-ROM-256GB-Gaming-Tablets.webp" },
  { id: 10, name: "VR Headset", price: 159, image: "https://toygenix.com.pk/cdn/shop/files/Meta_1.png?v=1712136152" },
  { id: 11, name: "Laptop", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZjjiwnN8mKAPKmQ_1cqEtISJFfJSR5jbNATxT3eg0XFWzqwM9ZKlVMcl6eppnXHieYc&usqp=CAU" },
  { id: 12, name: "Camera", price: 499, image: "https://m.media-amazon.com/images/I/71bEYFvV5lL.jpg" },
  { id: 13, name: "Charger", price: 19, image: "https://powerhouseexpress.com.pk/cdn/shop/files/1hora-gar162b-20w-charger-dual-u-c-type-c-to-type-c-cable.webp?v=1746242032&width=1946" },
  { id: 14, name: "USB Cable", price: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nPBwLkp_xd_25F8_HYQkiWaCA1cIFQ4Skg&s" },
  { id: 15, name: "Drone", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuAxPxgLUGNHz-GonLkwvTzCM2S_88LrkZmP0iLDLTi3jkX232268B2lYgwoN5WTep2o&usqp=CAU" },
  { id: 16, name: "Monitor", price: 229, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJKxm3F1rCscdbHMQhx9Btz1R35MCghrScQ&s" },
  { id: 17, name: "Power Bank", price: 39, image: "https://saamaan.pk/cdn/shop/files/Aspor-A336-Saamaanpk4_1024x.webp?v=1735634610" },
  { id: 18, name: "Microphone", price: 89, image: "https://m.media-amazon.com/images/I/71QJ287PeyL._UF1000,1000_QL80_.jpg" },
  { id: 19, name: "Smart Light", price: 45, image: "https://i5.walmartimages.com/seo/Smart-Light-Bulb-Wifi-Bulb-Color-Changing-LED-Bluetooth-Bulbs-APP-Remote-Controlled-Home-Lamp-Compatible-Alexa-Google-Assistant_1cba82fc-0e92-4d71-9b8a-38b182274c72_1.52bd96b1839a4c777e202ad19fe2492e.jpeg" },
  { id: 20, name: "E-Reader", price: 119, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvk85GyW7CDLPBJpqZmlxK-vAuiMbUn00nA&s" },
  { id: 20, name: "cpu", price: 129, image: "https://www.shutterstock.com/image-vector/computer-case-front-rear-side-600nw-144192091.jpg" },
  { id: 20, name: "Airbud", price: 199, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCniHiAYJQ04SwJyVIKScHsr1C11mcVvavPg&s" },
  { id: 20, name: "Handfree", price: 139, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKnZm1l_MXaFwt8qzmLCG-I-tHzKQPVnYMQ&s" },
  { id: 20, name: "TV", price: 169, image: "https://friendshome.pk/cdn/shop/files/Untitledproject_64_f32a0f69-d687-470a-abc6-14230b77b2f0.jpg?v=1738587024&width=1000" },
  { id: 20, name: "Handfree", price: 119, image: "https://5.imimg.com/data5/SELLER/Default/2025/4/500703732/PP/SB/OQ/112494282/dlms-smart-meter-reading-app-500x500.jpg" }
];




// State
let cart = [];

// DOM Elements
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutPopup = document.getElementById('checkout-popup');
const orderSuccess = document.getElementById('order-success');
const checkoutForm = document.getElementById('checkout-form');
const searchInput = document.getElementById('search-input');

// Render Products (with optional search)
function renderProducts(searchTerm = "") {
  productList.innerHTML = '';

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();

  // Open new page with product info
  window.location.href = `product_checkout.html?id=${id}`;
}

// Delete from Cart
function deleteFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Update Quantity
function updateQty(id, value) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = parseInt(value);
    if (item.qty <= 0) {
      deleteFromCart(id);
    } else {
      updateCart();
    }
  }
}

// Update Cart UI
function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Qty: <input type="number" min="1" value="${item.qty}" onchange="updateQty(${item.id}, this.value)" /></p>
      <p>Total: $${item.qty * item.price}</p>
      <button onclick="deleteFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  checkoutBtn.disabled = cart.length === 0;
}

// Show Checkout Form
checkoutBtn.addEventListener('click', () => {
  checkoutPopup.classList.remove('hidden');
});

// Submit Checkout Form
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkoutPopup.classList.add('hidden');
  orderSuccess.classList.remove('hidden');
});

// Search Listener
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  renderProducts(searchTerm);
});

// Initial Load
renderProducts();
