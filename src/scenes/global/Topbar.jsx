import { Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Header from "../../components/Header";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      m="30px 40px 0px 40px"
    >
      <Box display="flex" mt="30px">
        <Header title="Home" />
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Button
          sx={{
            backgroundColor: colors.primary[100],
            color: colors.primary[500],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "999px",
            background: "white",
            transition: "background 2s ease-in-out infinite",
            "&:hover, &:active": {
              background: "linear-gradient(130deg, #E8D206 30%, #B1Ed06 90%)",
            },
          }}
        >
          <AddIcon sx={{ mr: "10px" }} />
          Add Device
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
