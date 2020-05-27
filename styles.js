import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex:1, 
    justifyContent: 'space-between',
    backgroundColor: 'rgb(18, 18, 18)'
  },
  input: {
    marginBottom: 10,
  }
})

const theme = {
  colors: {
    primary: 'rgb(225, 119, 235)',
  },
  Input: {
    inputStyle: { color: 'white' }
  },
  CheckBox: {
    containerStyle: { backgroundColor: 'rgb(31, 31, 31)' },
    textStyle: { color: 'white' }
  },
  Header: {
    containerStyle: {backgroundColor: 'rgb(31, 31, 31)'}
  },
  Overlay: {
    overlayBackgroundColor: 'rgb(31, 31, 31)'
  },
}

export { styles, theme }