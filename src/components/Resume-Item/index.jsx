import React from 'react';
import * as Style from './styles';

const ResumeItem = ({ Title, Icon, value, Color }) => {
  return (
    <Style.Container>
      <Style.Header>
        <Style.HeaderTitle>{Title}</Style.HeaderTitle>
        <Icon color={Color} />
      </Style.Header>
      <Style.Total>{value}</Style.Total>
    </Style.Container>
  );
};

export default ResumeItem;
