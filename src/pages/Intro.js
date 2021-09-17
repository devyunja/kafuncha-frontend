import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../Routes'

export default function Intro() {
  const inputRef = useRef(null)
  const history = useHistory()

  async function uploadFile() {
    const file = inputRef.current?.files?.[0]

    if (file) {
      const formData = new FormData()

      formData.append('chat_history', file)

      const res = await fetch('https://programming.coffee/upload', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        const data = await res.text()

        window.localStorage.setItem('fileName', data)

        history.push(PATHS.dashboard)
      }
    }
  }

  return (
    <div>
      <div>업로드</div>
      <div>
        <input ref={inputRef} type="file" accept=".csv" />
        <button onClick={uploadFile}>업로드</button>
      </div>
    </div>
  )
}
