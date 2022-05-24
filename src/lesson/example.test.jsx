import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a count button', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: /count/gi })).toBeInTheDocument()
})
