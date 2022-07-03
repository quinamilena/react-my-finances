import React from 'react';
import * as Style from './styles';

import * as XLSX from 'xlsx';

import { FaRegFileExcel, FaTrashRestore } from 'react-icons/fa';

const Actions = ({ itens, handleRemove }) => {
  const handleOnExport = () => {
    const newItens = itens.map((item) => {
      return {
        Descrição: item.desc,
        Valor: item.amountMask,
        Tipo: item.expense ? 'Saída' : 'Entrada',
      };
    });

    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(newItens);

    XLSX.utils.book_append_sheet(wb, ws, 'Página 1');
    XLSX.writeFile(wb, 'MF_Relatório.xlsx');
  };

  return (
    <Style.Div>
      <Style.Button onClick={handleOnExport}>
        <FaRegFileExcel /> Export
      </Style.Button>
      <Style.Button onClick={handleRemove} width={130} marginRight={5}>
        <FaTrashRestore />
        Apagar Todos
      </Style.Button>
    </Style.Div>
  );
};

export default Actions;
