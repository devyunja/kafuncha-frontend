import 'antd/dist/antd.css'
import './dashboard.css'

import { Layout } from 'antd'

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalState } from '../shared/hook'

import { PATHS } from '../Routes'

import { Sidebar } from '../components/shared'
import {
  ChatRank,
  MentionRank,
  MutedRank,
  KeywordRank,
} from '../components/card'

const { Header, Sider, Content } = Layout

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
  }, [])

  return (
    <Layout>
      <Header id="header">
        <span className="title">Kafuncha</span>
      </Header>
      <Layout hasSider>
        <Sider id="sidebar" width={250}>
          <Sidebar />
        </Sider>
        <Content id="ranks">
          <ChatRank />
          <MentionRank />
          <MutedRank />
          <KeywordRank />
        </Content>
      </Layout>
    </Layout>
  )
}
