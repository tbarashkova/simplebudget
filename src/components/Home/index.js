import { HomeWrapper } from './styles'

import Balance from '../Balance';
import Transactions from '../Transactions';
import ErrorBoundary from '../ErrorBoundary';
import { ChangeBalance } from '../ChangeBalance';
import SearchBar from '../SearchBar';

import { STATUSES } from '../../constants';
import { useData } from '../../hooks';


const Home = () => {

  const { balance, transactions, status, pushTransaction, onDelete, onStarClick, onTransactionSearch, clearSearch } = useData();

  const onChange = (transaction) => {
    pushTransaction(transaction);
  }

  return (
    <ErrorBoundary>
      <HomeWrapper>
        <Balance balance={balance} />
        <SearchBar onTransactionSearch={onTransactionSearch} clearSearch={clearSearch} />
        <ChangeBalance onChange={onChange} />

        {status === STATUSES.PENDING ? (
          <div>Loading...</div>
        ) : null}

        {status === STATUSES.SUCCESS ? (
          <Transactions
            transactions={transactions}
            onDelete={onDelete}
            onStarClick={onStarClick}
            onTransactionSearch={onTransactionSearch} />
        ) : null}

      </HomeWrapper>
    </ErrorBoundary>
  )
}

export default Home;