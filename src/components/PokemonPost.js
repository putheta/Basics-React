import './PokemonPost.css'

function PokemonPost(props) {
    const {pokemon , onBgClick} = props
    return(
        <div className="pokemon-post">
            <div className="pokemon-post-bg" onClick={onBgClick}></div>
            <div className="pokemon-post-content">
                <img src={pokemon.thumbnailUrl}/>
                <h4>{pokemon.title}</h4>
            </div>
        </div>
    )
}

export default PokemonPost ;