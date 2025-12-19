import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h2>Total Cakes</h2>
          <p>25</p>
        </div>
        <div className="card">
          <h2>Total Orders</h2>
          <p>12</p>
        </div>
        <div className="card">
          <h2>Pending Orders</h2>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
