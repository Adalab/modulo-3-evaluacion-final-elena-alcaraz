import { Link } from "react-router-dom"
import React, { useState } from 'react';



function CharacterDetail({ characterDetail }) {

  const [showEpisodes, setShowEpisodes] = useState(false);

    const handleSeeEpisodesClick = (event) => {
        event.preventDefault()
        setShowEpisodes(!showEpisodes);
    };

  return ( characterDetail ? 
    <>
    <div className="characterDetailCard">
        
        <div className="characterDetailCard_imgDiv">
            <img src={characterDetail.image} alt="" className="characterDetailCard_img" />
            {characterDetail.status === "Dead" ? <i className="fa-solid fa-skull-crossbones deadIcon"></i> : "" }
        </div>

        <div className="characterDetailCard_info">
            <h2 className="characterDetailCard_title">{characterDetail.name}</h2>
            <p className="characterDetailCard_specie">Specie: {characterDetail.specie}</p>
            <p className="characterDetailCard_statusTitle">Character Origin: </p>
            <p className="characterDetailCard_origin">{characterDetail.origin}</p>

            <p className="characterDetailCard_episodesTitle">Episodes: {characterDetail.episode.length} </p>
            <button onClick={handleSeeEpisodesClick} className="seeEpisodesButton">
              {showEpisodes ? 'Hide episodes' : 'Show Episodes'}
            </button>
            
            
                {showEpisodes && characterDetail.episode.map((episode, index) => (
                     <p key={index}><a href={episode} className="characterDetailCard_episode">{episode}</a></p>
                ))}
            
            <p className="characterDetailCard_statusTitle">Character Status:</p>
            <p className="characterDetailCard_status">{characterDetail.status}</p>
        </div>
        
    </div>
    <Link to="/" className="backLink">Back to the list</Link>
    </>
    : <p className="searchError">Character not found</p> 
  )
}

export default CharacterDetail