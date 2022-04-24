import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)
  const mainText = await screen.getByText('Hello Parcel + React!')
  expect(mainText).toBeInTheDocument()
})
