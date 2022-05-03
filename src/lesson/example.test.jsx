import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Count is: 0' })
  fireEvent.click(button)
  expect(button).toHaveTextContent('Count is: 1')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )

  fireEvent.keyDown(resetInput, {
    code: 'Enter',
    target: { value: 'reset' },
  })
  expect(button).toHaveTextContent('Count is: 0')
})
