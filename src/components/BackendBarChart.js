import React from "react";
import { Bar } from "react-chartjs-2";
import "./styles/LanguageTable.css";

const BackendBarChart = ({ data }) => {
    const backendLanguages = ["Python", "Java", "C#", "Ruby", "PHP"];
  
    const backendData = backendLanguages.map(
      (lang) => data.find((item) => item.language === lang)?.trend_score || 0
    );
  
    const backendChartData = {
      labels: backendLanguages,
      datasets: [
        {
          label: "백엔드 언어",
          data: backendData,
          backgroundColor: "rgba(153, 102, 255, 0.7)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div className="end-chart-container">
        <h3>백엔드 언어 순위</h3>
        <Bar data={backendChartData} />
      </div>
    );
  };
  
  export default BackendBarChart;