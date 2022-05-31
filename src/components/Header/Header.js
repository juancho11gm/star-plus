import './Header.scss';

class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<header>
      <nav class="navbar navbar-hero">
        <a href="/" class="navbar-hero__sign-in">Iniciar Sesión</a>
      </nav>
      <nav class="navbar navbar-content">
        <a href="/" class="navbar-content__logo">
          <img
            class="navbar-content__logo-img"
            src="/star-logo.svg"
            alt="Star+ logo"
          />
        </a>
        <a href="/" class="navbar-content__suscribe">Suscríbete Ahora</a>
        <a href="/" class="navbar-content__sign-in">Iniciar Sesión</a>
      </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
