import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

  function App() {
      // const [history, setHistory] = useState([]);

      // useEffect(() => {
      //   fetchChatHistory();
      // }, []);
    
      // const fetchChatHistory = async () => {
      //   const res = await axios('https://programming.coffee');
      //   const daily = await res.get('/daily-champion/02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv')
      //   .then(res => console.log(res))
      // };

      // 02193f7c-dad9-479c-ab6f-ae919f27c9de-1411779081052338678.csv - {filename}
    return(
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    );
}

export default App;