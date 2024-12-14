import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색 입력값 상태 관리
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          실시간 언어 트렌드
        </NavLink>
        <NavLink
          to="/language-prediction"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          언어 예측
        </NavLink>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </header>
  );
};

export default Header;