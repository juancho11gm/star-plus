import Accordion from '@components/Accordion';
import { breakpoints, theme } from '@styles/theme';

const accordionData = [
  {
    summary: '¿Ya tienes Disney+ o Star+ y quieres Combo+?',
    description: `Con Combo+:
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
    La suscripción a Combo+ es únicamente mensual, por el momento.`,
  },
  {
    summary: '¿Ya tienes una suscripción a Disney+?',
    description: `Puedes usar tu nombre de usuario y contraseña de Disney+ para
    suscribirte a Star+ y así conseguir la oferta combinada Combo+.
    Debes tener 18 años de edad para suscribirte.`,
  },
  {
    summary: '¿Qué incluye Star+?',
    description: ` Beneficios de la suscripción a Star+:
    <br />• Experiencia de entretenimiento exclusiva.
    <br />• Eventos deportivos de ESPN en vivo y con máxima calidad.
    <br />• Amplia variedad de títulos en 4K.
    <br />• Descargas hasta en diez dispositivos.
    <br />• Hasta cuatro pantallas a la vez sin costo adicional:
    ¡disfrutan todos!
    <br />• Controles parentales para cuidar a la familia.`,
  },
  {
    summary: '¿Qué métodos de pago puedo usar?',
    description: ` Puedes pagar con tarjeta de crédito, débito, Mercado Pago e incluso
    a través de terceros como Google Play Store o App Store de Apple. No
    es obligatorio tener tarjeta bancaria.`,
  },
  {
    summary: '¿Hay controles parentales en Star+?',
    description: `  Sí, con esta función podrás controlar el acceso a los contenidos a
    través de la clasificación por edad y cuidar a tu familia.`,
  },
];

const AccordionList = () => {
  const accordions = accordionData.map(({ summary, description }) => {
    return (
      <Accordion key={summary} summary={summary} description={description} />
    );
  });

  return (
    <section className="accordion">
      <h2 className="accordion__title">Preguntas frecuentes</h2>
      {accordions}
      <style jsx>
        {`
          .accordion {
            padding: 10vw 5vw;

            &__title {
              font-size: 28px;
              font-weight: bold;
              line-height: 38px;
              text-align: center;
            }

            @media (min-width: ${breakpoints.tabletWidth}) {
              padding: 5.6vw;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AccordionList;
