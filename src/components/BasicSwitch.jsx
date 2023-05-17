import Switch from "@mui/material/Switch";

const BasicSwitch = ({ ...label }) => (
  <Switch {...label} defaultChecked color="secondary" />
);

export default BasicSwitch;
