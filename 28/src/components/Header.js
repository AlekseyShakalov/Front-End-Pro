import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../contexts/auth/AuthContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";

import LoginForm from "./LoginForm";

const Header = () => {
  const { isLoggedIn, logoutUser, userInfo } = useContext(AuthContext);

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
          <li>
            {isLoggedIn ? (
              <Box sx={{ display: "flex" }}>
                <Button
                  variant="contained"
                  endIcon={<LogoutIcon />}
                  onClick={logoutUser}
                >
                  Logout
                </Button>
                <Avatar
                  alt={userInfo.firstName}
                  src={userInfo.image}
                  sx={{ ml: 1 }}
                />
              </Box>
            ) : (
              <LoginForm />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
