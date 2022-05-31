import './Plans.scss';

class Plans extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<section class="plans">
        <h1 class="plans__title">Elige tu plan</h1>
        <ul class="plans__options">
          <li class="plan plan--combo">
            <p class="plan__title">ADQUIERE DISNEY+ Y STAR+</p>
            <h3 class="plan__price">COP 38.900/mes*</h3>
            <p class="plan__description">
              Ahorra contratando los dos servicios juntos con esta oferta única.
              Disfruta Disney+ y Star+ por un precio único.
            </p>
            <button class="plan__button button--combo">
              Suscríbete a Combo+
            </button>
          </li>
          <li class="plan plan--monthly">
            <p class="plan__title">STAR+ MENSUAL</p>
            <h3 class="plan__price">COP 31.900/mes*</h3>
            <p class="plan__description">
              Contrata el plan mensual de Star+ y encuentra lo que más te gusta:
              series, películas y eventos deportivos de ESPN.
            </p>
            <button class="plan__button button--star">Suscríbete ahora</button>
          </li>
          <li class="plan plan--annually">
            <p class="plan__title">STAR+ ANUAL</p>
            <h3 class="plan__price">COP 319.900/año*</h3>
            <p class="plan__description">
              Disfruta un año de Star+ por un precio promocional. Todo el
              entretenimiento y tus deportes favoritos, sin límites.
            </p>
            <button class="plan__button button--star">Suscríbete ahora</button>
          </li>
        </ul>
        <p class="plans__footnote">
          * El precio podría variar en otras plataformas. Podrían aplicar cargos
          de terceros no asociados a Disney.
        </p>
      </section>`;
  }
}

customElements.define('plans-component', Plans);
