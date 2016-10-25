const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
      return Object.assign({}, state, { selected : 42 });
    default:
      return state
  }
}

export default reducer;
