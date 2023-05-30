import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>sidebar goes here</h2>
      <button onClick={() => navigate("dashboard")}> Dashboard</button>
      <button onClick={() => navigate("invoices")}>Invoices</button>
      <button onClick={() => navigate("items")}>Item</button>
    </div>
  );
}

export default Sidebar;
