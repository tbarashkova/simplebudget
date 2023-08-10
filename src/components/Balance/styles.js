import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
BalanceWrapper.displayName = 'BalanceWrapper';

export const Circle = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%; 
    padding: 5px; 
    background: linear-gradient(to right, ${props => props.theme.accent} 30%, ${props => props.theme.secondaryAccent}, ${props => props.theme.outline});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
Circle.displayName = 'Circle';

export const Text = styled.p`
  margin-bottom: 0.1em;
  text-align: center;
  color: ${props => props.theme.muted};
`;
Text.displayName = 'Text';

export const Amount = styled.h1`
  margin-top: 0.1em;
  text-align: center;
  font-weight: 500;
`;
Amount.displayName = 'Amount';

export const Currency = styled.span`
  margin-left: 0;
  font-size: 1rem;
  color: ${props => props.theme.muted};
`;
Currency.displayName = 'Currency';