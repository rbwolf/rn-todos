import React from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { styles, theme } from './styles'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import ConfirmDeleteModal from './components/ConfirmDeleteModal'
import reducer from './reducers/reducers'

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <View>
          <Header
            placement='left'
            leftComponent={{icon: 'menu', color: '#fff' }}
            centerComponent={{text: 'Todos', style: {color: '#fff', fontSize: 20}}}
          />
        </View>
        <KeyboardAvoidingView behavior='padding' style={styles.keyboardAvoidingView}>
          <ScrollView>
            <TodoList />
          </ScrollView>
          <TodoInput />
        </KeyboardAvoidingView>
        <ConfirmDeleteModal />
      </ThemeProvider>
    </Provider>
  )
}

export default App
