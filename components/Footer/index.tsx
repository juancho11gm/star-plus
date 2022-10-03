import { theme } from '@styles/theme';

const Footer = () => {
  return (
    <footer className="footer">
      <picture>
        <img
          className="footer__logo"
          src="/star-logo.svg"
          alt="Star+ logo"
          loading="lazy"
        />
      </picture>
      <p className="footer_description">
        2022. Cloned by
        <a
          className="footer__link"
          href="https://github.com/Jaimeandres97"
          target="_blank"
          rel="noreferrer"
        >
          @Jaimeandres97
        </a>
        and
        <a
          className="footer__link"
          href="https://github.com/juancho11gm"
          target="_blank"
          rel="noreferrer"
        >
          @juancho11gm
        </a>
      </p>
      <style jsx>
        {`
          .footer {
            color: ${theme.colors.textSecondary};
            padding: 26px 8px;
            text-align: center;

            &__link {
              color: ${theme.colors.textSecondary};
            }

            &__logo {
              width: 80px;
              height: 25px;
              display: block;
              margin: 4px auto 15px;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
