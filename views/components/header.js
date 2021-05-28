class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="Bookime__sidebar__header">
        <h2 class="Bookime__sidebar__header__title">
            Bookime
        </h2>
    
        <div class="Bookime__sidebar__header__close Bookime__sidebar-open">
            <div class="Bookime__sidebar__header__sun"><img src="chrome-extension://boihlaklecibomfmpjmmfidldmbfbjjl/assets/dist/images/sun.png"></div>
            <div class="Bookime__sidebar__header__moon"><img src="chrome-extension://boihlaklecibomfmpjmmfidldmbfbjjl/assets/dist/images/moon.png"></div>
            <svg width="10px" height="8px" viewBox="0 0 10 8" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="close-btn" transform="translate(1.000000, 0.000000)" stroke="#868A9F"><g id="Option#3"><g id="Login-(Enter-Credentials)"><g id="panel"><g id="top_bar"><g id="close_btn"><path d="M8,0 L0,8" id="Shape"></path><path d="M8,8 L0,0" id="Shape"></path></g></g></g></g></g></g></g></svg>
        </div>
      </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);