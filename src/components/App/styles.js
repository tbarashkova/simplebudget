import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.background};
    transition: all .5s;
  }
  
  body {
    min-height: 100vh;
    width: 90%;
    min-width: 280px;
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'Instrument Sans', sans-serif;
    font-size: .8rem;
    transition: all .5s;

    @media screen and (min-width: 576px) {
     font-size: .9rem;
     width: 80%;
    }

    @media screen and (min-width: 768px) {
      font-size: 1rem;
      width: 70%;
    }
  }
`;

GlobalStyle.displayName = 'GlobalStyle';

export const Wrapper = styled.div`
  padding: .5rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.textPrimary};
  transition: all .5s;
`;

Wrapper.displayName = 'Wrapper';

