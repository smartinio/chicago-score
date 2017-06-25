export default function(state = {selected: -1, baseID: 1, showButtons: true}, action) {
  switch(action.type) {
    case 'FULL_RESET':
      return {selected: -1, baseID: 1, showButtons: state.showButtons};
    case 'SELECT_PLAYER':
      return {selected: action.id, baseID: state.baseID, showButtons: state.showButtons};
    case 'RAISE_BASE_ID':
      return {selected: state.selected, baseID: state.baseID + 1, showButtons: state.showButtons};
    case 'SHOW_BUTTONS':
      return {selected: state.selected, baseID: state.baseID, showButtons: true};
    case 'HIDE_BUTTONS':
      return {selected: state.selected, baseID: state.baseID, showButtons: false};
    default:
      return state;
  }
}