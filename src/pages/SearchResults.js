import React from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "./SearchResults.css";

// Mock 데이터 예제
const languageGrowthData = {
  JavaScript: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "성장률",
        data: [5, 10, 15, 20, 25, 30],
        borderColor: "#6b66c8",
        backgroundColor: "rgba(161, 158, 214, 0.2)",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  },
  Python: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "성장률",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "#6b66c8",
        backgroundColor:"rgba(161, 158, 214, 0.2)", 
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  },
};

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const chartData = languageGrowthData[query] || null;

  return (
    <div className="search-results-container">
      <h2>{query ? `${query}의 성장률` : "검색 결과 없음"}</h2>
      {chartData ? (
        <div className="chart-container">
          <Line data={chartData} />
        </div>
      ) : (
        <p>해당 언어에 대한 데이터를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResults;
