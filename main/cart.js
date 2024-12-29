function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity = parseInt(existingItem.quantity) + parseInt(product.quantity);
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // popup message
    Swal.fire({
        title: 'Success!',
        text: 'Item added to cart!',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel',
            container: 'swal2-container',
            popup: 'swal2-popup',
            title: 'swal2-title',
            content: 'swal2-content'
        }
    });
}