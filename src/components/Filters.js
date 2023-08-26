import React from 'react'

const Filters = () => {
  return (
    <ul className="filters">
        <li className="filter-item active">All</li>
        <li className="filter-item">Incomplete</li>
        <li className="filter-item">Completed</li>
    </ul>
  )
}

export default Filters