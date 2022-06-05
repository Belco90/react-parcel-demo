import React, { useEffect, useState } from 'react'
import logo from '../logo.svg'

const CountDemo = () => {
  const [secondsOpen, setSecondsOpen] = useState(0)
  const [clicksCount, setClicksCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setSecondsOpen((prevSecondsOpen) => prevSecondsOpen + 1),
      1000,
    )
    return () => clearTimeout(timer)
  }, [])

  const handleCountReset = (event) => {
    if (
      event.code === 'Enter' &&
      event.target.value.toLowerCase() === 'reset'
    ) {
      setClicksCount(0)
      setSecondsOpen(0)
    }
  }

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="React logo" />
      <h1>Hello Parcel + React!</h1>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>Page has been open for {secondsOpen} seconds.</p>
      <p>
        <button
          type="button"
          onClick={() => setClicksCount((count) => count + 1)}
        >
          Count is: {clicksCount}
        </button>
      </p>

      <p>
        <label>
          Write &quot;reset&quot; and hit enter to reset all the counts:
          <br />
          <input
            type="text"
            placeholder='Type "reset" here'
            onKeyDown={handleCountReset}
          />
        </label>
      </p>

      <p>
        <a
          className="App-link"
          href="demos/CountDemo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="demos/CountDemo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Parcel Docs
        </a>
      </p>
    </div>
  )
}

export default CountDemo
