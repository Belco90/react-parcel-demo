import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)

  screen.getByAltText('React logo')
  screen.getByText('Hello Parcel + React!')
  screen.getByRole('button', { name: 'Count is: 0' })
  screen.getByText('Hello Parcel + React!')
  screen.getByText('Parcel Docs')
})
