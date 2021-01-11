import React from 'react'
import './Navbar.scss'

export default function Navbar(): React.ReactElement {
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
          <a className='navigation__link' href='#'>PLAY</a>
      </div>
    </nav>
  )
}