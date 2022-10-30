import { useContext, useEffect } from 'react';
import UIContext from '@context/UIContext';
import useIntersection from '@hooks/useIntersection';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { DownArrow } from '@components/Icons/DownArrow';
import { StarImage } from '@components/Icons/StarImage';
import { Button } from '@components/Button';
import { device } from '@styles/theme';
import {
  HeroButtonContainer,
  HeroContainer,
  HeroContent,
  HeroHint,
  HeroTitle,
} from './styles';

const Hero = () => {
  const UIContextData = useContext(UIContext);
  const { setIsHeaderVisible } = UIContextData || {};
  const { isNearScreen, fromRef } = useIntersection({
    distance: '0px',
    once: false,
  });
  const isTablet = useMediaQuery(device.tablet);

  useEffect(() => {
    // The navbar for register must be hidden when the hero is visible
    setIsHeaderVisible(!isNearScreen);
  }, [isNearScreen, setIsHeaderVisible]);

  return (
    <HeroContainer ref={fromRef}>
      <HeroContent>
        <StarImage width={160} height={60} style={{ marginBottom: '3vw' }} />
        <HeroTitle>Series, películas y los deportes que te gustan.</HeroTitle>
        <HeroButtonContainer>
          <Button
            styles="tertiary"
            size={isTablet ? 'large' : 'medium'}
            style={{
              width: '100%',
              height: '50px',
              maxWidth: '540px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Ver películas
          </Button>
        </HeroButtonContainer>
      </HeroContent>
      <HeroHint aria-label="Down Arrow">
        <DownArrow />
      </HeroHint>
    </HeroContainer>
  );
};

export { Hero };
