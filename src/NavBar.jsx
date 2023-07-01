import React from 'react'

const NavBar = () => {
    return (
        <header>
        <nav className='nav'>
          <img src="/public/boston-red-sox-logo-transparent.png" className="redsox-image" />
          <h1 className="nav-title">Red Sox Fan Page</h1>
          <h3>Tonight's Score: Boston Red Sox: 5 Toronto Blue Jays: 0</h3>
        </nav>
      </header>
    )
}
export default NavBar;