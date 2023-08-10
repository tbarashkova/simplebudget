import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: auto auto auto; 
  gap: 2em 0; 
  grid-template-areas: 
    "introduction"
    "features"
    "conclusion"; 
  padding: 1em;
`;

AboutWrapper.displayName = 'AboutWrapper';

export const Introduction = styled.div`
  grid-area: introduction;  
  
  h1 {
    font-weight: 500;
  }
`;

Introduction.displayName = 'Introduction';

export const Wrapper = styled.div`
  grid-area: conclusion;

  h3 {
      font-weight: 500;
  }
  p {
      font-weight: 100;
  }
`;
Wrapper.displayName = 'Wrapper';

export const FeaturesWrapper = styled.div`
  grid-area: features;

  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 2em;
  margin-bottom: 1em;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
  }
`;

FeaturesWrapper.displayName = 'FeaturesWrapper';

export const Feature = styled.div`
  padding: 2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, ${props => props.theme.muted} 0px 3px 7px -3px;
  border-radius: 8px;
  
    h3 {
      text-align: center;
      color: ${props => props.theme.accent};
      font-weight: 500;
    }

    p {
      font-weight: 100;
    }

    &:hover {
        cursor: pointer;
        border: none;
        transform: translateY(.5rem);
    }
`;

Feature.displayName = 'Feature';
