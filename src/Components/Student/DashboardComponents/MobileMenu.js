import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";
import TimelineIcon from "@material-ui/icons/Timeline";

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label="menu-toggle" onClick={handleClick}>
        <MoreVertIcon style={{ color: "#fff" }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <FavoriteBorderIcon style={{ margin: "0 8px" }} />
          Favourite
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NotificationsNoneIcon style={{ margin: "0 8px" }} />
          Notifications
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ChatIcon style={{ margin: "0 8px" }} />
          Messages
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SettingsIcon style={{ margin: "0 8px" }} />
          Profile Setting
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TimelineIcon style={{ margin: "0 8px" }} />
          Purchase History
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ExitToAppIcon style={{ margin: "0 8px" }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
