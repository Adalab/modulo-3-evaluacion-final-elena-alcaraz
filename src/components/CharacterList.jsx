import CharacterCard from './CharacterCard'

function CharacterList({ characterList }) {

    const html = characterList.map((character) => <CharacterCard key={character.id} character={character} />)


  return (
    <div>

        {html}

    </div>
  )
}

export default CharacterList