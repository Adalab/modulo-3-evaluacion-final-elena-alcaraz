import { Link } from "react-router-dom"


function CharacterCard({ character }) {
  return (
    <article className="character_card">

        <Link className="character_card_link" to={`/detail/${character.id}`}>
          <img src={character.image} alt="" />
          <h2 className="character_card_title">
          {character.status === "Dead" ? 
              <i className="fa-solid fa-skull-crossbones character_card_deadIcon"></i> 
              : "" } 
            {character.name}
          </h2>
        </Link>

        <h4 className="character_card_specie">{character.specie}</h4>
      
    </article>
  )
}

export default CharacterCard