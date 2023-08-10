import styled from 'styled-components';

export const FormWrapper = styled.form` 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 11px 0px; 
  grid-template-areas: 
    "value date"
    "comment comment"
    "button button"; 

  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  padding: .5em;
  font-family: "Instrument Sans", sans-serif;
`;
FormWrapper.displayName = 'FormWrapper';


export const Value = styled.input`
  grid-area: value;
  min-width: 50%;
  
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  outline: none;
  padding: .5em 1em;
  color: ${props => props.theme.textPrimary};
  font-family: inherit;

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
`;
Value.displayName = 'Value';

export const DateInput = styled(Value)`
  grid-area: date;
  min-width: 50%;
`;
DateInput.displayName = 'Date';

export const Comment = styled.textarea`
grid-area: comment;

background-color: ${props => props.theme.background};
box-sizing: border-box;
border: 1px solid ${props => props.theme.border};
border-radius: 8px;
outline: none;
padding: .5em 1em;
color: ${props => props.theme.textPrimary};
font-family: inherit;

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

`;
Comment.displayName = 'Comment';

export const Button = styled.button`
grid-area: button;

background-color: ${props => props.theme.accent};
border: 1px solid ${props => props.theme.border};
border-radius: 8px;
outline: none;
box-sizing: border-box;
color: ${props => props.theme.textPrimary};
font-family: inherit;
font-size: inherit;

&:hover {
  cursor: pointer;
}
`;
Button.displayName = 'Button';