import { useEffect, useState } from "react";
import headerImg from "../images/mortyrick.png"
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import getDataFromAPi from "../services/api";
import Filters from "./Filters";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import FilterByStatus from "./FilterByStatus";
import Footer from "./Footer";

function App() {

  const [characterList, setCharacterList] = useState([])
  const [filteredCharacterList, setFilteredCharacterList] = useState([]);
  const [nameFilter, setNameFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  useEffect(() => {
    getDataFromAPi().then((newArray) => { setCharacterList(newArray) })
  }, [])


  //Filter by text
  const changeFormDataText = (value) => {
    setNameFilter(value); 
    setFilteredCharacterList(
      characterList.filter(character => 
        character.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  let filterList = nameFilter ? filteredCharacterList : characterList;

  if (statusFilter) {
    filterList = filterList.filter(character => character.status === statusFilter)
  } 


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
        <img src={headerImg} alt="Logo Rick & Morty" className="logoDiv_mainLogo"/>
        </div>

        <Filters changeFormDataText={changeFormDataText} nameFilter={nameFilter}/>
        <FilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>

        <CharacterList characterList={filterList} />

        <Footer />
        
        </>
      } />

        <Route path="/detail/:id" element={<CharacterDetail characterDetail={characterDetail}/>} />
        <Route path="*" element={<h2> Pagina no encontrada</h2>} />

      </Routes>
    </>
  )
}

export default App
