import { Link } from "react-router-dom";

export default function Intro(){
    return(
        <div>
            <h1>업로드 전 '인트로 화면'입니다.</h1>
            <Link to="/dashboard">대시보드 Go!!</Link>
        </div>
    );
}