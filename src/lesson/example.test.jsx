import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

beforeEach(() => {
  render(<App />)
})

it('should render a heading', () => {
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
})

it('should render a logo', () => {
  expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
})
