
function FilterByStatus({ setStatusFilter, statusFilter }) {

    const handleChange = (ev) => {
        setStatusFilter(ev.target.value)
       
    }

  return (
    <div className="filterByStatus">
         <select name="" id="" onChange={handleChange} value={statusFilter} className="filterByStatus_input">
                <option value="">Choose your option</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
          </select>
    </div>
  )
}

export default FilterByStatus