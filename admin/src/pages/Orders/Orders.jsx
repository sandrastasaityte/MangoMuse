import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = [
    { id: 1, cake: "Chocolate Cake", quantity: 2, status: "Pending" },
    { id: 2, cake: "Vanilla Cake", quantity: 1, status: "Completed" },
  ];

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cake</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.cake}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
