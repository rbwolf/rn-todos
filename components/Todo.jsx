import React from 'react'
import { CheckBox } from 'react-native-elements';
import { openModal } from '../actions/modal'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todos'
import * as Haptics from 'expo-haptics';
 
const Todo = ({todo}) => {

  const dispatch = useDispatch()

  const toggleComplete = id => { dispatch(toggleTodo(id)) }

  const onLongPress = (id, title) => {
    Haptics.impactAsync()
    dispatch(openModal(id, title))
  }

  const textStyle = todo.complete 
    ? {fontSize: 20, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}
    : {fontSize: 20} 

  return (
    <CheckBox 
      title={todo.title} 
      textStyle={textStyle} 
      checked={todo.complete}
      onPress={() => toggleComplete(todo.id)}
      onLongPress={() => onLongPress(todo.id, todo.title)}
    />
  )
}

export default Todo