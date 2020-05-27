import React from 'react'
import { Button, Overlay } from 'react-native-elements';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions/todos'
import { closeModal } from '../actions/modal'

const ConfirmDeleteModal = () => {

  const dispatch = useDispatch()

  const { modalOpen, idToDelete, titleToDelete } = useSelector(state => state.modal)

  const onConfirm = () => {
    dispatch(deleteTodo(idToDelete, titleToDelete))
    dispatch(closeModal())
  }

  const onClose = () => dispatch(closeModal())

  return (
    <Overlay isVisible={modalOpen} onBackdropPress={onClose} animationType='fade' height='auto'>
      <View style={{padding: 10}}>
        <Text style={{color: 'white'}}>Are you sure you want to delete "{titleToDelete}"?</Text>
        <View style={{paddingTop: 10}}>
          <Button title='Delete' onPress={onConfirm}/>
          <Button title='Cancel' type='clear' onPress={onClose}/>
        </View>
      </View>
    </Overlay>
  )
}

export default ConfirmDeleteModal