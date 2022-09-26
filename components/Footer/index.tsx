import Image from 'next/image';
//import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        className="footer__logo"
        src="/star-logo.svg"
        alt="Star+ logo"
        loading="lazy"
        layout="fill"
      />
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
    </footer>
  );
};

export default Footer;
