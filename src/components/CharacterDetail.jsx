import { Link } from "react-router-dom"


function CharacterDetail({ characterDetail }) {

  return ( characterDetail ? 
    <div className="characterDetailCard">
        
        <img src={characterDetail.image} alt="" className="characterDetailCard_img" />
        {characterDetail.status === "Dead" ? <i className="fa-solid fa-skull-crossbones deadIcon"></i> : "" }
        <h2 className="characterDetailCard_title">{characterDetail.name}</h2>
        <p className="characterDetailCard_specie">{characterDetail.specie}</p>
        <p className="characterDetailCard_statusTitle">Character Origin</p>
        <p className="characterDetailCard_origin">{characterDetail.origin}</p>
        <p className="characterDetailCard_episodesTitle">Episodes</p>
        {characterDetail.episode.map((episode, index) => (
        <p key={index}><a href={episode} className="characterDetailCard_episode">{episode}</a></p>
      ))}
        <p className="characterDetailCard_statusTitle">Character Status</p>
        <p className="characterDetailCard_status">{characterDetail.status}</p>
          
        <Link to="/" className="backLink">Back to the list</Link>

    </div>
    : <p className="searchError">Character not found</p> 
  )
}

export default CharacterDetail