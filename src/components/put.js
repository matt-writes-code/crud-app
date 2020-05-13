import React, { useState } from "react";

const Put = ({ edit }) => {
  const [name, setName] = useState(edit.name);

  const putLocal = `http://localhost:3001/data/${edit.id}`;
  const putHeroku = `https://my-json-server-db.herokuapp.com/data/${edit.id}`;

  const putData = (e) => {
    e.preventDefault();
    fetch(putHeroku, {
      method: "PUT",
      body: JSON.stringify({
        name: `${name}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setName("");
  };

  return (
    <div>
      <p>Edit {edit.name ? edit.name : "___"} to : </p>
      <form className="edit-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-input"
        />
        <button onClick={putData} className="edit-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default Put;
