import styled from 'styled-components';

const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #e0f2f1;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #344b47;
`;

const Input = styled.input`
  outline: none;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #e0f2f1;
`;

const RadioGroup = styled.div`
  display: flex;
  align-content: center;

  input {
    margin-left: 20px;
    accent-color: #009688;
    margin-top: 0;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #e0f2f1;
  background-color: #009688;
  font-size: 14px;
  font-weight: bold;

  & svg {
    margin: 4px 4px 0 0;
  }
`;

export { Container, InputContent, Label, Input, RadioGroup, Button };
