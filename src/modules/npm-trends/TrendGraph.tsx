//@ts-nocheck

import { Chart, ChartData } from "chart.js";
import { useCallback, useEffect, useRef } from "react";
import { colors } from "./utils/colors";
import { groupDownloadsByPeriod } from "./utils/groupDates";

type IChartData = ChartData<"line", { x: Date; y: number }[]>;



export const TrendGraph = () => {
  const chartInstance = useRef<Chart>(null);

  const getChartData = useCallback(() => {
    const chartData = { labels: [], datasets: [] } as IChartData;
    stats.forEach((graphStat, i) => {
      const dataColor = colors[i].join(",");
      const groupedData = groupDownloadsByPeriod(graphStat.downloads, "week");

      if (i === 0) {
        const labels = groupedData.map((periodData) => periodData.period);
        chartData.labels = labels;
      }

      const data = groupedData.map((periodData) => ({
        x: periodData.period,
        y: periodData.downloads,
      }));

      const dataset = {
        label: graphStat.package,
        backgroundColor: `rgba(${dataColor},1)`,
        borderColor: `rgba(${dataColor},1)`,
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 1,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: `rgba(${dataColor},1)`,
        pointHoverBorderColor: "#ffffff",
        fill: false,
        data,
      };
      chartData.datasets.push(dataset);
    }, this);

    return chartData;
  }, [stats, colors]);

  const getChartOptions = useCallback(() => {
    const firstDateForChartdayjs = dayjs(
      stats?.[0]?.downloads?.[0]?.day || "2021-06-27"
    );
    const monthsToNow = dayjs().diff(firstDateForChartdayjs, "months");

    let xAxisDispalyUnit = "week";
    if (monthsToNow >= 24) {
      xAxisDispalyUnit = "year";
    } else if (monthsToNow >= 12) {
      xAxisDispalyUnit = "quarter";
    } else if (monthsToNow >= 3) {
      xAxisDispalyUnit = "month";
    }

    const chartOptions = {
      animation: {
        duration: 0,
      },
      scaleFontColor: "#000000",
      responsive: true,
      datasetFill: false,
      scaleLabel: "<%= ' ' + value%>",
      maintainAspectRatio: false,
      legend: {
        onClick: (e: any) => e.stopPropagation(),
        labels: {
          padding: 25,
          fontSize: 14,
          usePointStyle: true,
          generateLabels: (chart: any) => {
            const { data } = chart;
            if (!data.datasets.length) {
              return [
                {
                  text: "loading",
                  fillStyle: "rgba(0,0,0,0.05)",
                  strokeStyle: "transparent",
                },
              ];
            }

            return data.datasets.map(
              (
                dataset: ReturnType<typeof getChartData>["datasets"][number]
              ) => ({
                text: dataset.label,
                fillStyle: dataset.borderColor,
                strokeStyle: "transparent",
              })
            );
          },
        },
      },
      scales: {
        y: [
          {
            ticks: {
              beginAtZero: true,
              callback: (value) => Number(value).toLocaleString(),
            },
          },
        ],
        x: [
          {
            type: "time",
            time: {
              unit: xAxisDispalyUnit,
              displayFormats: {
                quarter: "MMM YYYY",
              },
            },
          },
        ],
      },
      tooltips: {
        mode: "index",
        intersect: false,
        displayColors: true,
        multiKeyBackground: "transparent",
        xPadding: 10,
        yPadding: 10,
        titleMarginBottom: 10,
        bodySpacing: 10,
        callbacks: {
          label: (tooltipItem: any, data: IChartData) => {
            const value =
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
            return ` ${Number(value).toLocaleString()}`;
          },
          labelColor: (tooltipItem: any, chart: { data: IChartData }) => ({
            backgroundColor:
              chart.data.datasets[tooltipItem.datasetIndex].backgroundColor,
            borderColor: "transparent",
          }),
        },
      },
      hover: {
        mode: "index",
        intersect: false,
      },
    };

    return chartOptions;
  }, [stats]);

  const updateChart = useCallback(() => {
    if (chartInstance.current) {
      chartInstance.current.data = getChartData();
      chartInstance.current.options = getChartOptions();
      chartInstance.current.update();
    }
  }, [getChartData, getChartOptions]);

  useEffect(() => {
    updateChart();
  }, [updateChart]);

  return (
    <>
      <div className="text-white">Here</div>
      <canvas
        ref={(el: any) => {
          if (!chartInstance.current) {
            const ctx = el.getContext("2d");
            chartInstance.current = new Chart(ctx, { type: "line" });
          }
        }}
        id="download_chart"
      />
    </>
  );
};
