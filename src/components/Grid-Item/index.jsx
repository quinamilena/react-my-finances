import React from 'react';
import * as Style from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
  return (
    <Style.Tr>
      <Style.Td>{item.desc}</Style.Td>
      <Style.Td>{item.amountMask}</Style.Td>
      <Style.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown
            color="red"
            data-tip="Saída"
            data-place="right"
          />
        ) : (
          <FaRegArrowAltCircleUp
            color="green"
            data-tip="Entrada"
            data-place="right"
          />
        )}
      </Style.Td>
      <Style.Td alignCenter>
        <FaTrash
          onClick={() => onDelete(item.id)}
          data-tip="Excluir"
          data-place="right"
        />
      </Style.Td>
    </Style.Tr>
  );
};

export default GridItem;
