import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./cards";
import Put from "./put";

const Get = ({ link }) => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({});

  const handleEdit = (e) => {
    setEdit(e);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(link);
      setData(result.data);
    };
    getData();
  }, [data]);

  return (
    <div>
      <br />
      {data.map((x) => (
        <Cards key={x.id} id={x.id} name={x.name} handleEdit={handleEdit} />
      ))}
      <Put edit={edit} />
    </div>
  );
};

export default Get;
