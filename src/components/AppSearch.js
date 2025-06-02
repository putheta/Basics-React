import "./AppSearch.css"

function AppSearch(props) {
    const { value,onValueChange } = props
    return (
      <div className='app-search'> 
        <input
          class="app-search-input"
          type="text"
          placeholder="Who's that pokemon?"
          value={value}
          onChange={(event)=>{onValueChange(event.target.value)}}
        />
      </div>
    )
}

export default AppSearch