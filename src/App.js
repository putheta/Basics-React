import { useState } from 'react';
import './App.css'
import AppHeader from './components/AppHeader';
import PokemonItem from './components/PokemonItem';
import PokemonPost from './components/PokemonPost';
import pokemons from './data/pokemons';
import AppSearch from './components/AppSearch';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchText , setSearchText] = useState('')

  function onPokemonClick(thePokemon) {
    setSelectedPokemon(thePokemon); //เป็นการเปลี่ยนค่า state
  }

  function onPokemonCloseClick() {
    setSelectedPokemon(null)
  }

  
  const pokemonElements = pokemons.filter((pokemon)=>{return pokemon.title.includes(searchText)}).map((pokemon,index)=>{
    return <PokemonItem key={index} pokemon={pokemon} onPokemonClick={onPokemonClick} />
  })

  let pokemonPost = null

  if(!!selectedPokemon) {
    pokemonPost = <PokemonPost pokemon={selectedPokemon} onBgClick={onPokemonCloseClick}/> //เอาค่ามาใส่ในนี้
  }

  return (
    
    <div className='app'>
      <AppHeader/>
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText}/>
          <div className='app-grid'>
            {pokemonElements}
          </div>
        </div>
      </section>

      {pokemonPost}

    </div>
  )
}
console.log('pokemons:', pokemons); // ควรเห็นเป็น array

export default App;