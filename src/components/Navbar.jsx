import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import './Navbar.css';
import avatarIcon from '../assets/img/avatar-icon.png';

export default function Navbar() {
  let navigate = useNavigate();

  function fakeLogOut() {
    localStorage.removeItem('loggedin');
    navigate('/');
  }

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="#VANSLIFE logo" />
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatarIcon} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
