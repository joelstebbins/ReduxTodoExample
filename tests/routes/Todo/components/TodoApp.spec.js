import React from 'react'
import { TodoApp } from 'routes/Todo/components/App'
import { render } from 'enzyme'

describe('(View) Todo', () => {
  let _component

  beforeEach(() => {
    _component = render(<TodoApp />)
  })

  it.skip('Renders a form to capture the task', () => {
    const form = _component.find('form')
    expect(form).to.exist
  })

  it.skip('Should render exactly one button.', () => {
    expect(_component.find('button')).to.have.length(1)
  })

  it.skip('Renders a footer to filter the list', () => {
    const footer = _component.find('p')
    expect(footer).to.exist
  })
})
