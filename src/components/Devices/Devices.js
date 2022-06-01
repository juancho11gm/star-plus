import './Devices.scss';

class Devices extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = ` <section class="devices">
    <h2 class="devices__title">Disponible en tus dispositivos favoritos</h2>
    <ul class="devices-container">
      <li class="devices-container__content">
        <figure class="device">
          <img class="device__img" src="/devices/pc.png" />
          <h3 class="device__options">Computadoras</h3>
          <figcaption class="device__description">
            <ul class="device__items">
              <li class="device__item">Chrome OS</li>
              <li class="device__item">MacOS</li>
              <li class="device__item">PC Windows</li>
            </ul>
          </figcaption>
        </figure>
      </li>
      <li class="devices-container__content">
        <figure class="device">
          <img class="device__img" src="/devices/tv.png" />
          <h3 class="device__options">TV</h3>
          <figcaption class="device__description">
            <ul class="device__items">
              <li class="device__item">Amazon Fire TV</li>
              <li class="device__item">Android TV</li>
              <li class="device__item">Apple TV</li>
              <li class="device__item">Chromecast</li>
              <li class="device__item">LG</li>
              <li class="device__item">Samsung</li>
            </ul>
          </figcaption>
        </figure>
      </li>
      <li class="devices-container__content">
        <figure class="device">
          <img class="device__img" src="/devices/console.png" />
          <h3 class="device__options">Consolas</h3>
          <figcaption class="device__description">
            <ul class="device__items">
              <li class="device__item">PS4</li>
              <li class="device__item">PS5</li>
              <li class="device__item">Xbox One</li>
              <li class="device__item">Xbox Series X</li>
              <li class="device__item">Xbox Series S</li>
            </ul>
          </figcaption>
        </figure>
      </li>
      <li class="devices-container__content">
        <figure class="device">
          <img class="device__img" src="/devices/mobile.png" />
          <h3 class="device__options">Celulares y tabletas</h3>
          <figcaption class="device__description">
            <ul class="device__items">
              <li class="device__item">Tabletas Amazon Fire</li>
              <li class="device__item">Celulares y tabletas Android</li>
              <li class="device__item">iPhone y iPad</li>
            </ul>
          </figcaption>
        </figure>
      </li>
    </ul>
  </section>`;
  }
}

customElements.define('devices-component', Devices);
