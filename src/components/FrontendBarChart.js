import React from "react";
import { Bar } from "react-chartjs-2";
import "./styles/LanguageTable.css";

const FrontendBarChart = ({ data }) => {
    const frontendLanguages = ["JavaScript", "HTML", "CSS", "TypeScript"];
  
    const frontendData = frontendLanguages.map(
      (lang) => data.find((item) => item.language === lang)?.trend_score || 0
    );
  
    const frontendChartData = {
      labels: frontendLanguages,
      datasets: [
        {
          label: "프론트엔드 언어",
          data: frontendData,
          backgroundColor: "rgba(75, 192, 192, 0.7)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div className="end-chart-container">
        <h3>프론트엔드 언어 순위</h3>
        <Bar data={frontendChartData} />
      </div>
    );
  };
  
  export default FrontendBarChart;