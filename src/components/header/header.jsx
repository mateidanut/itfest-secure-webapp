import React from "react"

import "./header.css"

const Header = (props) => {
  return (
    <header className="al-header">
      <div className="al-logo">
        <a to="/">fakebook</a>
      </div>
      <div className="header-nav-links">
        <a to="/" >Profile</a>
        <a to="/" >Friends</a>
        <a to="/" >Settings</a>
      </div>
    </header>
  )
}

export default Header