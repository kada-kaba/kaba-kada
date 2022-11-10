// this class creates a custom "footer" element for every page on the website so that we can use modularity
class NavBar extends HTMLElement { // source : https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript
  connectedCallback() {              // https://developer.mozilla.org/en-US/docs/Web/Web_Components
      //  refers back to the class object
      this.innerHTML = `  
      <div class="navbar">
      <a href="#" class="navbar-item">Home</a>
      <a href="#" class="navbar-item">About </a>
      <div class="drop">
        <button class="drop-button">Drop</button>
        <div class="drop-content">
          <a href="#">A</a>
          <a href="#">A</a>
          <a href="#">A</a>
        </div>
      </div>
      <a id="donate" href="#">Donate</a>
    </div>
      `
  }
}
window.customElements.define('navbar', AppHeader) // accesses the new custom element made over 