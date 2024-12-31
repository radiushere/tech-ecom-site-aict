// Function to render cart items
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    let totalAmount = 0;
    cartContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        return `
            <div class="cart-item position-relative">
            <button class="btn btn-success btn-sm position-absolute top-0 end-0" onclick="removeItem('${item.id}')">&times;</button>
            <div class="row align-items-center">
                <div class="col-2">
                <img src="${item.image}" alt="${item.name}" class="img-fluid">
                </div>
                <div class="col-4">
                <h5>${item.name}</h5>
                </div>
                <div class="col-2">
                Rs.${item.price}
                </div>
                <div class="col-2">
                <input type="number" class="form-control" value="${item.quantity}" 
                    onchange="updateQuantity('${item.id}', this.value)">
                </div>
                <div class="col-1">
                Rs.${itemTotal}
                </div>
            </div>
            </div>
        `;
    }).join('');

    document.getElementById('cart-total').textContent = totalAmount;
}

// Function to update quantity
function updateQuantity(itemId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity = parseInt(newQuantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Function to remove item
function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function for checkout
function checkout() {
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

function submitShippingInfo() {
    const form = document.getElementById('shippingForm');
    if (form.checkValidity()) {
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const postalCode = document.getElementById('postalCode').value;
        const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
        modal.hide();

        Swal.fire({
            title: 'Shipping Information Saved',
            text: 'Redirecting to payment...',
            icon: 'success',
            background: '#000',
            color: '#00ff00',
            confirmButtonClass: 'cyber-btn',
            confirmButtonClass: 'cyber-btn',
        });
    } else {
        form.reportValidity();
    }
}

// Load cart when page loads
window.onload = renderCart;