import './Hero.scss';

class Hero extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<section class="hero">
    <div class="hero__content">
      <img class="hero__image" src="/star-logo.svg" alt="Star + Logo" />
      <h2 class="hero__title">
        Series, películas y los deportes que te gustan.
      </h2>
      <div class="hero__button-container">
        <button class="hero__button">Contrata Oferta Combo+</button>
      </div>
      <a class="hero__link" href="/"
        >Suscribirme solo a Star+ mensual | Suscribirme solo a Star+ anual</a
      >
    </div>
    <button class="hint" aria-label="Down Arrow">
      <span>
        <svg
          class="down"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <rect width="48" height="48" fill="none"></rect>
          <path
            d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"
          ></path>
        </svg>
      </span>
    </button>
  </section>`;
  }
}

customElements.define('hero-component', Hero);
