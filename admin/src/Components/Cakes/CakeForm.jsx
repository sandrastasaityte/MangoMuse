// src/Components/Cakes/CakeForm.jsx
import React, { useState } from "react";

const CakeForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !category) return;

    const newCake = {
      id: Date.now(), // simple unique id
      name,
      description,
      price: Number(price),
      category,
      image,
    };

    onAdd(newCake);

    // Reset form
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Add Cake</button>
    </form>
  );
};

export default CakeForm;
