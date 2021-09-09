import './card.css'
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
        <Dropdown
          {...{ selctedIndex, options: sortOptions, onChange: onChangeSort }}
        />
      )}
    </div>
  )
}

function Dropdown({ selctedIndex, options, onChange }) {
  const [isShown, setIsShown] = useState(false)

  function toggleDropdown() {
    setIsShown(!isShown)
  }

  function handleSelected(option) {
    setIsShown(false)
    onChange?.(option)
  }

  return (
    <div className="rank-sort" onClick={toggleDropdown}>
      <span>{options[selctedIndex].label}</span>
      {isShown && (
        <ul className="rank-sort-list">
          {options.map(option => (
            <li
              key={option.value}
              className="rank-sort-item"
              onClick={() => handleSelected(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
