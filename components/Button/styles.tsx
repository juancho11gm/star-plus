import styled, { css } from 'styled-components';
import { device, theme } from '@styles/theme';
import { ButtonProps } from './index';

const STYLES = {
  primary: css`
    background: ${theme.colors.headerLogin};
    color: ${theme.colors.textPrimary};
  `,
  secondary: css`
    background: ${theme.colors.redOrangeGradient};
    color: ${theme.colors.textPrimary};
  `,
  tertiary: css`
    background: ${theme.colors.buttonPrimary};
    color: ${theme.colors.textPrimary};
  `,
};

const SIZES = {
  small: css`
    font-size: 13px;
  `,
  medium: css`
    font-size: 15px;
  `,
  large: css`
    font-size: 17px;
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  width: auto;
  align-items: center;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  letter-spacing: 0;
  line-height: 15px;
  margin: 5px;
  max-width: none;
  padding: 9px 12px;
  text-decoration: none;
  transition: opacity 1s;
  ${(props) => props.size && SIZES[props.size]}
  ${(props) => props.styles && STYLES[props.styles]}

  :disabled {
    cursor: auto;
  }
`;
