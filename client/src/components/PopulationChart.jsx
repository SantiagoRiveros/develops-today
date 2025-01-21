import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los elementos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = ({ data }) => {
  // Extraer años y valores de la data
  const labels = data.map((entry) => entry.year);
  const values = data.map((entry) => entry.value);

  // Configuración de los datos para el gráfico
  const chartData = {
    labels,
    datasets: [
      {
        label: "Población",
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  // Configuración de las opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Evolución de la Población",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Año",
        },
      },
      y: {
        title: {
          display: true,
          text: "Población",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PopulationChart;
