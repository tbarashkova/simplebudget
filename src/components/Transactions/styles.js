import styled from 'styled-components';

export const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
`;
TransactionsWrapper.displayName = 'TransactionsWrapper';

export const RenderDateWrapper = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: .8rem;
  padding: .5rem;

  @media screen and (min-width: 576px) {
   font-size: .9rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
   
`;
RenderDateWrapper.displayName = 'RenderDateWrapper';
