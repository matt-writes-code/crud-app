import React from "react";
import Delete from "./delete";

const Cards = ({ id, name, handleEdit }) => {
  const transferId = () => {
    handleEdit({ id, name });
  };

  return (
    <div className="cards">
      <button onClick={transferId} className="name">
        {name}
      </button>
      <Delete id={id} />
    </div>
  );
};

export default Cards;
