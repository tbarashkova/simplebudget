import { useState, useEffect, useCallback } from 'react';

import { STATUSES } from './constants';
import { getItems, addItem, deleteItem, updateItem } from './utils/indexdb'

export const useData = () => {
  const [state, setState] = useState({
    transactions: [],
    error: '',
    balance: 0,
    income: 0,
    expenses: 0,
    status: STATUSES.IDLE
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      status: STATUSES.PENDING
    }));

    getItems()
      .then((transactions) => {
        const income = transactions
          .filter((t) => t.value >= 0)
          .reduce((acc, t) => acc + t.value, 0);
        const expenses = transactions
          .filter((t) => t.value < 0)
          .reduce((acc, t) => acc + t.value, 0) * -1;

        setState((prevState) => ({
          ...prevState,
          transactions,
          income,
          expenses,
          balance: income - expenses,
          status: STATUSES.SUCCESS
        }));
      })
      .catch((e) => {
        setState((prevState) => ({
          ...prevState,
          transactions: [],
          income: 0,
          expenses: 0,
          balance: 0,
          status: STATUSES.ERROR,
          error: e
        }));
      });
  }, [setState]);


  const pushTransaction = useCallback((data) => {
    const transaction = {
      ...data,
      value: +data.value,
      id: Date.now(),
      month: new Date(data.date).toLocaleDateString('en-US', { month: 'long' }) //for showing income and expenses per month inside a chart of Statistics component
    }

    setState((state) => {
      // calculate the new income and expenses after adding the transaction
      const income = transaction.value >= 0 ? state.income + transaction.value : state.income;
      const expenses = transaction.value < 0 ? state.expenses + transaction.value * -1 : state.expenses;
      return {
        ...state,
        transactions: [transaction, ...state.transactions],
        income,
        expenses,
        balance: income - expenses
      }
    });

    addItem(transaction);
  }, [setState]);

  const onDelete = useCallback((id) => {
    setState((state) => {
      // calculate the new income and expenses after deleting the transaction
      const transaction = state.transactions.find((item) => item.id === id);
      const income = transaction.value >= 0 ? state.income - transaction.value : state.income;
      const expenses = transaction.value < 0 ? state.expenses - transaction.value * -1 : state.expenses;

      return {
        ...state,
        transactions: state.transactions.filter((item) => item.id !== id),
        income,
        expenses,
        balance: income - expenses
      }
    });

    deleteItem(id);
  }, [setState]);

  const onStarClick = useCallback((id) => {
    const item = state.transactions.find((i) => i.id === id);

    updateItem({
      ...item,
      isStarred: !item.isStarred
    }).then(() => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.map((item) => item.id !== id ? item : {
          ...item,
          isStarred: !item.isStarred
        })
      }))
    })

  }, [state, setState])

  const onTransactionSearch = useCallback((searchTerm) => {
    getItems()
      .then((transactions) => {
        let filteredTransactions = transactions;

        if (searchTerm && searchTerm.trim().length > 0) {
          const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
          filteredTransactions = transactions.filter(
            (transaction) =>
              transaction.date.startsWith(lowerCaseSearchTerm) ||
              transaction.value.toString().startsWith(lowerCaseSearchTerm) ||
              transaction.comment.toLowerCase().startsWith(lowerCaseSearchTerm)
          );
        }

        setState((state) => ({
          ...state,
          transactions: filteredTransactions
        }));
      })
      .catch((e) => {
        setState((state) => ({
          ...state,
          transactions: [],
          error: e
        }));
      });
  }, [setState]);


  const clearSearch = useCallback(() => {
    getItems().then((transactions) => {
      setState((state) => ({
        ...state,
        transactions
      }));
    });
  }, [setState]);


  return {
    ...state,
    pushTransaction,
    onDelete,
    onStarClick,
    onTransactionSearch,
    clearSearch
  }
}

