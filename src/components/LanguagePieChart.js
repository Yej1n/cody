import React from "react";
import { Pie } from "react-chartjs-2";
import "./styles/LanguageTable.css";

const LanguagePieChart = ({ data }) => {
  // Sort and select top 5 languages
  const topLanguages = [...data]
    .sort((a, b) => b.trend_score - a.trend_score)
    .slice(0, 5);

  const chartData = {
    labels: topLanguages.map((item) => item.language),
    datasets: [
      {
        label: "상위 5개 언어 비율",
        data: topLanguages.map((item) => item.trend_score),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="pie-chart-container">
      <h3>전체 언어 순위</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default LanguagePieChart;