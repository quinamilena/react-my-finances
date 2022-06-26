import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0f2f1;
  border-radius: 8px;
  padding: 5px 15px;
  width: 30%;
  color: #344b47;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const HeaderTitle = styled.p`
  font-size: 20px;
`;

const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export { Container, Header, HeaderTitle, Total };
