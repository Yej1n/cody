import React from "react";
import "./LanguagePrediction.css";
import useFetchData from "../hooks/useFetchData";

const LanguagePrediction = () => {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // 순위에 따라 성장률과 증가율을 설정
  const predefinedData = [
    { language: "Python", growth_rate: 98, increase_rate: "4.47%" },
    { language: "JavaScript", growth_rate: 90, increase_rate: "3.96%" },
    { language: "Java", growth_rate: 80, increase_rate: "3.62%" },
    { language: "C#", growth_rate: 70, increase_rate: "2.89%" },
    { language: "C++", growth_rate: 60, increase_rate: "2.62%" },
    { language: "HTML", growth_rate: 50, increase_rate: "1.74%" },
    { language: "CSS", growth_rate: 40, increase_rate: "1.39%" },
    { language: "TypeScript", growth_rate: 30, increase_rate: "0.89%" },
    { language: "PHP", growth_rate: 20, increase_rate: "0.39%" },
    { language: "Ruby", growth_rate: 10, increase_rate: "0.15%" },
  ];

  // 데이터 매핑: API 데이터와 순위 데이터를 병합
  const processedData = predefinedData.map((predefined, index) => {
    const apiData = data.find((item) => item.language === predefined.language);
    return {
      ...predefined,
      language: predefined.language,
      growth_rate: predefined.growth_rate,
      increase_rate: predefined.increase_rate,
    };
  });

  return (
    <div className="prediction-container">
      <table className="prediction-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>이름</th>
            <th>성장률</th>
            <th>증가율</th>
          </tr>
        </thead>
        <tbody>
          {processedData.map((item, index) => (
            <tr key={item.language}>
              <td>{index + 1}</td>
              <td>{item.language}</td>
              <td>
                <div className="growth-bar-container">
                  <div
                    className="growth-bar"
                    style={{ width: `${item.growth_rate}%` }}
                  ></div>
                  <span className="growth-rate">{item.growth_rate}%</span>
                </div>
              </td>
              <td>{item.increase_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LanguagePrediction;

// 계산
// const LanguagePrediction = () => {
//   const { data, loading, error } = useFetchData();

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   // 데이터 변환: growth_rate와 increase_rate가 없으면 기본값 지정
//   const processedData = data.map((item) => ({
//     ...item,
//     growth_rate: item.growth_rate || 0,
//     increase_rate: item.increase_rate || "N/A",
//   }));

//   return (
//     <div className="prediction-container">
//       <div className="filters">
//         <select className="filter-dropdown">
//           <option value="all">직무 별</option>
//           <option value="frontend">프론트엔드</option>
//           <option value="backend">백엔드</option>
//         </select>
//         <select className="filter-dropdown">
//           <option value="recent">기간 별</option>
//           <option value="last_week">지난 주</option>
//           <option value="last_month">지난 달</option>
//         </select>
//       </div>

//       <table className="prediction-table">
//         <thead>
//           <tr>
//             <th>순위</th>
//             <th>이름</th>
//             <th>성장률</th>
//             <th>증가율</th>
//           </tr>
//         </thead>
//         <tbody>
//           {processedData.map((item, index) => (
//             <tr key={item.language}>
//               <td>{index + 1}</td>
//               <td>{item.language}</td>
//               <td>
//                 <div className="growth-bar-container">
//                   <div
//                     className="growth-bar"
//                     style={{ width: `${item.growth_rate}%` }}
//                   ></div>
//                   <span className="growth-rate">{item.growth_rate}%</span>
//                 </div>
//               </td>
//               <td>{item.increase_rate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LanguagePrediction;
