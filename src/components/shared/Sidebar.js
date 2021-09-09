import './common.css'

import { getDailyChatCount } from '../../shared/service'
import { useEffect } from 'react'

export function Sidebar() {
  useEffect(() => {
    getDailyChatCount()
  }, [])
  return <div id="sidebar">Sidebar</div>
}
