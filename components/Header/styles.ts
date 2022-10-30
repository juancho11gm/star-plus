import { device, theme } from '@styles/theme';
import { zIndexMap } from '@styles/zIndex';
import styled from 'styled-components';


export const NavbarContent = styled.nav`
  background-color: ${theme.colors.backgroundPrimary};
  width: 100%;
  height: 52px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 0 12px 0 20px;
  position: fixed;
  text-align: center;
  z-index: ${zIndexMap.get('header')};
`;

export const NavbarButton = styled.button`
  width: auto;
  height: 40px;
  background-color: ${theme.colors.headerLogin};
  border: 1px solid ${theme.colors.headerLogin};
  border-radius: 4px;
  color: ${theme.colors.textPrimary};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  margin: 5px;
  max-width: none;
  padding: 0 8px;
  pointer-events: auto;
  text-decoration: none;

  @media ${device.tablet} { 
    font-size: 15px;
    text-transform: uppercase;
  }

  @media ${device.desktop} { 
    height: 50px;
    font-size: 18px;
    padding: 8px 16px;
    text-transform: uppercase;
  }
`;