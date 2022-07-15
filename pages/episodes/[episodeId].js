import axios from 'axios';
import React from 'react';
const EpisodeId = ({rickMorty}) => {
    return (
      <div>
        <h1>date : {rickMorty.air_date}</h1>
        <br></br>
        <h1 key={rickMorty.characters.id}>
          characters : {rickMorty.name}
        </h1>
      </div>
    );
};
export default EpisodeId;


export const getStaticPaths = async () => {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode")
    const paths = data.results.map((episode) => {
        return {
            params: {episodeId : `${episode.id}`},
        }
    })
    return {
        paths : paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context
  const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`);
  return {
    props: {
      rickMorty: data,
    },
  };
};