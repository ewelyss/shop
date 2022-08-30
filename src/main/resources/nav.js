const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <div class="liclass">
           
        <li style="padding-right: 1em;" class="link"><a href="index.html">Home</a></li>
        <li style="padding-right: 1em;" class="link"><a href="products.html">Products</a></li>
        <li style="padding-right: 1em;" class="link"><a href="about.html">About</a></li>
        <li style="padding-right: 1em;" class="link"><a href="contact.html">Contact</a></li>
      
        
            
    </div>
        <img src="darklogo.png" class= "brand-logo" alt="">
        <div class="nav-items">
            <h1 >Hand-painted T-shirts</h1>
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn"><a href="search.html">search </a></button>
            </div>
            <a href="signup.html"><img src="user.png" alt=""> </a>
            <a href="cart.html"><img src="cart.png" alt=""> </a>
            
        </div>
    </div>
    `;
}

createNav();