import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(toy) {
    setToys([...toys, toy]);
  }

  function handleDeleteToy(toy) {
    const updatedToys = toys.filter((currentToy) => toy.id !== currentToy.id);
    setToys(updatedToys);
  }

  function handleLikeToy(toy) {
    const updatedToys = toys.map((currentToy) => {
      if (currentToy.id === toy.id) return toy;
      return currentToy;
    });
    setToys(updatedToys);
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </>
  );
}

export default App;

/* 
App (toys state, fetch toys)
  Header
  Toy form (update toys, current toy state)
  Toy container (update toys)
    Toy card (delete request, update toys)
  */
