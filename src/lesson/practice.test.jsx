/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'

it('should reset counts - using fireEvent', async () => {
  render(<App />)

  const countButton = screen.getByRole('button')
  expect(countButton).toHaveTextContent('Count is: 0')
  fireEvent.click(countButton)
  await fireEvent.click(countButton)
  expect(countButton).toHaveTextContent('Count is: 2')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )
  await fireEvent.keyDown(resetInput, {
    code: 'Enter',
    target: { value: 'something else' },
  })
  expect(countButton).toHaveTextContent('Count is: 2')

  await fireEvent.keyDown(resetInput, {
    target: { value: 'reset' },
  })
  expect(countButton).toHaveTextContent('Count is: 2')

  await fireEvent.keyDown(resetInput, {
    code: 'Enter',
  })
  expect(countButton).toHaveTextContent('Count is: 0')
})

it('should reset counts - using userEvent', async () => {
  render(<App />)

  const countButton = screen.getByRole('button')
  expect(countButton).toHaveTextContent('Count is: 0')
  userEvent.click(countButton)
  await userEvent.click(countButton)
  expect(countButton).toHaveTextContent('Count is: 2')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )
  await userEvent.type(resetInput, 're')
  await userEvent.type(resetInput, 'se', { delay: 200 })
  await userEvent.type(resetInput, 'tt', { delay: 0 })
  await userEvent.type(resetInput, '{backspace}', { delay: 15 })
  await userEvent.keyboard('{enter}')
  expect(countButton).toHaveTextContent('Count is: 0')
})
