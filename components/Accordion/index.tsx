const Accordion = () => {
  return (
    <section className="accordion">
      <h2 className="accordion__title">Preguntas frecuentes</h2>
      <div className="accordion-container">
        <summary className="accordion-container__summary">
          ¿Ya tienes Disney+ o Star+ y quieres Combo+?
        </summary>
        <div className="accordion-container__content">
          <p className="accordion-container__description">
            Con Combo+:
            <br />• Descontaremos el valor de tu suscripción actual del precio
            de Combo+. (¡Sí, para el plan anual también!).
            <br />• Si tienes una suscripción mensual, el valor que pagas
            mensualmente se descontará del precio final de Combo+.
            <br />• Si tienes una suscripción anual, dividiremos el precio que
            pagaste en 12 partes iguales y descontaremos ese precio mensualmente
            del precio final de Combo+.
            <br />• Te llegará un correo electrónico con el detalle de los
            cargos apenas confirmes el pago.
            <br />• Recuerda que puedes cancelar en cualquier momento.
            <br />
            La suscripción a Combo+ es únicamente mensual, por el momento.
          </p>
        </div>
      </div>
      <div className="accordion-container">
        <summary className="accordion-container__summary">
          ¿Ya tienes una suscripción a Disney+?
        </summary>
        <div className="accordion-container__content">
          <p className="accordion-container__description">
            Puedes usar tu nombre de usuario y contraseña de Disney+ para
            suscribirte a Star+ y así conseguir la oferta combinada Combo+.
            Debes tener 18 años de edad para suscribirte.
          </p>
        </div>
      </div>
      <div className="accordion-container">
        <summary className="accordion-container__summary">
          ¿Qué incluye Star+?
        </summary>
        <div className="accordion-container__content">
          <p className="accordion-container__description">
            Beneficios de la suscripción a Star+:
            <br />• Experiencia de entretenimiento exclusiva.
            <br />• Eventos deportivos de ESPN en vivo y con máxima calidad.
            <br />• Amplia variedad de títulos en 4K.
            <br />• Descargas hasta en diez dispositivos.
            <br />• Hasta cuatro pantallas a la vez sin costo adicional:
            ¡disfrutan todos!
            <br />• Controles parentales para cuidar a la familia.
          </p>
        </div>
      </div>
      <div className="accordion-container">
        <summary className="accordion-container__summary">
          ¿Qué métodos de pago puedo usar?
        </summary>
        <div className="accordion-container__content">
          <p className="accordion-container__description">
            Puedes pagar con tarjeta de crédito, débito, Mercado Pago e incluso
            a través de terceros como Google Play Store o App Store de Apple. No
            es obligatorio tener tarjeta bancaria.
          </p>
        </div>
      </div>
      <div className="accordion-container">
        <summary className="accordion-container__summary">
          ¿Hay controles parentales en Star+?
        </summary>
        <div className="accordion-container__content">
          <p className="accordion-container__description">
            Sí, con esta función podrás controlar el acceso a los contenidos a
            través de la clasificación por edad y cuidar a tu familia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
