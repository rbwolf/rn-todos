export const TOGGLE = 'TOGGLE'
export const DELETE = 'DELETE'
export const SUBMIT = 'SUBMIT'

export const submitTodo = title => ({
  type: SUBMIT,
  title 
})

export const toggleTodo = id => ({
  type: TOGGLE,
  id
})

export const deleteTodo = id => ({
  type: DELETE,
  id
})