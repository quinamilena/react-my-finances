import React from 'react';
import ResumeItem from '../Resume-Item';
import * as Style from './styles';

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const Resume = ({ income, expense, total }) => {
  return (
    <Style.Container>
      <ResumeItem
        Title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        Color={'green'}
        value={'R$ ' + income}
      />
      <ResumeItem
        Title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        Color={'red'}
        value={'R$ ' + expense}
      />
      <ResumeItem
        Title="Total"
        Icon={FaDollarSign}
        value={'R$ ' + total}
        Color={''}
      />
    </Style.Container>
  );
};

export default Resume;
