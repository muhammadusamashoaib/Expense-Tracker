import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <NavLink exact to='/'>
          <li className='li'>
            COMBINED
          </li>
        </NavLink>
        <NavLink to='/tracker1'>
          <li className='li'>
            USER 1
          </li>
        </NavLink>
        <NavLink to='/tracker2'>
          <li className='li'>
            USER 2
          </li>
        </NavLink>
      </ul>
    </div>
  )
}
