import { useEffect, useState } from "react";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import getDataFromAPi from "../services/api";
import Filters from "./Filters";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {

  const [characterList, setCharacterList] = useState([])
  const [filteredCharacterList, setFilteredCharacterList] = useState([]);
  const [nameFilter, setNameFilter] = useState("")

  useEffect(() => {
    getDataFromAPi().then((newArray) => { setCharacterList(newArray) })
  }, [])


  //Filter
  const changeFormDataText = (value) => {
    setNameFilter(value); 
    setFilteredCharacterList(
      characterList.filter(character => 
        character.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const filterList = nameFilter ? filteredCharacterList : characterList;

  //Router DOM
  const { pathname } = useLocation()
  
  const characterRoute = matchPath("/detail/:id", pathname)

  const characterIdUrl = characterRoute ? characterRoute.params.id : null;
  
  const characterDetail = characterList.find(character => character.id == characterIdUrl)
  //aquí el triple igual no funcionaba

  return (
    <>
      <Routes>
        <Route path="/" element={
        <>
        <div className="logoDiv">
        <img src="./src/images/Rick_and_Morty.png" alt="Logo Rick & Morty" className="logoDiv_mainLogo"/>
        </div>

        <Filters changeFormDataText={changeFormDataText} nameFilter={nameFilter}/>

        <CharacterList characterList={filterList} />
        </>
      } />

        <Route path="/detail/:id" element={<CharacterDetail characterDetail={characterDetail}/>} />
        <Route path="*" element={<h2> Pagina no encontrada</h2>} />

      </Routes>
    </>
  )
}

export default App
