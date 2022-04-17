import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { App } from '../App'

afterEach(() => {
  cleanup()
})

it('should render a basic demo', () => {
  render(<App />)
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
})
