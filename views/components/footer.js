class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="Bookime__sidebar__footer">
      <ul class="Bookime__sidebar__footer__navigation">
        <li class="Bookime__sidebar__footer__navigation__link">
          <i class="Bookime__sidebar__footer__navigation__link__icon Bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="Bookime__sidebar__footer__navigation__link">
          <i class="Bookime__sidebar__footer__navigation__link__icon Bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="Bookime__sidebar__footer__navigation__link">
          <i class="Bookime__sidebar__footer__navigation__link__icon Bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="Bookime__sidebar__footer__navigation__link">
          <i class="Bookime__sidebar__footer__navigation__link__icon Bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="Bookime__sidebar__footer__navigation__link">
          <i class="Bookime__sidebar__footer__navigation__link__icon Bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
    
        <li class="Bookime__sidebar__footer__navigation__link Bookime__sidebar__footer__navigation__link--settings">
          <i class="Bookime__sidebar__footer__navigation__link__icon Bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
      </ul>
    </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);