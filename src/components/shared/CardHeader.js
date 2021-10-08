import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  background-color: #4a69bd;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Select = styled.select`
  width: 60px;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;

export default function CardHeader({ title }) {
  const optionsValue = [
    { label: "일 별", value: "daily", color: "#00B8D9", id: 1 },
    { label: "주 별", value: "weekly", color: "#00875A", id: 2 },
    { label: "월 별", value: "monthly", color: "#FF8B00", id: 3 },
  ];

  // selectedOption은 globalState로 관리해서 데이터 받아오는 곳에서 props로 사용하면 좋을 것 같습니다.
  const [selectedOption, setSelectedOption] = useState([optionsValue[0].value]);

  function handleOnChage(e) {
    const currentValue = e.target.value;
    setSelectedOption(currentValue);
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Select onChange={handleOnChage}>
          {optionsValue.map((option, key) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </Select>
      </Header>
    </Container>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
