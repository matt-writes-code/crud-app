import React from "react";

const Delete = ({ id }) => {
  const delLocal = `http://localhost:3001/data/${id}`;
  const delHeroku = `https://my-json-server-db.herokuapp.com/data/${id}`;

  const deleteData = (e) => {
    e.preventDefault();
    fetch(delHeroku, {
      method: "DELETE",
    });
  };

  return (
    <form className="delete-form">
      <button onClick={deleteData} className="delete">
        Delete
      </button>
    </form>
  );
};

export default Delete;
