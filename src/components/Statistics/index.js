import React, { useState, useEffect, useContext } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { StatisticsWrapper, DataWrapper, ColumnWrapper, SelectColumnWrapper, ChartWrapper, Data, Currency, Text, Income, Expenses } from './styles';
import { AppContext } from "../../providers/context";
import { getTheme } from "../../providers/themes/getTheme";
import { useData } from '../../hooks'


const Statistics = () => {
  const { state } = useContext(AppContext);
  let theme = getTheme(state.themeName);

  const { transactions, income, expenses } = useData();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const [incomePerYear, setIncomePerYear] = useState({});

  const [expensesPerYear, setExpensesPerYear] = useState({});


  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  useEffect(() => {
    const calculateIncomeAndExpenses = () => {
      const yearTransactions = transactions.filter(
        (transaction) => new Date(transaction.date).getFullYear() === selectedYear
      );

      const income = yearTransactions.reduce(
        (sum, transaction) => (transaction.value >= 0 ? sum + transaction.value : sum),
        0
      );

      const expenses = yearTransactions.reduce(
        (sum, transaction) => (transaction.value < 0 ? sum + Math.abs(transaction.value) : sum),
        0
      );

      setIncomePerYear({ [selectedYear]: income });
      setExpensesPerYear({ [selectedYear]: expenses });
    };

    calculateIncomeAndExpenses();
  }, [transactions, selectedYear]);


  let transactionsPerMonth = {};

  const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // calculates transactions per month for the selected year

  function getTransactionsPerMonth(transactions, selectedYear, monthlyLabels) {
    const transactionsPerMonth = {
      expenses: Array(monthlyLabels.length).fill(0),
      income: Array(monthlyLabels.length).fill(0),
    };

    transactions.forEach((transaction) => {
      const year = new Date(transaction.date).getFullYear();
      if (year === selectedYear) {
        const monthIndex = new Date(transaction.date).getMonth();
        if (transaction.value < 0) {
          transactionsPerMonth.expenses[monthIndex] += Math.abs(transaction.value);
        } else {
          transactionsPerMonth.income[monthIndex] += transaction.value;
        }
      }
    });

    return transactionsPerMonth;
  }

  transactionsPerMonth = getTransactionsPerMonth(transactions, selectedYear, monthlyLabels);

  const setupChart = () => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Statistics',
        },
      },
    };

    const data = {
      labels: monthlyLabels,
      datasets: [
        {
          label: 'Expenses',
          data: transactionsPerMonth.expenses,
          backgroundColor: theme.secondaryAccent
        },
        {
          label: 'Income',
          data: transactionsPerMonth.income,
          backgroundColor: theme.accent
        },
      ],
    };

    return <Bar options={options} data={data} />;
  };

  return (
    <StatisticsWrapper>
      <DataWrapper>
        <ColumnWrapper>
          <Data>
            <Text>Total income:</Text>
            <Income>{income.toLocaleString('en-US')}</Income>
            <Currency>{state.currency}</Currency>
          </Data>
          <Data>
            <Text>Total expenses:</Text>
            <Expenses>{expenses.toLocaleString('en-US')}</Expenses>
            <Currency>{state.currency}</Currency>
          </Data>
        </ColumnWrapper>

        {
          Object.keys(incomePerYear).map((year) => (
            <ColumnWrapper key={year}>
              <Data>
                <Text>Income ({year}):</Text>
                <Income>{incomePerYear[year].toLocaleString('en-US')}</Income>
                <Currency>{state.currency}</Currency>
              </Data>
              <Data>
                <Text>Expenses ({year}):</Text>
                <Expenses>{expensesPerYear[year].toLocaleString('en-US')}</Expenses>
                <Currency>{state.currency}</Currency>
              </Data>
            </ColumnWrapper>
          ))
        }

        <SelectColumnWrapper>
          <select value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </SelectColumnWrapper>
      </DataWrapper>

      <ChartWrapper>
        {setupChart()}
      </ChartWrapper>
    </StatisticsWrapper >
  );
};

export default Statistics;