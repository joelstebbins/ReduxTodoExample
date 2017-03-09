import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <div className="form-group">
        <label for="add-task">What is the Task?</label>
        <input id="add-task" className="form-control" ref={node => {
          input = node
        }} />
      </div>
      <button 
        className="btn btn-default"
        type="submit">
        Add it!
      </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
