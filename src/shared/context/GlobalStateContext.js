import * as React from 'react'

export const GlobalStateContext = React.createContext(null)

export function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = React.useState({})

  function setState(state) {
    const newState = { ...globalState, ...state }

    if (newState.fileName) {
      window.localStorage.setItem('fileName', newState.fileName)
    }

    setGlobalState(prevState => newState)
  }

  return (
    <GlobalStateContext.Provider value={[globalState, setState]}>
      {children}
    </GlobalStateContext.Provider>
  )
}
