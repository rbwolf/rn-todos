import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  return (
    todos.map(item => <Todo key={item.id} todo={item} />)
  )
}

export default TodoList