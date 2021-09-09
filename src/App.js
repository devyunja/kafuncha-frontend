import { BrowserRouter } from 'react-router-dom'
import { GlobalStateProvider } from './shared/context/GlobalStateContext'
import Routes from './Routes'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Routes />
      </GlobalStateProvider>
    </BrowserRouter>
  )
}
