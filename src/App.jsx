import React, { useState } from 'react'
import './App.css'
import CountDemo from './demos/CountDemo'
import PokemonDemo from './demos/PokemonDemo'
import WeatherDemo from './demos/WeatherDemo'

const COUNT_DEMO = 'count'
const POKEMON_DEMO = 'pokemon'
const WEATHER_DEMO = 'weather'

const IncorrectDemo = () => <div>IncorrectDemo</div>

const DEMO_COMPONENTS_MAP = {
  [COUNT_DEMO]: CountDemo,
  [POKEMON_DEMO]: PokemonDemo,
  [WEATHER_DEMO]: WeatherDemo,
}

const getDemoComponent = (demoValue) => {
  return DEMO_COMPONENTS_MAP[demoValue] ?? IncorrectDemo
}

export const App = () => {
  const [activeDemo, setActiveDemo] = useState(COUNT_DEMO)

  const handleDemoClick = (event) => {
    setActiveDemo(event.target.value)
  }

  const DemoComponent = getDemoComponent(activeDemo)

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <button type="button" onClick={handleDemoClick} value={COUNT_DEMO}>
            Count demo
          </button>
          <button type="button" onClick={handleDemoClick} value={POKEMON_DEMO}>
            Pokémon demo
          </button>
          <button type="button" onClick={handleDemoClick} value={WEATHER_DEMO}>
            Weather demo
          </button>
        </div>
        <hr style={{ width: '100%' }} />
        {<DemoComponent />}
      </div>
    </div>
  )
}
