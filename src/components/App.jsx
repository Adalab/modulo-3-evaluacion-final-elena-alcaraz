import { useEffect, useState } from "react";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import getDataFromAPi from "../services/api";
import Filters from "./Filters";

function App() {

  const [characterList, setCharacterList] = useState([])
  const [filteredCharacterList, setFilteredCharacterList] = useState([]);
  const [nameFilter, setNameFilter] = useState("")

  useEffect(() => {
    getDataFromAPi().then((newArray) => { setCharacterList(newArray) })
  }, [])

  const changeFormDataText = (value) => {
    setNameFilter(value); 
    setFilteredCharacterList(
      characterList.filter(character => 
        character.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const filterList = nameFilter ? filteredCharacterList : characterList;

  return (
    <>

      <Filters changeFormDataText={changeFormDataText} nameFilter={nameFilter}/>

      <CharacterList characterList={filterList} />

    </>
  )
}

export default App
