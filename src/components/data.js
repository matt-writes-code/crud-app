import React, { useState, useEffect } from "react";

// for reference

const Data = ({ local, heroku }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(local);
      res.json().then((res) => setData(res));
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {JSON.stringify(data)}
      <p>
        {data.map((x) => (
          <span>
            <p>
              {x.id}. {x.name}
            </p>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Data;
