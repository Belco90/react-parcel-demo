import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

export const App = () => {
  const [secondsOpen, setSecondsOpen] = useState(0)
  const [clicksCount, setClicksCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setSecondsOpen((prevSecondsOpen) => prevSecondsOpen + 1),
      1000
    )
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>Hello Parcel + React!</h1>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          Page has been open for <code>{secondsOpen}</code> seconds.
        </p>
        <p>
          <button
            type="button"
            onClick={() => setClicksCount((count) => count + 1)}
          >
            Count is: {clicksCount}
          </button>
        </p>

        <p>
          <a
            className="App-link"
            href="https://beta.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://parceljs.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Parcel Docs
          </a>
        </p>
      </header>
    </div>
  )
}
