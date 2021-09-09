import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-around;
    width:100%;
`;

export default function ChatHeader() {
    const history = useHistory();

    function handleChange(e) {
        history.push(`/${e.target.value}`)
    }
        
    return (
        <Header>
            <h3>채팅 랭킹</h3>
            <select onChange={ handleChange } >
                <option value="daily-champion">일 별</option>
                <option value="weekly-champion">주 별</option>
                <option value="monthly-champion">월 별</option>
            </select>
        </Header>
    )
}