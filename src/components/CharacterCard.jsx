


function CharacterCard({ character }) {
  return (
    <article className="character_card">

      <img src={character.image} alt="" />
      <h2>{character.name}</h2>
      <h4>{character.specie}</h4>

    </article>
  )
}

export default CharacterCard