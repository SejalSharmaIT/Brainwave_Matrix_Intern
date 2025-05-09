// Cart array to store added items
let cartItems = [];

// Function to add product to cart
function addToCart(productName, productPrice) {
  const item = {
    name: productName,
    price: productPrice
  };
  cartItems.push(item);
  updateCartCount();
  displayCartItems();
  alert(`${productName} has been added to your cart!`);
}

// Function to update cart count in the navbar (optional)
function updateCartCount() {
  const cartLink = document.getElementById("cart-link");
  if (cartLink) {
    cartLink.innerText = `Cart (${cartItems.length})`;
  }
}

// Function to display cart items and total price
function displayCartItems() {
  const cartSection = document.getElementById("cart");
  const cartList = document.getElementById("cart-items-list");
  const totalPriceDiv = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  cartList.innerHTML = ""; // Clear current cart items

  if (cartItems.length === 0) {
    cartSection.querySelector("p").innerText = "Your cart is currently empty.";
    totalPriceDiv.style.display = "none"; // Hide total price if no items in the cart
    checkoutBtn.style.display = "none"; // Hide checkout button if no items in the cart
    return;
  }

  cartSection.querySelector("p").innerText = "Here are the items in your cart:";

  let total = 0;
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalPriceDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
  totalPriceDiv.style.display = "block"; // Show total price
  checkoutBtn.style.display = "inline-block"; // Show checkout button
}

// Function to remove an item from the cart
function removeItem(index) {
  cartItems.splice(index, 1);
  displayCartItems(); // Update the cart display after removal
}

// Checkout process (simulating successful order)
function checkout() {
  alert("Order Successful! Your items will be delivered soon.");
  cartItems = []; // Clear cart after checkout
  displayCartItems(); // Refresh the cart display
  document.getElementById("checkout-btn").style.display = "none"; // Hide checkout button after order
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (optional)
  if (name && email && message) {
    // Show an alert message on successful submission
    alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    
    // Optionally, clear the form fields after submission
    document.getElementById('contact-form').reset();
  } else {
    // Show an error message if fields are missing
    alert('Please fill in all the fields before submitting.');
  }
});
