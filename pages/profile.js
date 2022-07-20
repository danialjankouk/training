import React, { useEffect, useState } from "react";
import axios from "axios";
const ProfileList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((res) => {
        setData(res.data[0]), setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (loading) return <div>loading ...</div>;

  return (
    <div>
      <h1>profile page</h1>
      <br></br>
      <h1>
        name : {data.name} - transaction : {data.transaction} - products :{" "}
        {data.products}
      </h1>
    </div>
  );
};

export default ProfileList;
