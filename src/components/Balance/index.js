import React, { useContext } from 'react';

import { BalanceWrapper, Text, Amount, Circle, Currency } from './styles';
import { AppContext } from '../../providers/context';

const Balance = ({ balance }) => {
  const { state } = useContext(AppContext);

  return (
    <BalanceWrapper>
      <Circle>
        <Text>Current balance</Text>
        <Amount>{balance.toLocaleString('en-US')} <Currency>{state.currency}</Currency></Amount>
      </Circle>
    </BalanceWrapper>
  )
}

export default Balance;