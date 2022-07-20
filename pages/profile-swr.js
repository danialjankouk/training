import React from "react";
import useSWR from "swr";
import axios from "axios";
const PofileSwr = () => {
const fetcher = async() => {
    const { data } =await axios.get("http://localhost:4000/profile")
    return data
}
  const { data, error } = useSWR("userData",fetcher)
  if (!data) return <h1>loading...</h1>;
  if (error) return <h1>faild to load</h1>;
  return (
    <div>
      <h1>
        name : {data[0].name} - transaction : {data[0].transaction} - products :{" "}
        {data[0].products}
      </h1>
    </div>
  );
};

export default PofileSwr;
