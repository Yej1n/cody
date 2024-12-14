import React from "react";
import "./styles/LanguageTable.css";

const LanguageTable = ({ data }) => {
  return (
    <table className="language-table">
      <thead>
        <tr>
          <th>순위</th>
          <th>언어</th>
          <th>사용 빈도</th>
          <th>스타</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.language}>
            <td>{index + 1}</td>
            <td>{item.language}</td>
            <td>{((item.trend_score / 100000000) * 100).toFixed(2)}%</td>
            <td>{(item.trend_score / 1000).toFixed(2)}K</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LanguageTable;