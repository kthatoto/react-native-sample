export const addEvent = event => {
  return dispatch => {
    dispatch({
      type: 'ADD_EVENT',
      event
    })
  }
}