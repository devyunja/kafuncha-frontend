import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`

const Select = styled.select`
  width: 60px;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`

const basicOptions = [
  { label: '일 별', value: 'daily' },
  { label: '주 별', value: 'weekly' },
  { label: '월 별', value: 'monthly' },
]

export default function CardHeader({
  title,
  selectOptions = basicOptions,
  changeSelectOption,
}) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Select onChange={changeSelectOption}>
          {selectOptions.map(option => (
            <option value={option.value} key={`${title}-${option.value}`}>
              {option.label}
            </option>
          ))}
        </Select>
      </Header>
    </Container>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  selectOptions: PropTypes.array,
}
