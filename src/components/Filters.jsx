
function Filters({ changeFormDataText, nameFilter }) {

    const handleChange = (ev) => {
        console.log(ev.target.value)
        changeFormDataText(ev.target.value);
    }

  return (
    <div>
        <label htmlFor="name">Encuentra tu personaje favorito</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={nameFilter}/>
    </div>
  )
}

export default Filters