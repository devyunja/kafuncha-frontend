import { useState } from "react";
import { optionsValue } from "../../Const";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 900;
`;

const Select = styled.select`
  width: 70px;
  height: 25px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;

const Options = styled.option`
  appearance: none;
  border-bottom: 1px dashed rgb(170, 72, 72);
  background-color: red;
  padding: 5px 15px 5px;
`;

export default function CardHeader({ title }) {
  // globalState로 관리하면 좋을 듯
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
            <Options value={option.value} key={option.id}>
              {option.label}
            </Options>
          ))}
        </Select>
      </Header>
    </Container>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
