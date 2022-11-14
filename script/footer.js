// this class creates a custom "footer" element for every page on the website so that we can use modularity
class MyFooter extends HTMLElement { // source : https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript
    connectedCallback() {              // https://developer.mozilla.org/en-US/docs/Web/Web_Components
        //  refers back to the class object
        this.innerHTML = ` 
        <link rel="stylesheet" href="../../css/index.css">
        <link rel="stylesheet" href="/test.css" 
        <div class="nav-wave">
            <footer> 
        <div class="main">
            <div class="contact-footer">
            <ul>
                <li>Contact:</li>
                <li>Loremipsum@ntnu.no</li>
                <li>Klostergata 29 Brazil caralho</li>
                <li>Postnr ellerno idk</li>
            </ul>
            </div>

            <div class="logo">
            <img id = "leaf" src="/GIF/leaf.gif" alt="logo">
            </div>

            <div class="media">
            <ul>
                <li>
                <a href="#"><img src="/image/twitter.png" alt="Twitter" /></a>
                </li>
                <li>
                <a href="#"><img src="/image/youtube.png" alt="YouTube" /></a>
                </li>
                <li>
                <a href="#"><img src="/image/instagram.png" alt="Instagram" /></a>
                </li>
            </ul>
            </div>
        </div>
        </footer>
    </div>
        `
    }
}

window.customElements.define('app-footer', MyFooter) // accesses the new custom element made over and creates a new element called "app-footer"