import { device, theme } from '@styles/theme';
import styled from 'styled-components';

export const HeroContainer = styled.section`
  background-color: ${theme.colors.backgroundSecondary};
  background-image: url('/hero/hero-sm.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  position: relative;
  text-align: center;
  color: ${theme.colors.textPrimary};

  @media ${device.tablet} { 
    background-image: url('/hero/hero-md.jpg');
  }
  
  @media ${device.desktop} { 
    background-image: url('/hero/hero-lg.jpg');
  }
`;

export const HeroContent = styled.div`
  width: 100vw;
  min-height: 70vh;
  padding: 45vw 5vw 20vw;
  padding-top: 46vw;

  @media ${device.tablet} { 
    padding: 28vw 5vw 10vw;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 16px;

  @media (min-width: ${device.tablet}) {
    font-size: 22px;
  }

  @media (min-width: ${device.desktop}) {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 24px;
  }
`;

export const HeroButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: ${device.tablet}) {
    height: 50px;
    font-size: 15px;
    line-height: 15px;
  }

  @media (min-width: ${device.desktop}) {
    height: 68px;
    margin-bottom: 20px;
  }
`;

export const HeroHint = styled.button`
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

  @media (min-width: ${device.desktop}) {
    top: 85%;
  }

  &:hover {
    fill: ${theme.colors.textPrimary};
  }
`;

export const HeroLink = styled.a`
  color: ${theme.colors.textPrimary};
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 26px;
  margin: 0 0 24px;

  @media (min-width: ${device.tablet}) {
    font-size: 14px;
  }

  @media (min-width: ${device.desktop}) {
    font-size: 16px;
    line-height: 26px;
  }
`;

