import { useContext } from 'react';
import Link from 'next/link';
import UIContext from '@context/UIContext';
import { breakpoints, theme } from '@styles/theme';

const Header = () => {
  const UIContextData = useContext(UIContext);
  const { isHeaderVisible } = UIContextData || {};

  return (
    <header>
      <nav className="navbar navbar-hero">
        <Link href="/">
          <a className="navbar-hero__sign-in"> Iniciar Sesión</a>
        </Link>
      </nav>
      <nav className="navbar navbar-content ">
        <Link href="/" passHref>
          <a className="navbar-content__logo">
            <picture>
              <img
                className="navbar-content__img"
                src="/star-logo.svg"
                alt="Star+ logo"
              />
            </picture>
          </a>
        </Link>
        <Link href="/">
          <a className="navbar-content__suscribe">Suscríbete Ahora</a>
        </Link>
        <Link href="/">
          <a className="navbar-content__sign-in"> Iniciar Sesión</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navbar {
            width: 100%;
            height: 52px;
            align-items: center;
            display: flex;
            justify-content: flex-end;
            opacity: 1;
            padding: 0 12px 0 20px;
            position: fixed;
            text-align: center;
            transition: opacity 1s;
            z-index: 1;

            &-hero__sign-in,
            &-content__sign-in {
              width: auto;
              height: 40px;
              align-items: center;
              background-color: ${theme.colors.headerLogin};
              border: 1px solid ${theme.colors.headerLogin};
              border-radius: 4px;
              color: ${theme.colors.textPrimary};
              cursor: pointer;
              display: grid;
              font-size: 13px;
              margin: 5px;
              max-width: none;
              padding: 0 8px;
              pointer-events: auto;
              text-decoration: none;

              @media (min-width: ${breakpoints.tabletWidth}) {
                font-size: 15px;
                text-transform: uppercase;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                height: 50px;
                font-size: 18px;
                padding: 8px 16px;
                text-transform: uppercase;
              }
            }

            /* navbar-hero is behind navbar-content until animation is done */
            &-hero {
              background-color: transparent;

              @media (min-width: ${breakpoints.tabletWidth}) {
                height: 70px;
                padding: 0 12px 0 20px;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                width: 100%;
                height: 70px;
                padding: 0 36px;
              }
            }

            &-content {
              background-color: ${theme.colors.backgroundPrimary};
              opacity: ${isHeaderVisible ? '1' : '0'};

              @media (min-width: ${breakpoints.tabletWidth}) {
                height: 70px;
              }

              @media (min-width: ${breakpoints.desktopWidth}) {
                padding: 0 36px;
              }

              &__logo {
                width: 90px;
                height: auto;
                cursor: pointer;
                display: inline-block;
                margin-right: auto;
                max-height: 60px;
                padding: 0 12px;

                @media (min-width: ${breakpoints.desktopWidth}) {
                  width: 100px;
                }

                &-img {
                  width: 100%;
                  height: auto;
                  display: block;
                  max-width: 160px;
                }
              }

              &__suscribe {
                width: auto;
                height: 40px;
                align-items: center;
                background: ${theme.colors.redOrangeGradient};
                border: none;
                border-radius: 4px;
                box-sizing: border-box;
                color: ${theme.colors.textPrimary};
                cursor: pointer;
                display: inline-flex;
                font-size: 13px;
                justify-content: center;
                letter-spacing: 0;
                line-height: 15px;
                margin: 5px;
                max-width: none;
                padding: 9px 12px;
                text-decoration: none;

                @media (min-width: ${breakpoints.tabletWidth}) {
                  font-size: 15px;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                }

                @media (min-width: ${breakpoints.desktopWidth}) {
                  height: 50px;
                  font-size: 18px;
                  line-height: 18px;
                  padding: 8px 14px;
                  text-transform: uppercase;
                }
              }
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
