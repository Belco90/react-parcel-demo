import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  const heading = await screen.findByText('Hello Parcel + React!')
  expect(heading).toBeInTheDocument()

  await waitFor(() =>
    expect(screen.getByText('Count is: 0')).toHaveAttribute('type', 'button'),
  )
})
