import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  padding: 1em;
`;

SearchBarWrapper.displayName = 'SearchBarWrapper';

export const Input = styled.input`
  flex: 2;
  padding: .8em;
  border: 1px solid ${props => props.theme.muted};
  border-radius: 8px;
  background: ${props => props.theme.background}; 
  color:  ${props => props.theme.muted};
  font-family: 'Instrument Sans', sans-serif;
    
    &:focus {
      border: none;
      outline: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, ${props => props.theme.muted} 0px 3px 7px -3px;
      font-family: 'Instrument Sans', sans-serif;
    }
    
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.muted};
      opacity: 1; /* Firefox */
    }

    ::-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.muted};
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.muted};
    }

    &:hover {
      cursor: pointer;
      border: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, ${props => props.theme.muted} 0px 3px 7px -3px;
    }
`;

Input.displayName = 'Input';

export const Button = styled.button`
  flex: 1;
  padding: .8rem;
  border: 1px solid ${props => props.theme.muted};
  border-radius: 8px;
  background: ${props => props.theme.background}; 
  margin-left: .1rem;
  color: ${props => props.theme.muted};
  font-family: 'Instrument Sans', sans-serif;

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