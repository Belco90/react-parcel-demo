import React, { useEffect, useState } from 'react'

const retrieveMadridWeather = async () => {
  const resp = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=40.4167&longitude=-3.7033&current_weather=true',
  )

  if (resp.ok) {
    return await resp.json()
  }

  return null
}

/**
 *
 * @param {number} weatherCode
 * @return {string}
 */
const getWeatherCodeReadable = (weatherCode) => {
  return (
    {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
    }[weatherCode] ?? 'unknown'
  )
}

const WeatherDemo = ({ shouldAwaitAdditionalPromise = false }) => {
  const [madridWeather, setMadridWeather] = useState(undefined)

  useEffect(() => {
    const initMadridWeather = async () => {
      // this is an optionally awaited promise to require an extra tick of the event loop
      if (shouldAwaitAdditionalPromise) {
        await new Promise((resolve) => setTimeout(resolve, 0))
      }

      const weather = await retrieveMadridWeather()
      setMadridWeather(weather)
    }

    initMadridWeather()

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App-header">
      <h2>Weather in Madrid</h2>

      <div>
        {madridWeather === undefined && <div>Loading...</div>}
        {madridWeather === null && <div>Something went wrong...</div>}
        {!!madridWeather && (
          <ul>
            <li>Temperature: {madridWeather.current_weather.temperature}ºC</li>
            <li>
              Forecast:{' '}
              {getWeatherCodeReadable(
                madridWeather.current_weather.weathercode,
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default WeatherDemo
