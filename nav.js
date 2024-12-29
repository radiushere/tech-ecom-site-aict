document.addEventListener("DOMContentLoaded", () => {
    const navbarContent = `
    <header class="cyber-header">
    <nav class="navbar navbar-expand-lg container">
        <a class="navbar-brand" href="index.html" style="color: #00ff00;">Tech Realm</a>
        <button class="navbar-toggler" style="color: #00ff00;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            ☰
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#products">Products</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About us</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="cart.html"><img src="images/Shopcart.png" alt="cart" width="35" height="20"></a></li>
            </ul>
        </div>
    </nav>
</header>
        `;

    const navbarPlaceholder = document.getElementById("navbar");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarContent;
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.navbar-collapse');
    if (navLinks) {
        navLinks.classList.toggle('collapse');
    }
}
