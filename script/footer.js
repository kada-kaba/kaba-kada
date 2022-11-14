// this class creates a custom "footer" element for every page on the website so that we can use modularity
class MyFooter extends HTMLElement { // source : https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript
    connectedCallback() {              // https://developer.mozilla.org/en-US/docs/Web/Web_Components
        //  refers back to the class object
        this.innerHTML = `  
          <footer class = "footer">
            <div class ="contact-footer">
            Contact:
            <li>Loremipsum@ntnu.no</li>
            <li>Klostergata 29 Brazil caralho</li>
            <li>Postnr ellerno idk</li>
            </div>
            <div>
              <a href = "#Top"><img src="/GIF/leaf.gif" alt = "green leaf" id = "leaf"></a>
            </div>
            <div class="media">
                <li><img src="/image/twitter.png" alt="Twitter"><a href="#"></a></li>
                <li><img src="/image/youtube.png" alt="YouTube"><a href="#"></a></li>
                <li><img src="/image/instagram.png" alt="Instagram"><a href="#"></a></li>
            </div>
        </footer> 
        `
    }
}
window.customElements.define('app-footer', MyFooter) // accesses the new custom element made over and creates a new element called "app-footer"