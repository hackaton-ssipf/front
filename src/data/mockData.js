import { tokens } from "../theme";

export const mockBarData = [
  {
    month: "Jan",
    kW: 350,
    kWColor: "red",
  },
  {
    month: "Feb",
    kW: 500,
    kWColor: "hsl(302, 70%, 50%)",
  },
  {
    month: "Mar",
    kW: 400,
    kWColor: "hsl(72, 70%, 50%)",
  },
  {
    month: "Apr",
    kW: 364,
    kWColor: "hsl(257, 70%, 50%)",
  },
  {
    month: "May",
    kW: 296,
    kWColor: "hsl(190, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "1PM",
        y: 3,
      },
      {
        x: "2PM",
        y: 2,
      },
      {
        x: "3PM",
        y: 4,
      },
      {
        x: "4PM",
        y: 5,
      },
      {
        x: "5PM",
        y: 4,
      },
      {
        x: "6PM",
        y: 5,
      },
    ],
  },
];
