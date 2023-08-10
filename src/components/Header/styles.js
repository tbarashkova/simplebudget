import styled from 'styled-components';

export const Nav = styled.nav`
  ul { 
    display: flex;
    list-style: none;
    padding: 0 0.5em; 

    li {
      display: flex;
      align-items: baseline;
      margin-right: 1.5em;
      text-align: center;
        
      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }

      a {
        color: ${({ theme }) => theme.textPrimary};
        text-decoration: none;
        text-align: center;
        padding: 1rem 0;
          
        &.active {
          color: ${({ theme }) => theme.accent};
          border-bottom: 2px solid ${({ theme }) => theme.accent};
        }
      }
    }
  }
`;

Nav.displayName = 'Nav';
