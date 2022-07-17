import axios from "axios";
import React from "react";
import Link from "next/link";
const Episodes = ({ rickMorty }) => {
  return (
    <div>
      {rickMorty.results.map((episode) => {
        return (
          <div key={episode.id}>
            <Link href={`/episodes/${episode.id}`}>
              <a>
                <h1>
                  this is episode {episode.episode} : {episode.name}
                </h1>
                <hr></hr>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;

export const getStaticProps = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      rickMorty: data
    },
  };
};
