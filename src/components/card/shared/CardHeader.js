import './card.css'

import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { useState } from 'react'

export function CardHeader({
  title,
  selctedIndex = 0,
  sortOptions = [],
  onChangeSort,
}) {
  return (
    <div className="card-header">
      <span className="card-header-title">{title}</span>
      {sortOptions?.length > 0 && (
        <SortDropdown
          {...{ selctedIndex, options: sortOptions, onChange: onChangeSort }}
        />
      )}
    </div>
  )
}

export function SortDropdown({ selctedIndex, options, onChange }) {
  const [isShown, setIsShown] = useState(false)

  function toggleDropdown(e) {
    e.preventDefault()
    setIsShown(!isShown)
  }

  function handleSelected(option, index) {
    setIsShown(false)
    onChange?.(option, index)
  }

  return (
    <Dropdown
      className="rank-sort"
      arrow
      trigger={['click']}
      placement="bottomRight"
      overlay={
        <Menu
          className="rank-sort-list"
          selectable
          defaultSelectedKeys={options[0].value}>
          {options.map((option, index) => (
            <Menu.Item
              key={option.value}
              className="rank-sort-item"
              onClick={() => handleSelected(option, index)}>
              {option.label}
            </Menu.Item>
          ))}
        </Menu>
      }>
      <a onClick={toggleDropdown}>
        {options[selctedIndex].label}
        <DownOutlined />
      </a>
    </Dropdown>
  )
}
