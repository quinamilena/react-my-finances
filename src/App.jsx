import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import Resume from './components/Resume/index';
import Form from './components/Form';
import ReactTooltip from 'react-tooltip';

const App = () => {
  const data = localStorage.getItem('transactions');
  const transactions = data ? JSON.parse(data) : [];

  const newTransactions = transactions.map((item) => {
    item.amountMask = Number(item.amount).toFixed(2);

    return item;
  });

  const [transactionsList, setTransactionsList] = useState(newTransactions);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(income);
    setExpense(expense);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <ReactTooltip />
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
