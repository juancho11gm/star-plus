import { useContext, useEffect } from 'react';
import Link from 'next/link';
import UIContext from '@context/UIContext';
import useIntersection from '@hooks/useIntersection';
import { breakpoints, theme } from '@styles/theme';

const Hero = () => {
  const UIContextData = useContext(UIContext);
  const { setIsHeaderVisible } = UIContextData || {};
  const { isNearScreen, fromRef } = useIntersection({
    distance: '0px',
    once: false,
  });

  useEffect(() => {
    // The navbar for register must be hidden when the hero is visible
    setIsHeaderVisible(!isNearScreen);
  }, [isNearScreen, setIsHeaderVisible]);

  return (
    <section className="hero" ref={fromRef}>
      <div className="hero__content">
        <picture>
          <img className="hero__image" src="/star-logo.svg" alt="Star + Logo" />
        </picture>
        <h2 className="hero__title">
          Series, películas y los deportes que te gustan.
        </h2>
        <div className="hero__button-container">
          <button className="hero__button">Contrata Oferta Combo+</button>
        </div>
        <Link href="/">
          <a className="hero__link">
            Suscribirme solo a Star+ mensual | Suscribirme solo a Star+ anual
          </a>
        </Link>
      </div>
      <button className="hint" aria-label="Down Arrow">
        <span>
          <svg
            className="down"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <rect width="48" height="48" fill="none"></rect>
            <path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"></path>
          </svg>
        </span>
      </button>
      <style jsx>
        {`
          .hero {
            background-color: ${theme.colors.backgroundSecondary};
            background-image: url('/hero/hero-sm.jpg');
            background-repeat: no-repeat;
            background-size: 100%;
            display: flex;
            position: relative;
            text-align: center;
            color: ${theme.colors.textPrimary};

            @media (min-width: ${breakpoints.tabletWidth}) {
              background-image: url('/hero/hero-md.jpg');
            }

            @media (min-width: ${breakpoints.desktopWidth}) {
              background-image: url('/hero/hero-lg.jpg');
            }

            &__content {
              width: 100vw;
              min-height: 70vh;
              padding: 45vw 5vw 20vw;
              padding-top: 46vw;

              @media (min-width: ${breakpoints.tabletWidth}) {
                padding: 28vw 5vw 10vw;
              }
            }

            &__image {
              width: 100%;
              display: block;
              margin: auto;
              margin-bottom: 3vw;
              max-width: 160px;
              padding-bottom: 12px;

              @media (min-width: ${breakpoints.desktopWidth}) {
                height: auto;
                margin-bottom: 2vw;
                max-width: 180px;
              }
            }

            &__title {
              font-size: 22px;
              line-height: 32px;
              margin-bottom: 16px;

              @media (min-width: ${breakpoints.tabletWidth}) {
                font-size: 22px;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 28px;
                line-height: 38px;
                margin-bottom: 24px;
              }
            }

            &__button-container {
              width: 100%;
              margin-bottom: 20px;

              @media (min-width: ${breakpoints.tabletWidth}) {
                height: 50px;
                font-size: 15px;
                line-height: 15px;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                height: 68px;
                margin-bottom: 20px;
              }
            }

            &__button {
              width: 100%;
              height: 50px;
              background: ${theme.colors.buttonPrimary};
              border-radius: 4px;
              color: ${theme.colors.textPrimary};
              cursor: pointer;
              font-size: 15px;
              letter-spacing: 1px;
              line-height: 15px;
              margin-top: 1px;
              max-width: 540px;
              text-transform: uppercase;

              @media (min-width: ${breakpoints.desktopWidth}) {
                height: 100%;
                font-size: 18px;
                line-height: 18px;
                max-width: 700px;
              }
            }

            &__link {
              color: ${theme.colors.textPrimary};
              font-size: 14px;
              letter-spacing: 0.2px;
              line-height: 26px;
              margin: 0 0 24px;

              @media (min-width: ${breakpoints.tabletWidth}) {
                font-size: 14px;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                font-size: 16px;
                line-height: 26px;
              }
            }
          }

          .hint {
            width: 48px;
            height: 48px;
            animation: bounce 1.75s infinite;
            background-color: transparent;
            border: none;
            bottom: 2vw;
            cursor: pointer;
            fill: ${theme.colors.textSecondary};
            font-size: 0;
            left: 50%;
            margin: 0 auto;
            opacity: 0.65;
            padding: 6px;
            position: absolute;
            top: 92%;
            transform: translate(-50%, -50%);

            @keyframes bounce {
              0%,
              20%,
              50%,
              80%,
              100% {
                transform: translate(-50%, 0);
              }

              40% {
                transform: translate(-50%, -7px);
              }

              60% {
                transform: translate(-50%, -3.5px);
              }
            }

            @media (min-width: ${breakpoints.desktopWidth}) {
              top: 85%;
            }

            &:hover {
              fill: ${theme.colors.textPrimary};
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
