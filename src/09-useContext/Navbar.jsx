import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
