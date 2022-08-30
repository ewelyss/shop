const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `  <div class="footer-content">
    <img src="darklogo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li><a href="resources/home.html" class="footer-link"> Home</a> </li>
            <li><a href="resources/products.html" class="footer-link"> Products</a> </li>
            <li><a href="resources/about.html" class="footer-link"> About</a> </li>
            <li><a href="resources/contact.html" class="footer-link"> Contact</a> </li>
        </ul>
        
    </div>


</div>
<p class="footer-title">Story company</p>
        <p class="info"> Our story start a long time ago. </p>
<p class="info">Support emails - t-shirt@gmail.com, art-deco@gmail.com</p>
<p class="info">Telephone - 07xxxxxxxx</p>

<div class="footer-social-container">
    <div> 
        <a href="resources/terms.html" class="social-link"> Terms & Services</a>
        <a href="resources/privacy.html" class="social-link"> Privacy Page</a>

    </div>

    <div> 
        <a href="https://www.instagram.com/dare_to_art21/" class="social-link"> Instagram</a>
        <a href="https://www.facebook.com/decoart212" class="social-link"> Facebook</a>

    </div>
</div>
    
    `;
}


createFooter();