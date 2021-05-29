class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="bookime__sidebar__footer">
      <ul class="bookime__sidebar__footer__navigation">
        <li class="bookime__sidebar__footer__navigation__link">
          <i class="bookime__sidebar__footer__navigation__link__icon bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="bookime__sidebar__footer__navigation__link">
          <i class="bookime__sidebar__footer__navigation__link__icon bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="bookime__sidebar__footer__navigation__link">
          <i class="bookime__sidebar__footer__navigation__link__icon bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="bookime__sidebar__footer__navigation__link">
          <i class="bookime__sidebar__footer__navigation__link__icon bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
        <li class="bookime__sidebar__footer__navigation__link">
          <i class="bookime__sidebar__footer__navigation__link__icon bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
    
        <li class="bookime__sidebar__footer__navigation__link bookime__sidebar__footer__navigation__link--settings">
          <i class="bookime__sidebar__footer__navigation__link__icon bookime__sidebar__footer__navigation__link__icon--save far fa-bookmark"></i>
        </li>
      </ul>
    </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);