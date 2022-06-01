import './Footer.scss';

class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<footer class="footer">
        <img
          class="footer__logo"
          src="/star-logo.svg"
          alt="Star+ logo"
          loading="lazy"
        />
        <p class="footer_description">
          2022. Cloned by
          <a
            class="footer__link"
            href="https://github.com/Jaimeandres97"
            target="_blank"
            >@Jaimeandres97
          </a>
          and
          <a
            class="footer__link"
            href="https://github.com/juancho11gm"
            target="_blank"
            >@juancho11gm
          </a>
        </p>
      </footer>`;
  }
}

customElements.define('footer-component', Footer);
