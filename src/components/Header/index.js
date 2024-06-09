import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="main-container">
    <nav className="nav-container">
      <nav className="logo">
        <img
          className="logo-image"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="heading">Wave</h1>
      </nav>
      <ul className = "items">
        <li>
          <Link className="link-items" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-items" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link-items" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
