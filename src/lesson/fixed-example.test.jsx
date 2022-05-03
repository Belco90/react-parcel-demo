import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Count is: 0' })
  userEvent.click(button)
  expect(button).toHaveTextContent('Count is: 1')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )

  userEvent.type(resetInput, 'reset')
  userEvent.keyboard('{enter}')
  expect(button).toHaveTextContent('Count is: 0')
})
