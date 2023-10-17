import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [newToy, setNewToy] = useState({
    image: "",
    likes: 0,
    name: "",
  });

  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setNewToy({ ...newToy, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newToy),
    };
    fetch("http://localhost:3001/toys", configObj)
      .then((r) => r.json())
      .then((toy) => onAddToy(toy));
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
