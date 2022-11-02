import { device, theme } from '@styles/theme';
import { zIndexMap } from '@styles/zIndex';
import styled from 'styled-components';


export const NavbarContent = styled.nav`
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