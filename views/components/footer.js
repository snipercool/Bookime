class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="bookime__footer">
      <ul class="bookime__footer__navigation">
        <li class="bookime__footer__navigation__link">
          <a href="../index"><i class="bookime__footer__navigation__link__icon bookime__footer__navigation__link__icon--save"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416.667 0H95.333c-8.284 0-15 6.716-15 15v482a15 15 0 0025.607 10.606l150.063-150.061L406.06 507.606A15.002 15.002 0 00431.667 497V15c0-8.284-6.716-15-15-15zM256.002 321.332c-3.978 0-7.793 1.58-10.606 4.394L110.333 460.787V30h291.333v430.785L266.609 325.726a14.996 14.996 0 00-10.607-4.394z"/></svg></i></a>
        </li>
        <li class="bookime__footer__navigation__link">
          <a href="../animeList"><i class="bookime__footer__navigation__link__icon bookime__footer__navigation__link__icon--save"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 0H112C50.144 0 0 50.144 0 112v288c0 61.856 50.144 112 112 112h288c61.856 0 112-50.144 112-112V112C512 50.144 461.856 0 400 0zm80 400c0 44.183-35.817 80-80 80H112c-44.183 0-80-35.817-80-80V112c0-44.183 35.817-80 80-80h288c44.183 0 80 35.817 80 80v288z"/><path d="M160 112h-32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm0 112h-32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm0 112h-32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm48-208h192v32H208zm0 112h192v32H208zm0 112h192v32H208z"/></svg></i></a>
        </li>
        <li class="bookime__footer__navigation__link">
          <a href="../together"><i class="bookime__footer__navigation__link__icon bookime__footer__navigation__link__icon--save"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M116.364 477.091h279.272L256 337.455z"/><path d="M465.455 34.909H46.545C20.945 34.909 0 55.855 0 81.455v279.273c0 25.6 20.945 46.545 46.545 46.545h93.091v-46.545H46.545V81.455h418.909v279.273h-93.091v46.545h93.091c25.6 0 46.545-20.945 46.545-46.545V81.455c.001-25.6-20.944-46.546-46.544-46.546z"/></svg></i></a>
        </li>
        <li class="bookime__footer__navigation__link">
          <a href="../account"><i class="bookime__footer__navigation__link__icon bookime__footer__navigation__link__icon--save"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"/></svg></i></a>
        </li>    
      </ul>
    </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);