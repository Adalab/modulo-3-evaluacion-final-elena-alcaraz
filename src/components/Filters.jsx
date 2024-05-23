
function Filters({ changeFormDataText, nameFilter }) {

    const handleChange = (ev) => {
        changeFormDataText(ev.target.value);
    }

  return (
    <div className="filter">
        <label htmlFor="name" className="filter_text">¡Encuentra tu personaje favorito!</label>
        <input 
          type="text"  
          placeholder="Ej. Morty" 
          name="name" id="name" 
          className="filter_input"
          onChange={handleChange} 
          value={nameFilter}
        />
    </div>
  )
}

export default Filters