import React from "react";

function ToyFilter({ searchTerm, setSearchTerm, popular, setPopular }) {
  return (
    //class names just for styling
    <>
      <form className="add-toy-form">
        <input
          className={"input-text"}
          type="text"
          placeholder="Enter name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button onClick={(e) => setPopular((popular) => !popular)}>
        {popular ? "All Toys" : "Popular Toys"}
      </button>
    </>
  );
}

export default ToyFilter;
