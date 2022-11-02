import { device, theme } from '@styles/theme';
import styled, { css } from 'styled-components';
import { PlanProps } from '.';

const PLANS = {
  combo: css`
    background-image: url('/plans/promo.png');
    margin-bottom: 40px;
  `,
  monthly: css`
    background-image: url('/plans/month-year.png');
    margin: 40px 0;

    @media ${device.desktop} {
      margin-top: 0;
    }
  `,
  annually: css`
    background-image: url('/plans/month-year.png');
    margin: 40px 0;

    @media ${device.desktop} {
      margin-top: 0;
    }
  `,
};

export const PlansContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 -12px;
  padding-left: 0;

  @media ${device.tablet} {
    display: grid;
  }

  @media ${device.desktop} {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const PlanSection = styled.section`
  background-color: ${theme.colors.backgroundSecondary};
  padding: 10vw 5vw;

  @media ${device.desktop} {
    padding-top: 0;
  }
`;

export const Plan = styled.li<PlanProps>`
  width: 100%;
  height: auto;
  align-items: center;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  margin-top: 0;
  max-width: 380px;
  padding: 60px 40px 0;
  padding-bottom: 40px;
  text-align: center;
  ${(props) => props.plan && PLANS[props.plan]}
`;

export const PlanTitle = styled.h2`
  color: ${theme.colors.textSecondary};
  font-size: 15px;
  line-height: 25px;

  @media ${device.desktop} {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const PlanDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 15px;
  line-height: 25px;
  margin: 0 0 24px;
  text-align: center;

  @media ${device.desktop} {
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 28px;
  }
`;

export const PlansTitle = styled.h1`
  font-size: 26px;
  letter-spacing: normal;
  line-height: 36px;
  margin-bottom: 24px;
  margin-top: 0;
  text-align: center;

  @media ${device.desktop} {
    font-size: 44px;
    line-height: 54px;
    margin-bottom: 30px;
  }
`;

export const PlanPrice = styled.h3`
  font-size: 22px;
  line-height: 32px;
  margin-top: 24px;

  @media ${device.desktop} {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const PlansDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 21px;
  margin: 0 0 24px;
  text-align: center;
`;
