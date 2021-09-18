import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />

export function Loader() {
  return <Spin wrapperClassName="loader-wrapper" indicator={antIcon} />
}
