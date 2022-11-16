// this class creates a custom "footer" element for every page on the website so that we can use modularity
class MyFooter extends HTMLElement { // source : https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript
    connectedCallback() {              // https://developer.mozilla.org/en-US/docs/Web/Web_Components
        //  refers back to the class object
        this.innerHTML = `
        <footer> 
        <div class="main">
            <div class="nav-wave-inverted"></div>
            <div class="contact-footer">
            <ul>
                <li>Contact:</li>
                <li>Loremipsum@ntnu.no</li>
                <li>Addressegata 420</li>
                <li>+47 12 34 56 78</li>
            </ul>
            </div>

            <div class="logo">
                <a href = "#">
                    <img id="leaf" src="GIF/leaf.gif" alt="logo"/>
                </a>
            </div>

            <div class="media">
            <ul>
                <li>
                    <a href="https://www.twitter.com/"><img src="../../image/logo/twitter.png" alt="Twitter" /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/"><img src="../../image/logo/youtube.png" alt="YouTube" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/"><img src="../../image/logo/instagram.png" alt="Instagram" /></a>
                </li>
            </ul>
            </div>
        </div>
        </footer>`;
    }
}

customElements.define('app-footer', MyFooter) // accesses the new custom element made over and creates a new element called "app-footer"

class MyNavbar extends HTMLElement { // source : https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript
    connectedCallback() {              // https://developer.mozilla.org/en-US/docs/Web/Web_Components
    //  refers back to the class object
    this.innerHTML = ` 
    <nav>
        <div class="nav-wave"></div>
        <a href="index.html" id="nav-icon">
            <img src ="image/logo/leaf.png" alt = "green leaf logo">
        </a>
        <a href="about-us.html" class="link">ABOUT</a>
        <a href="our-work.html" class="link">OUR WORK</a>
        <a href="contact.html" class="link">CONTACT</a>
        <div class="dropdown">
            <button class="dropbtn">FOREST</button>
            <div class="dropdown-content">
                <a href="amazon.html" class="link">AMAZON</a>
                <a href="congo.html" class="link">CONGO</a>
                <a href="sumatra.html" class="link">SUMATRA</a>
                <a href="xishuangbanna.html" class="link">XISHUANGBANNA</a>
            </div>
        </div>

        <a href="donate.html" id="donate-button" class="link">DONATE</a>
    </nav>`
    }
}

customElements.define('nav-bar', MyNavbar) // accesses the new custom element made over and creates a new element called "app-footer"
