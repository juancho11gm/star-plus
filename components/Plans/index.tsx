import { Button } from '@components/Button';
import {
  Plan,
  PlanDescription,
  PlanPrice,
  PlansContainer,
  PlansDescription,
  PlanSection,
  PlansTitle,
  PlanTitle,
} from './styles';

export interface PlanProps {
  plan: 'combo' | 'monthly' | 'annually';
}

const Plans = () => {
  return (
    <PlanSection>
      <PlansTitle>Elige tu plan</PlansTitle>
      <PlansContainer>
        <Plan plan="combo">
          <PlanTitle>ADQUIERE DISNEY+ Y STAR+</PlanTitle>
          <PlanPrice>COP 38.900/mes*</PlanPrice>
          <PlanDescription>
            Ahorra contratando los dos servicios juntos con esta oferta única.
            Disfruta Disney+ y Star+ por un precio único.
          </PlanDescription>
          <Button styles="tertiary" style={{ width: '100%', height: '50px' }}>
            Suscríbete a Combo+
          </Button>
        </Plan>
        <Plan plan="monthly">
          <PlanTitle>STAR+ MENSUAL</PlanTitle>
          <PlanPrice>COP 31.900/mes*</PlanPrice>
          <PlanDescription>
            Contrata el plan mensual de Star+ y encuentra lo que más te gusta:
            series, películas y eventos deportivos de ESPN.
          </PlanDescription>
          <Button styles="primary" style={{ width: '100%', height: '50px' }}>
            Suscríbete ahora
          </Button>
        </Plan>
        <Plan plan="annually">
          <PlanTitle>STAR+ ANUAL</PlanTitle>
          <PlanPrice>COP 319.900/año*</PlanPrice>
          <PlanDescription>
            Disfruta un año de Star+ por un precio promocional. Todo el
            entretenimiento y tus deportes favoritos, sin límites.
          </PlanDescription>
          <Button styles="secondary" style={{ width: '100%', height: '50px' }}>
            Suscríbete ahora
          </Button>
        </Plan>
      </PlansContainer>
      <PlansDescription>
        * El precio podría variar en otras plataformas. Podrían aplicar cargos
        de terceros no asociados a Disney.
      </PlansDescription>
    </PlanSection>
  );
};

export { Plans };
