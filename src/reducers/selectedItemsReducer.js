const initState = [];
const selectedItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SELECTED_ITEMS':
      return {
        data: action.data,
      };
    default: return state
  }
}
export default selectedItemsReducer;
