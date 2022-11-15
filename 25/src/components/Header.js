import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header-logo">Tripma</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="users"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="hotels"
            >
              Hotels
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
