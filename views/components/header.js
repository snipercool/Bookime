class Header extends HTMLElement {
  constructor() {
    super();
    this.origin = `chrome-extension://${chrome.runtime.id}`;
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="bookime__header">
      <h2 class="bookime__header__title">
        Bookime
      </h2>
  
      <div class="bookime__header__options">
        <img id="bookimeTheme" class="bookime__header__options__theme" src="${this.origin}/assets/dist/images/sun.png">
        <svg id="bookimeClose" class="bookime__header__options__close" width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="close-btn" transform="translate(1.000000, 0.000000)" stroke="#868A9F"><g id="Option#3"><g id="Login-(Enter-Credentials)"><g id="panel"><g id="top_bar"><g id="close_btn"><path d="M8,0 L0,8" id="Shape"></path><path d="M8,8 L0,0" id="Shape"></path></g></g></g></g></g></g></g></svg>
      </div>
    </div>
    `;
  }
}
  
customElements.define('header-component', Header);

/* Close the sidebar with the cross icon */
const close = document.getElementById("bookimeClose");

close.addEventListener("click", function() {
  parent.postMessage("close", "*");
});

/* Change Theme (Dark mode & Light mode) */
const theme = document.getElementById("bookimeTheme");

let light = true;
theme.addEventListener("click", function() {
  if (light) {
    parent.postMessage("dark", "*");
    theme.src = `chrome-extension://${chrome.runtime.id}/assets/dist/images/moon.png`;
  } else {
    parent.postMessage("light", "*");
    theme.src = `chrome-extension://${chrome.runtime.id}/assets/dist/images/sun.png`;
  }

  light = !light;
});