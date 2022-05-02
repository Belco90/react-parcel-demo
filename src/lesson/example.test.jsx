import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  await waitFor(() => screen.getByText('Hello Parcel + React!'))
  await waitFor(() =>
    expect(
      screen.getByRole('button', { name: 'Count is: 0' }),
    ).toBeInTheDocument(),
  )
})
