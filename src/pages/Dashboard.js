import { Link } from 'react-router-dom';

export default function Dashboard(){
    return(
        <div>
            <h1>업로드 후 '대시보드 화면'입니다.</h1>
            <Link to="/">인트로 Go!!</Link>
        </div>
    );
}