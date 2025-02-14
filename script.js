const products = [
    { name: "Hawaiian", price: 210.00, image: "img//pizza hawaiian.jpg", id: 1 },
    { name: "Pizza Supreme", price: 210.00, image: "img//pizza supreme.jpg", id: 2 },
    { name: "Beef Mushroom", price: 240.00, image: "img//pizza_beef mushroom.jpg", id: 3 },
    { name: "Pizza Burger", price: 234.00, image: "img//pizza_burger.jpg", id: 4 },
    { name: "Cookies N' Cheese", price: 162.00, image: "img//pizza_cookies_n_cheese.jpg", id: 5 },
    { name: "Creamy Cheese", price: 162.00, image: "img//pizza_creamy_cheese.jpg", id: 6 },
    { name: "Garden Express", price: 192.00, image: "img/pizza_garden_express.jpg", id: 7 },
    { name: "Ham Delight", price: 198.00, image: "img/pizza_ham_delight.jpg", id: 8 },
    { name: "Oreo Piña", price: 168.00, image: "img/pizza_oreo_pina.jpg", id: 9 },
    { name: "Yummy Hotdog", price: 192.00, image: "img/pizza_yummy_hotdog.jpg", id: 10 },
];

// this is an Array to store items in the shopping cart
let cart = [];

// Function that create and display the listing product
function displayProducts() {
    const productListing = document.getElementById('product-listing');
    products.forEach(product => {
        
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₱${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        // this will append the product 
        productListing.appendChild(productCard);
    });
}

// Function that updates the shopping cart
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    let totalAmount = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ₱${item.price}`;
        cartItemsContainer.appendChild(cartItem);
        totalAmount += item.price;
    });

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: ₱${totalAmount.toFixed(2)}`;

    // "Confirm Order" button will only show if there are items in the cart
    const confirmButton = document.getElementById('confirm-order');
    if (cart.length > 0) {
        confirmButton.style.display = 'inline-block';
    } else {
        confirmButton.style.display = 'none';
    }
}

// Function that handles adding items to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function that  handles confirmation of order
function confirmOrder() {
    alert("Your order has been confirmed! Thank you for shopping with us. ENJOY :)");
    cart = []; 
    updateCart(); 
}

// adding event listeners for "Add to Cart" buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.dataset.id);
        addToCart(productId);
    }
});

// adding event listener for the "Confirm Order" button
document.getElementById('confirm-order').addEventListener('click', confirmOrder);

displayProducts();
