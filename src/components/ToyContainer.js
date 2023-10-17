import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  const toyCardArray = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onLikeToy={onLikeToy}
    />
  ));
  return <div id="toy-collection">{toyCardArray}</div>;
}

export default ToyContainer;
