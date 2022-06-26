import styled from 'styled-components';

const Table = styled.table`
  width: 98%;
  background-color: #e0f2f1;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 5px;
  max-width: 1120px;
  margin: 20px auto;
  color: #344b47;
  border-spacing: 0;
`;

const Thead = styled.thead``;

const TBody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width + '%' : 'auto')};
`;

export { Table, Thead, TBody, Tr, Th };
