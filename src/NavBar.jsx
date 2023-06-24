import React from 'react'

const NavBar = () => {
    return (
        <header>
        <nav className='nav'>
          <img src="/public/boston-red-sox-logo-transparent.png" className="redsox-image" />
          <h1 className="nav-title">Red Sox Fan Page</h1>
          <h3>Tonight's Opponent: Chicago White Sox</h3>
        </nav>
      </header>
    )
}
export default NavBar;