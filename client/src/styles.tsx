import { normalize } from "polished";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
`;

export const Navigation = styled.nav`
  padding: 1rem;
  background-color: salmon;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.div`
  font-size: 2rem;
`;

export const Main = styled.main`
  padding: 3rem;
`;
