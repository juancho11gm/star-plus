import styles from './Plans.module.scss';

const Plans = () => {
  return (
    <section className={styles.plans}>
      <h1 className={styles.plans__title}>Elige tu plan</h1>
      <ul className={styles.plans__options}>
        <li className={`${styles.plan} ${styles['plan--combo']}`}>
          <p className={styles.plan__title}>ADQUIERE DISNEY+ Y STAR+</p>
          <h3 className={styles.plan__price}>COP 38.900/mes*</h3>
          <p className={styles.plan__description}>
            Ahorra contratando los dos servicios juntos con esta oferta única.
            Disfruta Disney+ y Star+ por un precio único.
          </p>
          <button
            className={`${styles.plan__button} ${styles['button--combo']}`}
          >
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
    </section>
  );
};

export default Plans;
