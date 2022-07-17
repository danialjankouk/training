import axios from "axios";
import React from "react";
const UsersList = ({ rickMorty }) => {
  return (
    <div>
      {rickMorty.results.map((user) => {
        return (
          <div key={user.id}>
            <h1>name: {user.name}</h1>
            <h2>status: {user.status}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;

export const getStaticProps = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      rickMorty: data,
    },
  };
};
