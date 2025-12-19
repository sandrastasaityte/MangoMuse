import React from "react";
import "./List.css";

const List = () => {
  const cakes = [
    { id: 1, name: "Chocolate Cake", price: 20 },
    { id: 2, name: "Vanilla Cake", price: 18 },
  ];

  return (
    <div className="list-page">
      <h1>Cakes List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (£)</th>
          </tr>
        </thead>
        <tbody>
          {cakes.map((cake) => (
            <tr key={cake.id}>
              <td>{cake.id}</td>
              <td>{cake.name}</td>
              <td>{cake.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
