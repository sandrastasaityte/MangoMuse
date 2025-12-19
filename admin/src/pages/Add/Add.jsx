import React, { useState } from "react";
import "./Add.css";

const Add = () => {
  const [cake, setCake] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add Cake:", cake);
  };

  return (
    <div className="add-page">
      <h1>Add New Cake</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cake Name"
          value={cake.name}
          onChange={(e) => setCake({ ...cake, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={cake.price}
          onChange={(e) => setCake({ ...cake, price: e.target.value })}
        />
        <button type="submit">Add Cake</button>
      </form>
    </div>
  );
};

export default Add;
