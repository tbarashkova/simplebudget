import styled from 'styled-components';

export const TransactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;

  background: ${({ value, theme }) => value < 0 ? theme.secondaryBg : theme.background};
  border: 1px solid ${props => props.theme.secondaryBg};
  border-radius: 8px;
  padding: .8rem;
`;
TransactionWrapper.displayName = 'TransactionWrapper'

export const TransactionDate = styled.div`
  flex: 1;
  text-align: center;
`;
TransactionDate.displayName = 'TransactionDate';

export const Value = styled.div`
  flex: 1;
  display: flex;
  gap: 1%;
  align-items: baseline;
  justify-content: center;

  font-weight: 500;

    span {
      font-size: .5rem;
      font-weight: normal;
      color: ${props => props.theme.muted};

      @media screen and (min-width: 576px) {
        font-size: .6rem;
      }

      @media screen and (min-width: 768px) {
        font-size: .7rem;
        width: 70%;
      }
    }
    
`;
Value.displayName = 'Value';

export const Comment = styled.div`
  flex: 2;
  justify-content: center;
`;
Comment.displayName = 'Comment';

export const Icon = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 20px;
  color: ${props => props.theme.accent};
`;
Icon.displayName = 'Icon';

export const Button = styled.button`
  flex: 1;
  outline: none;
  border: none;
  border-right: 1px solid ${props => props.theme.secondaryAccent};
  border-left: 1px solid ${props => props.theme.secondaryAccent};
  border-radius: 8px;
  background: ${({ value, theme }) => value < 0 ? 'rgba(219, 219, 219, 0)' : theme.background};
  background-color: none;
  padding: .5em;
  font: inherit;
  text-align: center;
  color: ${props => props.theme.textPrimary};
    
  &:hover {
    cursor: pointer;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, ${props => props.theme.muted} 0px 3px 7px -3px;
  }

  &:active {
    transform: translateY(.1rem);
  }
`;
Button.displayName = 'Button';