import React from 'react'
import { render, screen, wait, waitForElement } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  const heading = await waitForElement(() =>
    screen.getByText('Hello Parcel + React!'),
  )
  expect(heading).toBeInTheDocument()

  await wait(() =>
    expect(screen.getByText('Count is: 0')).toHaveAttribute('type', 'button'),
  )
})
