
function Filters({ changeFormDataText, nameFilter }) {

    const handleChange = (ev) => {
        changeFormDataText(ev.target.value);
    }

  return (
    <div className="filter">
        <label htmlFor="name" className="filter_text">¡Find your favorite character!</label>
        <input 
          type="text"  
          placeholder="e.g. Morty" 
          name="name" id="name" 
          className="filter_input"
          onChange={handleChange} 
          value={nameFilter}
        />
    </div>
  )
}

export default Filters