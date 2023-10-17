import React from "react";

function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  function handleDeleteClick() {
    const configObj = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/toys/${toy.id}`, configObj)
      .then((r) => r.json())
      .then((data) => onDeleteToy(toy));
  }

  function handleLikeClick() {
    const configObj = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    };
    fetch(`http://localhost:3001/toys/${toy.id}`, configObj)
      .then((r) => r.json())
      .then((likedToy) => onLikeToy(likedToy));
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
