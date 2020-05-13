import React, { useState } from "react";

const Post = ({ link }) => {
  const [name, setName] = useState("");

  const postData = (e) => {
    e.preventDefault();
    fetch(link, {
      method: "POST",
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
      <form className="create-form">
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="create-input"
        />
        <button onClick={postData} className="create-button">
          Create
        </button>
      </form>
    </div>
  );
};

export default Post;
