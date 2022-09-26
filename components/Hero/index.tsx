import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <Image
          className={styles.hero__image}
          src="/star-logo.svg"
          alt="Star + Logo"
          width={160}
          height={49}
        />
        <h2 className={styles.hero__title}>
          Series, películas y los deportes que te gustan.
        </h2>
        <div className={styles['hero__button-container']}>
          <button className={styles.hero__button}>
            Contrata Oferta Combo+
          </button>
        </div>
        <Link href="/">
          <a className={styles.hero__link}>
            Suscribirme solo a Star+ mensual | Suscribirme solo a Star+ anual
          </a>
        </Link>
      </div>
      <button className={styles.hint} aria-label="Down Arrow">
        <span>
          <svg
            className={styles.down}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <rect width="48" height="48" fill="none"></rect>
            <path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"></path>
          </svg>
        </span>
      </button>
    </section>
  );
};

export default Hero;
