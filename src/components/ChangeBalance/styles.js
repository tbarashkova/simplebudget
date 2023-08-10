import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  font-size: 42px;
  color: lightgrey;
  outline: none;
  background-color:  ${props => props.theme.background};
  border-radius: 50%;
  border: 2px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  z-index: 2;
    
  &:hover {
    cursor: pointer;
  }
`;
Button.displayName = 'Button';