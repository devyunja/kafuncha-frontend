import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../Routes'

import styles from './Intro.module.css'
import introIMG from '../assets/kafuncha-Intro.png'

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
    <div className={styles.intro}>
      <div>
        <h1>
          Kafuncha로 <span className={styles.dot}>편리하게</span>
          <br />
          <span className={styles['half-highlight']}>잠수 관리</span> 하세요!
        </h1>
        <p>
          데이터 조회를 위해 PC 카카오톡에서 내려받은 csv파일을 업로드 해주세요
          :)
          <br />
          채팅 횟수, 랭킹, 잠수 인원 등을 확인하실 수 있습니다.
        </p>
        <div className={styles.fileBox}>
          <label htmlFor="input_file">파일 업로드</label>
          <input
            ref={inputRef}
            type="file"
            accept=".csv"
            id="input_file"
            onChange={uploadFile}
          />
        </div>
      </div>
      <img src={introIMG} alt="kafuncha" />
    </div>
  )
}
