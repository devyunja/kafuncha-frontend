import * as React from 'react'

export const GlobalStateContext = React.createContext(null)

export function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = React.useState({})

  return (
    <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalStateContext.Provider>
  )
}
