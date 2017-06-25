export default function(state = {selected: 0, baseID: 1}, action) {
  switch(action.type) {
    case 'FULL_RESET':
      return {selected: 0, baseID: 1};
    case 'SELECT_PLAYER':
      return {selected: action.id, baseID: state.baseID};
    case 'RAISE_BASE_ID':
      return {selected: state.selected, baseID: state.baseID + 1};
    default:
      return state;
  }
}