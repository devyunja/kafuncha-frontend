import './dashboard.css'

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalState } from '../shared/hook'

import { PATHS } from '../Routes'

import { Header, Sidebar } from '../components/shared'
import {
  ChatRank,
  MentionRank,
  MutedRank,
  KeywordRank,
} from '../components/card'

export default function Dashboard() {
  const history = useHistory()
  const [globalState, setGlobalState] = useGlobalState()

  useEffect(() => {
    const fileNameFromStorage = window.localStorage.getItem('fileName')

    if (!globalState.fileName && !fileNameFromStorage) {
      history.push(PATHS.intro)
      return
    }

    if (!globalState.fileName && fileNameFromStorage) {
      setGlobalState({ fileName: fileNameFromStorage })
      return
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div id="wrapper">
      <Header />
      <div id="content-wrapper">
        {/* <Sidebar /> */}
        <div id="ranks">
          <ChatRank />
          {/* <MentionRank />
          <MutedRank />
          <KeywordRank /> */}
        </div>
      </div>
    </div>
  )
}
