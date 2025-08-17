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
      <Style.Td style={{ textAlign: 'center' }}>
        {item.expense ? (
          <FaRegArrowAltCircleDown
            color="red"
            data-tooltip-id="tooltip-grid"
            data-tooltip-content="Saída"
          />
        ) : (
          <FaRegArrowAltCircleUp
            color="green"
            data-tooltip-id="tooltip-grid"
            data-tooltip-content="Entrada"
          />
        )}
      </Style.Td>
      <Style.Td style={{ textAlign: 'center' }}>
        <FaTrash
          onClick={() => onDelete(item.id)}
          data-tooltip-id="tooltip-grid"
          data-tooltip-content="Excluir"
        />
      </Style.Td>
    </Style.Tr>
  );
};

export default GridItem;
