import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("dashboard");
  };

  return (
    <div>
      <h2>sidebar goes here</h2>
      <button onClick={handleSubmit}>go to Dashboard</button>
    </div>
  );
}

export default Sidebar;
