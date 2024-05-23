import CharacterCard from './CharacterCard'

function CharacterList({ characterList }) {

  const sortedCharacterList = characterList.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

    const html = sortedCharacterList.map((character) => 
      <CharacterCard key={character.id} character={character} />)

  return ( html.length > 0 ?

    <div className="characterList">

        {html}

    </div>

    : <p className="searchError">Character not found</p>
  )
}

export default CharacterList