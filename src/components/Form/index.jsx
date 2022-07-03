import React, { useState } from 'react';
import Grid from '../Grid';
import Actions from '../Actions';
import * as Style from './styles';
import { FaPlus } from 'react-icons/fa';

const Form = ({
  handleAdd,
  transactionsList,
  setTransactionsList,
  handleRemove,
}) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(0);
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

    const amountMask = Number(amount).toFixed(2);

    const transaction = {
      id: generateId(),
      desc,
      amount,
      amountMask,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc('');
    setAmount(0);
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
        <Style.Button onClick={handleSave}>
          <FaPlus />
          Adicionar
        </Style.Button>
      </Style.Container>
      <Actions itens={transactionsList} handleRemove={handleRemove} />
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
