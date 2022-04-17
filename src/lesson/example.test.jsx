import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
})
