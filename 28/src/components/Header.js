import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../contexts/auth/AuthContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import LoginForm from "./LoginForm";

const Header = () => {
  const { isLoggedIn, logoutUser, userInfo } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
            {!isLoggedIn && (
              <Button variant="contained" onClick={handleClickOpen}>
                Login
              </Button>
            )}
            {isLoggedIn && (
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
            )}
          </li>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              For authorization enter your login and password
            </DialogTitle>
            <DialogContent>
              <LoginForm handleCloseForm={handleClose} />
            </DialogContent>
          </Dialog>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
