import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a heading', () => {
  render(<App />)
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
})

it('should render a logo', () => {
  render(<App />)
  expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
})
