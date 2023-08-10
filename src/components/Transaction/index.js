import PropTypes from 'prop-types';
import { useContext, useCallback, memo } from 'react';

import { AppContext } from '../../providers/context';
import { TransactionWrapper, TransactionDate, Value, Comment, Icon, Button } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Transaction = memo(({ transaction: { id, value, date, comment, isStarred }, onDelete, onStarClick }) => {
  const { state } = useContext(AppContext);

  const deleteItem = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <TransactionWrapper value={value}>
      <Icon onClick={() => onStarClick(id)}>
        {isStarred ?
          <FontAwesomeIcon icon={faStar} /> :
          <FontAwesomeIcon icon={faStarRegular} />
        }
      </Icon>

      <Value>{value !== 0 ? value.toFixed(2) : '0.00'} <span>{state.currency}</span></Value>
      <Comment>{comment}</Comment>
      <TransactionDate>{date}</TransactionDate>
      <Button value={value} onClick={deleteItem}>Delete</Button>
    </TransactionWrapper>
  );
})

Transaction.propTypes = {
  transaction: PropTypes.shape({
    comment: PropTypes.string,
    value: PropTypes.number
  }),
  onStarClick: PropTypes.func
}

Transaction.defaultProps = {
  transaction: {
    comment: '',
    value: 0
  }
}

export default Transaction