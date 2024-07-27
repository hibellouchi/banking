"use client";
import { ArcElement, Legend, Tooltip, Chart as ChartJS } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1023, 2120, 1530, 5455],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3", "Bank 4"],
  };
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
