import styled from 'styled-components';

const Div = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  border: 1px solid #009688;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
  color: #009688;
  font-size: 14px;
  font-weight: bold;
  width: ${(props) => (props.width ? `${props.width}px` : '85px')};
  height: 45px;

  transition: ease-out 0.3s;
  outline: none;
  position: relative;
  z-index: 1;

  margin-right: ${(props) =>
    props.marginRight ? `${props.marginRight}px` : 0};

  & svg {
    margin: 4px 4px 0 0;
  }

  &:before {
    transition: 0.5 all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #e0f2f1;
    border-radius: 8px;
  }

  &:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export { Div, Button };
