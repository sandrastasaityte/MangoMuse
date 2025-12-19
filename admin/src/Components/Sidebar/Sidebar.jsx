import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={{ width: "200px", backgroundColor: "#eee", padding: "10px" }}>
      <NavLink to="/dashboard">Dashboard</NavLink><br/>
      <NavLink to="/add">Add Cake</NavLink><br/>
      <NavLink to="/list">Cakes List</NavLink><br/>
      <NavLink to="/orders">Orders</NavLink>
    </aside>
  );
};

export default Sidebar;
