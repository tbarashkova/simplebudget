import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  min-height: calc(100vh - 10em);
  padding: 1em;

  p {
    font-size: 1.3rem;
    font-weight: 500;
    padding-right: 1em;
  }

  select {
    background: ${props => props.theme.background};
    color: ${props => props.theme.textPrimary};
    outline: none;
    border: 1px solid ${props => props.theme.muted};
    border-radius: 8px;
    padding: .5em;
    font-family: inherit;
    font-size: inherit;
    text-align: center;
    
    &:hover {
        cursor: pointer;
        border: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, ${props => props.theme.muted} 0px 3px 7px -3px;
    }

    &:active {
    transform: translateY(.1rem);
    }
  }
`;
SettingsWrapper.displayName = 'SettingsWrapper';