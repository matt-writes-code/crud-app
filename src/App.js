import React from "react";
import Get from "./components/get";
import Post from "./components/post";

import "./App.css";

const heroku = "https://my-json-server-db.herokuapp.com/data";

const local = "http://localhost:3001/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>CRUD App</p>
        <Post link={heroku} />
        <br />
        <Get link={heroku} />
      </header>
    </div>
  );
}

export default App;
