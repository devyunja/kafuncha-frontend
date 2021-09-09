import { useContext } from 'react'
import { GlobalStateContext } from '../context/GlobalStateContext'

export function useGlobalState() {
  const [globalState, setGlobalState] = useContext(GlobalStateContext)
  return [globalState, setGlobalState]
}
