import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav'>
      <NavLink to='/'>
        <span>Home</span>
      </NavLink>
    </div>
  )
}

export default Navigation