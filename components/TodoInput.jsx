import React, { useState } from 'react'
import { Input } from 'react-native-elements';
import { styles } from '../styles'
import { useDispatch } from 'react-redux';
import { submitTodo } from '../actions/todos'

const TodoInput = () => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onSubmitEditing = (e) => {
    dispatch(submitTodo(e.nativeEvent.text))
    setValue('')
  }
  
  return (
    <Input 
      containerStyle={styles.input} 
      placeholder='What do you want to do?' 
      value={value}
      onChangeText={(text) => setValue(text)}
      onSubmitEditing={(e) => onSubmitEditing(e)}
    />
  )
}

export default TodoInput