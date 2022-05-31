import React, { useState } from 'react'
import './App.css'

/**
 * https://pokeapi.co/docs/v2#pokemon
 * @param {number} id
 */
const retrievePokemon = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  if (resp.ok) {
    const data = await resp.json()
    return data
  }

  return null
}

export const App = ({ shouldAwaitAdditionalPromise = false }) => {
  const [pokemon, setPokemon] = useState(undefined)

  const handlePokemonSearch = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    // this is an optionally awaited promise to require an extra tick of the event loop
    if (shouldAwaitAdditionalPromise) {
      await new Promise((resolve) => setTimeout(resolve, 900))
    }

    const data = await retrievePokemon(formData.get('pokemonId'))
    setPokemon(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handlePokemonSearch}>
          <label>
            Pick one Pokémon by their ID
            <div>
              <input
                type="number"
                name="pokemonId"
                min={1}
                max={898}
                required
              />
            </div>
            <button type="submit">Search</button>
          </label>
        </form>

        {pokemon === null && <div>Something went wrong</div>}
        {!!pokemon && (
          <div>
            <img
              src={pokemon.sprites.front_default}
              alt={`Sprite of ${pokemon.name}`}
            />

            <ul>
              <li>
                <strong>Name:</strong> {pokemon.name}
              </li>
              <li>
                <strong>Types:</strong>{' '}
                {pokemon.types.map(({ type }) => type.name).join(', ')}
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  )
}
