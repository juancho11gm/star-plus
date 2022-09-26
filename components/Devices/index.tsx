//import './Devices.scss';

const Devices = () => {
  return (
    <section className="devices">
      <h2 className="devices__title">
        Disponible en tus dispositivos favoritos
      </h2>
      <ul className="devices-container">
        <li className="devices-container__content">
          <figure className="device">
            <img className="device__img" src="/devices/pc.png" />
            <h3 className="device__options">Computadoras</h3>
            <figcaption className="device__description">
              <ul className="device__items">
                <li className="device__item">Chrome OS</li>
                <li className="device__item">MacOS</li>
                <li className="device__item">PC Windows</li>
              </ul>
            </figcaption>
          </figure>
        </li>
        <li className="devices-container__content">
          <figure className="device">
            <img className="device__img" src="/devices/tv.png" />
            <h3 className="device__options">TV</h3>
            <figcaption className="device__description">
              <ul className="device__items">
                <li className="device__item">Amazon Fire TV</li>
                <li className="device__item">Android TV</li>
                <li className="device__item">Apple TV</li>
                <li className="device__item">Chromecast</li>
                <li className="device__item">LG</li>
                <li className="device__item">Samsung</li>
              </ul>
            </figcaption>
          </figure>
        </li>
        <li className="devices-container__content">
          <figure className="device">
            <img className="device__img" src="/devices/console.png" />
            <h3 className="device__options">Consolas</h3>
            <figcaption className="device__description">
              <ul className="device__items">
                <li className="device__item">PS4</li>
                <li className="device__item">PS5</li>
                <li className="device__item">Xbox One</li>
                <li className="device__item">Xbox Series X</li>
                <li className="device__item">Xbox Series S</li>
              </ul>
            </figcaption>
          </figure>
        </li>
        <li className="devices-container__content">
          <figure className="device">
            <img className="device__img" src="/devices/mobile.png" />
            <h3 className="device__options">Celulares y tabletas</h3>
            <figcaption className="device__description">
              <ul className="device__items">
                <li className="device__item">Tabletas Amazon Fire</li>
                <li className="device__item">Celulares y tabletas Android</li>
                <li className="device__item">iPhone y iPad</li>
              </ul>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default Devices;
