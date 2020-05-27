import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal'

const initialState = {
  modalOpen: false,
  idToDelete: null,
  titleToDelete: ''
}

const modal = (state=initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalOpen: true,
        idToDelete: action.id,
        titleToDelete: action.title
      }
    case CLOSE_MODAL:
      return { modalOpen: false }
    default:
      return state
  }
}

export default modal