import { connect } from 'react-redux';
import PlayerTable from './PlayerTable';
import { showButtons, selectPlayer, addPlayer, removePlayer, getClass, revokeChicago, setName, raiseBaseID, fullReset } from './../actions';

function mapStateToProps(state) {
  return {
    Players: state.Players,
    selected: state.UI.selected,
    baseID: state.UI.baseID,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getClass: id => dispatch(getClass(id)),
    addRow: id => dispatch(addPlayer(id)),
    revokeChicago: () => dispatch(revokeChicago()),
    editPlayerName: (name, id) => dispatch(setName(name, id)),
    raiseBaseID: () => dispatch(raiseBaseID()),
    showButtons: show => dispatch(showButtons(show)),
    removalHandler: (id) => {
      if (id === -1) {
        dispatch(fullReset());
      } else {
        dispatch(removePlayer(id));
      }
      dispatch(selectPlayer(-1));
    },
    onRowClick: (id, current) => {
      if (id === current) {
        dispatch(selectPlayer(-1));
      } else {
        dispatch(selectPlayer(id));
      }
    },
  };
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerTable);

export default TableContainer;
