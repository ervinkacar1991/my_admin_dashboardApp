import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PollIcon from "@mui/icons-material/Poll";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ervin_admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard </span>
          </li>
          <p className="title">LISTS</p>
          <Link to="users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleOutlineIcon className="icon" />
              <span>Users </span>
            </li>
          </Link>
          <Link to="products" style={{ textDecoration: "none" }}>
            <li>
              <PrecisionManufacturingOutlinedIcon className="icon" />
              <span>Products </span>
            </li>
          </Link>
          <li>
            <FlipToFrontIcon className="icon" />
            <span>Orders </span>
          </li>
          <li>
            <AirportShuttleIcon className="icon" />
            <span>Delivery </span>
          </li>
          <p className="title">USEFUL </p>

          <li>
            <PollIcon className="icon" />
            <span>Stats </span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications </span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>System Health </span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs </span>
          </li>
          <li>
            <SettingsSuggestOutlinedIcon className="icon" />
            <span>Settings </span>
          </li>
          <p className="title">USER</p>

          <li>
            <SupervisedUserCircleOutlinedIcon className="icon" />
            <span>Profile </span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
