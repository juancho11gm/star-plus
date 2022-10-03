import { breakpoints, theme } from '@styles/theme';

const Devices = () => {
  return (
    <section className="devices">
      <h2 className="devices__title">
        Disponible en tus dispositivos favoritos
      </h2>
      <ul className="devices-container">
        <li className="devices-container__content">
          <figure className="device">
            <picture>
              <img
                alt="computers image"
                className="device__img"
                src="/devices/pc.png"
              />
            </picture>
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
            <picture>
              <img
                alt="TV image"
                className="device__img"
                src="/devices/tv.png"
              />
            </picture>
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
            <picture>
              <img
                alt="videogames console image"
                className="device__img"
                src="/devices/console.png"
              />
            </picture>
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
            <picture>
              <img
                alt="mobile devices image"
                className="device__img"
                src="/devices/mobile.png"
              />
            </picture>
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
      <style jsx>
        {`
          .devices {
            padding: 0 5vw;
            text-align: center;

            &__title {
              color: ${theme.colors.textPrimary};
              font-size: 26px;
              letter-spacing: normal;
              line-height: 36px;
              margin-bottom: 16px;
              margin-top: 0;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 40px;
                line-height: 50px;
                margin-bottom: 24px;
              }
            }
          }

          .devices-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 -12px;
            padding-left: 0;

            &__content {
              box-sizing: border-box;
              display: flex;
              flex: 0 0 50%;
              flex-direction: column;
              list-style: none;
              max-width: 50%;
              padding: 12px;

              @media (min-width: ${breakpoints.desktopWidth}) {
                flex: 0 0 25%;
                max-width: 25%;
              }
            }
          }

          .device {
            &__img {
              width: 100%;
              height: auto;
              display: block;
            }

            &__options {
              font-size: 22px;
              letter-spacing: normal;
              line-height: 32px;
              margin-bottom: 16px;
              margin-top: 20px;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 28px;
                line-height: 38px;
                margin-bottom: 24px;
              }
            }

            &__description {
              color: ${theme.colors.textSecondary};
              font-size: 15px;
              line-height: 25px;
              margin: 0 0 24px;
              margin-bottom: 20px;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 18px;
                line-height: 28px;
              }
            }

            &__items {
              list-style: none;
              padding: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Devices;
