import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    {
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      label: "Africa",
      borderColor: "#3e95cd",
      backgroundColor: "#3e95cd",
    },
    {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      backgroundColor: "#8e5ea2",
    },
    {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: "#3cba9f",
      backgroundColor: "#3cba9f",
    },
    {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      backgroundColor: "#e8c3b9",
    },
    {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      backgroundColor: "#c45850",
    },
  ],
};

export const NPMTrend = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    ChartJS.register(
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip,
      Legend
    );
    setIsRegistered(true);
  }, []);

  if (!isRegistered) return <></>;

  return (
    <Line
      onLoad={() => console.log("loaded")}
      data={data}
      options={{
        responsive: false,
        scales: {
          x: {
            ticks: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
          y: {
            ticks: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            display: true,
            labels: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
          tooltip: {
            padding: 20,
            titleFont: {
              size: 20,
            },
            bodyFont: {
              size: 20,
            },
          },
          title: {
            display: true,
            text: "Downloads this past years",
            color: "white",
            font: {
              size: 30,
            },
          },
        },
      }}
      width="1200px"
      height="540px"
    />
  );
};
