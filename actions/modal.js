export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = (id, title) => ({
  type: OPEN_MODAL,
  id,
  title
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})