import { NavLink, Outlet } from 'react-router-dom';
import './HostLayout.css';

export default function HostLayout() {
  return (
    <main className="dashboard">
      <div className="content">
        <nav>
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Reviews
          </NavLink>
        </nav>
        <div className="host-layout-content">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
