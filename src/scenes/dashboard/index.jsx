import axios from "axios";
import { useState } from "react";
import { Box, Button, Typography, useTheme, styled } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import SimpleModal from "../../components/SimpleModal";
import GradientSlider from "../../components/GradientSlider";
import BasicSwitch from "../../components/BasicSwitch";
import LightModeIcon from "@mui/icons-material/LightMode";
import AirIcon from "@mui/icons-material/Air";
import SpeakerIcon from "@mui/icons-material/Speaker";
import RouterIcon from "@mui/icons-material/Router";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [sliderValue, setSliderValue] = useState(1);
  const [isTrue, setIsTrue] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = async () => {
    setIsTrue(!isTrue);
    const url = "http://10.10.9.102:3000/api/wled_off/" + isTrue;
    axios.get(url);
    return;
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);

    const url = "http://10.10.9.102:3000/api/brightness/" + sliderValue;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const GradientButtonInactive = styled(Button)(({ theme }) => ({
    color: colors.grey[300],
    background: "linear-gradient(130deg, #E8D206 30%, #B1Ed06 90%)",
    fontSize: "16px",
    backgroundClip: "text",
    transition: "color 2s ease-in-out infinite",
    "&:hover, &:active": {
      color: "rgba(0,0,0,0)",
    },
  }));

  const GradientButtonActive = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    background: "linear-gradient(130deg, #E8D206 30%, #B1Ed06 90%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }));

  const GradientH3 = styled("h3")({
    fontSize: "1.5rem",
    padding: "0",
    fontWeight: "bold",
    background: "linear-gradient(130deg, #E8D206 10%, #B1Ed06 90%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });

  const UnstyledH3 = styled("h3")({
    fontSize: "1.5rem",
    padding: "0",
    fontWeight: "bold",
    color: "#f1f1f1",
  });

  const GradientH4 = styled("h4")({
    fontSize: "1.5em",
    fontWeight: "medium",
    background: "linear-gradient(130deg, #E8D206 30%, #B1Ed06 90%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });

  return (
    <Box m="0px 40px 40px 40px">
      {/* GRID & CHARTS */}
      {/* ROOMS */}
      {/* Living Room */}
      <Box display="flex" gap="20px" mb="25px">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="none"
        >
          <GradientButtonActive variant="text">
            Living Room
          </GradientButtonActive>
        </Box>
        {/* Bedroom */}
        <Box
          backgroundColor="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <GradientButtonInactive variant="text">
            Bedroom
          </GradientButtonInactive>
        </Box>
        {/* Kitchen */}
        <Box
          display="flex"
          backgroundColor="none"
          alignItems="center"
          justifyContent="center"
        >
          <GradientButtonInactive variant="text">
            Kitchen
          </GradientButtonInactive>
        </Box>
        {/* Dining Room */}
        <Box
          gridColumn="span 3"
          backgroundColor="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="none"
        >
          <GradientButtonInactive variant="text">
            Dining Room
          </GradientButtonInactive>
        </Box>
        {/* Family Room */}
        <Box
          display="flex"
          backgroundColor="none"
          alignItems="center"
          justifyContent="center"
        >
          <GradientButtonInactive variant="text">
            Family Room
          </GradientButtonInactive>
        </Box>
      </Box>
      {/* 1st and 2nd row */}
      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="40px">
        {/* ROW 1 */}

        {/* Power Usage */}

        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={colors.grey[600]}
          borderRadius="10px"
        >
          <Box p="0 30px" display="flex" justifyContent="space-between">
            <Box>
              <UnstyledH3>Power usage</UnstyledH3>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Usage today
              </Typography>
            </Box>
            <Box>
              <GradientH3>32kW</GradientH3>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Device control */}
        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={colors.grey[600]}
          p="0px 30px 0px 30px"
          borderRadius="10px"
        >
          <Box>
            <UnstyledH3>LED Strip</UnstyledH3>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Active for 9h
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <Typography
              variant="h1"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px", mb: "10px" }}
            >
              {sliderValue}%
            </Typography>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ mb: "35px" }}
            >
              Brightness
            </Typography>
            <GradientSlider value={sliderValue} onChange={handleSliderChange} />
          </Box>
        </Box>
        {/* Bar Chart */}
        <Box gridColumn="span 2" gridRow="span 2" borderRadius="10px">
          <Box gridColumn="span 4" gridRow="span 2">
            <Box
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <GradientH3>Power consumption</GradientH3>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Usage today
              </Typography>
            </Box>

            <Box height="250px">
              <BarChart />
            </Box>
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box gridColumn="span 4" gridRow="span 2" padding="30px">
          <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="40px">
            {/*AAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <Box p="0px 50px 50px 50px" gridRow="span 2" gridColumn="span 2">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <LightModeIcon sx={{ fontSize: "2rem" }} />
                </Box>
                <Box>
                  <BasicSwitch onClick={() => handleButtonClick(true)} />
                </Box>
              </Box>

              <Box>
                <GradientH3>LED Strip</GradientH3>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Active for 8 hours
                </Typography>
              </Box>
            </Box>

            {/*AAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <Box p="0px 50px 50px 50px" gridRow="span 2" gridColumn="span 2">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <SpeakerIcon sx={{ fontSize: "2rem" }} />
                </Box>
                <Box>
                  <BasicSwitch />
                </Box>
              </Box>

              <Box>
                <GradientH3>Speaker</GradientH3>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Inactive for 5 hours
                </Typography>
              </Box>
            </Box>

            {/*AAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <Box p="0px 50px 50px 50px" gridRow="span 2" gridColumn="span 2">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <AirIcon sx={{ fontSize: "2rem" }} />
                </Box>
                <Box>
                  <BasicSwitch />
                </Box>
              </Box>

              <Box>
                <GradientH3>Humidifier</GradientH3>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Inactive for 3 hours
                </Typography>
              </Box>
            </Box>

            {/*AAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <Box p="0px 50px 50px 50px" gridRow="span 2" gridColumn="span 2">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <RouterIcon sx={{ fontSize: "2rem" }} />
                </Box>
                <Box>
                  <BasicSwitch />
                </Box>
              </Box>

              <Box>
                <GradientH3>Router</GradientH3>
                <Typography variant="h5" color={colors.grey[100]}>
                  Active for 8 hours
                </Typography>
              </Box>
            </Box>

            {/*AAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <Box p="0px 50px 50px 50px" gridRow="span 2" gridColumn="span 2">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <LocalFireDepartmentIcon
                    sx={{ fontSize: "2rem", cursor: "pointer" }}
                    onClick={handleModalOpen}
                  />
                  {isModalOpen && (
                    <SimpleModal
                      open={isModalOpen}
                      onClose={handleModalClose}
                    />
                  )}
                </Box>

                <Box>
                  <BasicSwitch />
                </Box>
              </Box>

              <Box>
                <GradientH3>Heater</GradientH3>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Active for 6 hours
                </Typography>
              </Box>
            </Box>

            {/*AAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <Box p="0px 50px 50px 50px" gridRow="span 2" gridColumn="span 2">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <ConnectedTvIcon sx={{ fontSize: "2rem" }} />
                </Box>
                <Box>
                  <BasicSwitch />
                </Box>
              </Box>

              <Box>
                <GradientH3>Smart TV</GradientH3>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Active for 4 hours
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box gridColumn="span 2" gridRow="span 2" padding="0px 30px 30px 30px">
          <GradientH3>Device Power Consumption</GradientH3>

          {/*Device Power Consumption*/}
          <Box display="flex" flexDirection="column">
            <Box
              paddingTop="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="20px"
              >
                <AirIcon sx={{ mr: "9px", fontSize: "2rem" }} />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Air Condition
                </Typography>
              </Box>

              <GradientH4>42kW</GradientH4>
            </Box>

            <Box
              paddingTop="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="20px"
              >
                <ConnectedTvIcon sx={{ mr: "9px", fontSize: "2rem" }} />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Smart TV
                </Typography>
              </Box>

              <GradientH4>31kW</GradientH4>
            </Box>

            <Box
              paddingTop="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="20px"
              >
                <LightModeIcon sx={{ mr: "9px", fontSize: "2rem" }} />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  LED Strip
                </Typography>
              </Box>

              <GradientH4>8kW</GradientH4>
            </Box>

            <Box
              paddingTop="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="20px"
              >
                <SpeakerIcon sx={{ mt: "5px", mr: "9px", fontSize: "2rem" }} />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Speaker
                </Typography>
              </Box>

              <GradientH4>4kW</GradientH4>
            </Box>

            <Box
              paddingTop="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
