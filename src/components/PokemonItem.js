import './PokemonItem.css'

function PokemonItem(props) {
    const { pokemon , onPokemonClick } = props
    return (
        <div className='pokemon-item'>
          <img src={pokemon.thumbnailUrl} onClick={() => {onPokemonClick(pokemon)}}/>
          <h4>{pokemon.title}</h4>
        </div>
    )
}

export default PokemonItem ; 