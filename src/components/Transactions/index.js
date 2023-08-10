import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import { TransactionsWrapper, RenderDateWrapper } from './styles';
import Transaction from '../Transaction';

const Transactions = memo(({ transactions = [], onDelete, onStarClick, onTransactionSearch }) => {
  const currentDate = useRef('');

  return transactions.map((transaction, index) => {
    const { id, date } = transaction;
    const transactionDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let renderDate = null;
    if (transactionDate !== currentDate.current) {
      renderDate = transactionDate;
      currentDate.current = transactionDate;
    }

    return (
      <TransactionsWrapper key={id}>
        {renderDate && <RenderDateWrapper>{renderDate}</RenderDateWrapper>}
        <Transaction
          transaction={transaction}
          onDelete={onDelete}
          onStarClick={onStarClick}
          onTransactionSearch={onTransactionSearch}
        />
      </TransactionsWrapper>
    );
  });
})


Transactions.propTypes = {
  transactions: PropTypes.array,
  onDelete: PropTypes.func,
  onStarClick: PropTypes.func,
  onTransactionSearch: PropTypes.func,
};

export default Transactions;
