import React, { useState } from 'react';
import Grid from '../Grid';
import * as Style from './styles';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 10000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor');

      return;
    }

    if (amount < 1) {
      alert('O valor deve ser positivo!');

      return;
    }

    const transaction = {
      id: generateId(),
      desc,
      amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc('');
    setAmount('');
  };

  return (
    <>
      <Style.Container>
        <Style.InputContent>
          <Style.Label>Descrição</Style.Label>
          <Style.Input
            value={desc}
            onChange={({ target }) => setDesc(target.value)}
          />
        </Style.InputContent>
        <Style.InputContent>
          <Style.Label>Valor</Style.Label>
          <Style.Input
            value={amount}
            type="number"
            onChange={({ target }) => setAmount(target.value)}
          />
        </Style.InputContent>
        <Style.RadioGroup>
          <Style.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Style.Label htmlFor="rIncome">Entrada</Style.Label>
          <Style.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Style.Label htmlFor="rExpenses">Saída</Style.Label>
        </Style.RadioGroup>
        <Style.Button onClick={handleSave}>Adicionar</Style.Button>
      </Style.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
