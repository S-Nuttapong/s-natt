import "chartjs-adapter-date-fns";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import { enUS } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  DATE_FNS_TREND,
  DAY_JS_TREND,
  LUXON_TRENDS,
  MOMENT_JS_TRENDS,
} from "./constants";
import { groupDownloadsByPeriod } from "./utils/groupDates";
import { format } from "date-fns";

const colors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#c45850"];

const stats = [MOMENT_JS_TRENDS, DATE_FNS_TREND, DAY_JS_TREND, LUXON_TRENDS];

const labels = groupDownloadsByPeriod(stats[0].downloads, "week").map(
  (periodData) => periodData.period
);

const datasets = stats.map((stat, idx) => {
  const color = colors[idx];
  const data = groupDownloadsByPeriod(stat.downloads, "week").map(
    (periodData) => periodData.downloads
  );
  const dataset = {
    label: stat.package,
    backgroundColor: color,
    borderColor: color,
    pointRadius: 4,
    pointHoverRadius: 4,
    pointBorderWidth: 1,
    pointBackgroundColor: "transparent",
    pointBorderColor: "transparent",
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: "#ffffff",
    fill: false,
    data,
  };

  return dataset;
});

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
      Legend,
      TimeScale
    );
    setIsRegistered(true);
  }, []);

  if (!isRegistered) return <></>;

  return (
    <Line
      data={{ datasets, labels }}
      options={{
        responsive: false,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "quarter",
              displayFormats: {
                quarter: "MMM yyyy",
              },
            },
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
        interaction: {
          intersect: false,
          mode: "index",
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
            usePointStyle: true,
            callbacks: {
              labelColor: (ctx) => ({
                borderColor: colors[ctx.datasetIndex],
                backgroundColor: colors[ctx.datasetIndex],
                borderWidth: 2,
                borderDash: [2, 2],
                borderRadius: 2,
              }),
              labelPointStyle: () => ({
                pointStyle: "rect",
                rotation: 0,
              }),
              label: (ctx) => ctx.formattedValue,
              title: ([ctx]) => ctx.label.split(", ").slice(0, -1).join(", "),
            },
            padding: 20,
            displayColors: true,
            titleMarginBottom: 10,
            bodySpacing: 10,
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
