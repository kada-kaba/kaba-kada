// this class creates a custom "footer" element for every page on the website so that we can use modularity
class NavBar extends HTMLElement { // source : https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript
  connectedCallback() {              // https://developer.mozilla.org/en-US/docs/Web/Web_Components
      //  refers back to the class object
      this.innerHTML = `  
      <nav>
        <div class="nav-wave"></div>
      <a href="../../index.html">HOME</a>
      <a href="../../page/about-us/about-us.html">ABOUT</a>
      <a href="../../page/our-work/our-work.html">OUR WORK</a>
      <a href="../../page/contact/contact.html">CONTACT</a>
      <a href="../../page/donate/donate.html" id="donate-button">DONATE</a>
    </nav>
      `
  }
}
window.customElements.define('nav-bar', NavBar) // accesses the new custom element made over 