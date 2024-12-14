import React, { useEffect, useState } from "react";
import LanguageTable from "../components/LanguageTable";
import LanguagePieChart from "../components/LanguagePieChart";
import FrontendBarChart from "../components/FrontendBarChart";
import BackendBarChart from "../components/BackendBarChart";


// index.js 또는 App.js
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// 모든 필요한 컴포넌트를 등록
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="chart-layout">
        <LanguagePieChart data={data} />
        <FrontendBarChart data={data} />
        <BackendBarChart data={data} />
      </div>
      <div className="table-layout">
        <LanguageTable data={data} />
      </div>
    </div>
  );
};

export default App;