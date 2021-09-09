import { useEffect, useState } from 'react';
import { chatApi } from '../../../api';

export default function ChatGraph() {
    const [ datas, setDatas ] = useState([]);
    const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const data = await chatApi.get("daily-champion-rank/02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv");
                setDatas(data);
            } catch(e) {
                console.log(e);
            } finally {
            setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div>Graph</div>
    )
}