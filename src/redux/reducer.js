import initialState from './initialState'
export default (state = initialState, action) {
  switch(action.type) {
    case 'ADD_EVENT':
      return Object.assign(state, {
        events: state.events.concat(action.event)
      })
    default:
      return state
  }
}