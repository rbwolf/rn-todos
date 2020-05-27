import { SUBMIT, TOGGLE, DELETE} from '../actions/todos'
import { v4 as uuid } from 'uuid'

const initialState = [{ id: 12345, title: 'Initial todo', complete: false }]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      return [...state, { id: uuid(), title: action.title, complete: false }]
    case TOGGLE: 
      return state.map(todo => 
        todo.id == action.id 
          ? {...todo, complete: !todo.complete} 
          : todo)
    case DELETE:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default todos