import React from 'react';
import GridItem from '../Grid-Item/index';
import * as Style from './styles';

const Grid = ({ itens, setItens }) => {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem('transactions', JSON.stringify(newArray));
  };

  return (
    <Style.Table>
      <Style.Thead>
        <Style.Tr>
          <Style.Th width={40}>Descrição</Style.Th>
          <Style.Th width={40}>Valor</Style.Th>
          <Style.Th width={10} style={{ textAlign: 'center' }}>
            Tipo
          </Style.Th>
          <Style.Th width={10}></Style.Th>
        </Style.Tr>
      </Style.Thead>
      <Style.TBody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Style.TBody>
    </Style.Table>
  );
};

export default Grid;
