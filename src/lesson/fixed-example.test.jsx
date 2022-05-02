import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  await screen.findByText('Hello Parcel + React!')
  expect(
    await screen.findByRole('button', { name: 'Count is: 0' }),
  ).toBeInTheDocument()
})
