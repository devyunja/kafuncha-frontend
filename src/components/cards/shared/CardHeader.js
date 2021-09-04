import { useHistory } from 'react-router-dom';

export default function CardHeader() {
    const history = useHistory();

    function handleChange(e) {history.push(`/${e.target.value}`)
    }
        

    return (
        <header className="card-header">
            <h3>채팅 랭킹</h3>
            <select onChange={ handleChange } >
                <option value="daily-champion">일 별</option>
                <option value="weekly-champion">주 별</option>
                <option value="monthly-champion">월 별</option>
            </select>
        </header>
    )
}