import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.grey[600]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          color: colors.grey[300],
          background: "linear-gradient(130deg, #E8D206 30%, #B1Ed06 90%)",
          backgroundClip: "text",
          animation: "color 2s ease-in-out infinite",
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          fontSize: "16px",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "rgba(0,0,0,0)",
        },
        "& .pro-menu-item.active": {
          fontSize: "16px",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "rgba(0,0,0,0)",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                {/*<Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
            </Typography>*/}
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="row">
                <PersonOutlineRoundedIcon sx={{ fontSize: "3rem" }} />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 40px 0" }}
                >
                  User
                </Typography>
              </Box>
            </Box>
          )}
          {/* Ikona "Dashboard" */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"} marginBottom="5px">
            <Item
              title="Dashboard"
              to="/"
              icon={<SpaceDashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          {/* Ikona "Room" */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Rooms"
              to="/#"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Ikona "Power Analytics" */}
            <Item
              title="Power Analytics"
              to="/#"
              icon={<AssessmentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Ikona "Notifications" */}
            <Item
              title="Notifications"
              to="/#"
              icon={<NotificationsNoneOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Ikona "Preferences" */}
            <Item
              title="Preferences"
              to="/#"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Ikona "Log Out*/}
            <Item
              alignItems="Bottom"
              title="Log Out"
              to="/#"
              icon={<ExitToAppOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
