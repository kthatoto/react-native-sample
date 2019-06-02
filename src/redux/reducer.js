import initialState from './initialState'
export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        opening: true
      }
    default:
      return state
  }
}
