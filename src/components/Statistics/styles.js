import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;

  min-height: calc(100vh - 10em);
  padding: 1em;
`;
StatisticsWrapper.displayName = 'StatisticsWrapper';

export const DataWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  border: 1px solid ${props => props.theme.secondaryBg};
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 1em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
DataWrapper.displayName = 'DataWrapper';

export const ColumnWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: baseline;

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
ColumnWrapper.displayName = 'ColumnWrapper';

export const SelectColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 100%;

  @media screen and (min-width: 768px) {
    min-width: inherit;
    flex: 1;
  }

  select {
    min-width: 100%;
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
    transform: translateY(0.1rem);
    }
  }
`;
SelectColumnWrapper.displayName = 'SelectColumnWrapper';

export const ChartWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  border: 1px solid ${props => props.theme.secondaryBg};
  border-radius: 8px;
  margin-bottom: auto;

  canvas {
    height: 95%;
  }
`;
ChartWrapper.displayName = 'ChartWrapper';

export const Data = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 2%;
  
  padding-bottom: 1em;
  padding-right: 1em;
  flex-wrap: nowrap;
`;
Data.displayName = 'Data';

export const Text = styled.span`
  margin: 0;
  white-space: nowrap;
`;
Text.displayName = 'Text';

export const Currency = styled.span`
  font-size: .6rem;
    
  @media screen and (min-width: 576px) {
    font-size: .7rem;
  }

  @media screen and (min-width: 768px) {
    font-size: .8rem;
  }
`;
Currency.displayName = 'Currency';

export const Income = styled.span`
  color: ${props => props.theme.accent};
  padding-left: .5em;
  font-size: 1.3rem;
`;
Income.displayName = 'Income';

export const Expenses = styled.span`
  color: ${props => props.theme.secondaryAccent};
  padding-left: .5em;
  font-size: 1.3rem;
`;
Expenses.displayName = 'Expenses';