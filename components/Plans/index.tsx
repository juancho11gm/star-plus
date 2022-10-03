import { breakpoints, theme } from '@styles/theme';

const Plans = () => {
  return (
    <section className="plans">
      <h1 className="plans__title">Elige tu plan</h1>
      <ul className="plans__options">
        <li className="plan plan--combo">
          <p className="plan__title">ADQUIERE DISNEY+ Y STAR+</p>
          <h3 className="plan__price">COP 38.900/mes*</h3>
          <p className="plan__description">
            Ahorra contratando los dos servicios juntos con esta oferta única.
            Disfruta Disney+ y Star+ por un precio único.
          </p>
          <button className="plan__button button--combo">
            Suscríbete a Combo+
          </button>
        </li>
        <li className="plan plan--monthly">
          <p className="plan__title">STAR+ MENSUAL</p>
          <h3 className="plan__price">COP 31.900/mes*</h3>
          <p className="plan__description">
            Contrata el plan mensual de Star+ y encuentra lo que más te gusta:
            series, películas y eventos deportivos de ESPN.
          </p>
          <button className="plan__button button--star">
            Suscríbete ahora
          </button>
        </li>
        <li className="plan plan--annually">
          <p className="plan__title">STAR+ ANUAL</p>
          <h3 className="plan__price">COP 319.900/año*</h3>
          <p className="plan__description">
            Disfruta un año de Star+ por un precio promocional. Todo el
            entretenimiento y tus deportes favoritos, sin límites.
          </p>
          <button className="plan__button button--star">
            Suscríbete ahora
          </button>
        </li>
      </ul>
      <p className="plans__footnote">
        * El precio podría variar en otras plataformas. Podrían aplicar cargos
        de terceros no asociados a Disney.
      </p>
      <style jsx>
        {`
          .plans {
            background-color: ${theme.colors.backgroundSecondary};
            padding: 10vw 5vw;

            @media (min-width: ${breakpoints.desktopWidth}) {
              padding-top: 0;
            }

            &__title {
              font-size: 26px;
              letter-spacing: normal;
              line-height: 36px;
              margin-bottom: 24px;
              margin-top: 0;
              text-align: center;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 44px;
                line-height: 54px;
                margin-bottom: 30px;
              }
            }

            &__options {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              margin: 0 -12px;
              padding-left: 0;

              @media (min-width: ${breakpoints.tabletWidth}) {
                display: grid;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                display: flex;
                flex-wrap: nowrap;
              }
            }

            &__footnote {
              color: ${theme.colors.textSecondary};
              font-size: 11px;
              font-weight: 400;
              letter-spacing: 0.2px;
              line-height: 21px;
              margin: 0 0 24px;
              text-align: center;
            }
          }

          .plan {
            width: 100%;
            height: auto;
            align-items: center;
            background-position: top;
            background-repeat: no-repeat;
            background-size: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style: none;
            margin-top: 0;
            max-width: 380px;
            padding: 60px 40px 0;
            padding-bottom: 40px;
            text-align: center;

            &__title {
              color: ${theme.colors.textSecondary};
              font-size: 15px;
              line-height: 25px;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 18px;
                line-height: 28px;
              }
            }

            &__description {
              color: ${theme.colors.textSecondary};
              font-size: 15px;
              line-height: 25px;
              margin: 0 0 24px;
              text-align: center;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 18px;
                line-height: 28px;
                margin: 0 0 28px;
              }
            }

            &__price {
              font-size: 22px;
              line-height: 32px;
              margin-top: 24px;

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 28px;
                line-height: 38px;
              }
            }

            &__button {
              width: 100%;
              height: 50px;
              align-items: center;
              border-radius: 4px;
              color: ${theme.colors.textPrimary};
              cursor: pointer;
              display: inline-flex;
              font-size: 15px;
              font-weight: 400;
              justify-content: center;
              letter-spacing: 1px;
              line-height: 15px;
              margin-bottom: 0;
              max-width: 320px;
              padding: 11.5px 24px;
              text-transform: uppercase;
            }

            &--combo {
              background-image: url('/plans/promo.png');
              margin-bottom: 40px;
            }

            &--monthly,
            &--annually {
              margin: 40px 0;

              @media (min-width: ${breakpoints.desktopWidth}) {
                margin-top: 0;
              }
            }

            &--monthly {
              background-image: url('/plans/month-year.png');
            }

            &--annually {
              background-image: url('/plans/month-year.png');
            }
          }

          .button {
            &--combo {
              background: ${theme.colors.buttonSecondary};
            }

            &--star {
              background: ${theme.colors.redOrangeGradient};
            }
          }
        `}
      </style>
    </section>
  );
};

export default Plans;
