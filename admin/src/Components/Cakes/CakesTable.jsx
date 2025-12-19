// src/Components/Cakes/CakesTable.jsx
import React from "react";
import "./CakesTable.css";

const CakesTable = ({ cakes }) => {
  if (!cakes || cakes.length === 0) return <p>No cakes available.</p>;

  return (
    <table className="cakes-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {cakes.map((cake) => (
          <tr key={cake.id}>
            <td>{cake.id}</td>
            <td>{cake.name}</td>
            <td>{cake.description}</td>
            <td>{cake.category}</td>
            <td>${cake.price}</td>
            <td>
              <img src={cake.image} alt={cake.name} width="50" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CakesTable;
