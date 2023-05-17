import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              strokeWidth: 0,
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 0,
            },
            text: {
              fill: colors.grey[300],
            },
          },
        },
        legends: {},
      }}
      keys={["kW"]}
      indexBy="month"
      margin={{ top: 50, right: 20, bottom: 50, left: 30 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "blue_green" }}
      defs={[]}
      borderRadius={10}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      enableGridX={false}
      enableGridY={false}
      enableLabel={false}
      legends={[]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
