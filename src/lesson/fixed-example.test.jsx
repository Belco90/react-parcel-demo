import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'

it('should reset counts - using fireEvent', async () => {
  render(<App />)

  const countButton = screen.getByRole('button')
  expect(countButton).toHaveTextContent('Count is: 0')
  fireEvent.click(countButton)
  expect(countButton).toHaveTextContent('Count is: 1')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )
  fireEvent.keyDown(resetInput, {
    code: 'Enter',
    target: { value: 'reset' },
  })
  expect(countButton).toHaveTextContent('Count is: 0')
})

it('should reset counts - using userEvent', async () => {
  render(<App />)

  const countButton = screen.getByRole('button')
  expect(countButton).toHaveTextContent('Count is: 0')
  userEvent.click(countButton)
  expect(countButton).toHaveTextContent('Count is: 1')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )
  await userEvent.type(resetInput, 'reset', { delay: 15 })
  userEvent.keyboard('{enter}')
  expect(countButton).toHaveTextContent('Count is: 0')
})
