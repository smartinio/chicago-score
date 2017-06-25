import { connect } from 'react-redux'
import PlayerTable from './PlayerTable'
import { showButtons, selectPlayer, addPlayer, removePlayer, getClass, revokeChicago, setName, raiseBaseID, fullReset } from './../actions'

const mapStateToProps = state => {
  return {
    players: state.Players.present,
    selected: state.UI.present.selected,
    baseID: state.UI.present.baseID
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onRowClick: (id, current) => {
      if (id === current)
        dispatch(selectPlayer(-1));
      else
        dispatch(selectPlayer(id))
    },

    getClass: id => {
      dispatch(getClass(id))
    },

    addRow: id => {
      dispatch(addPlayer(id))
    },

    revokeChicago: () => {
      dispatch(revokeChicago())
    },

    editPlayerName: (name, id) => {
      dispatch(setName(name, id))
    },

    raiseBaseID: () => {
      dispatch(raiseBaseID())
    },

    showButtons: (show) => {
      dispatch(showButtons(show))
    },

    removalHandler: id => {
      if (id === -1)
        dispatch(fullReset());
      else
        dispatch(removePlayer(id));

      dispatch(selectPlayer(-1))
    }
  }
};

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerTable);

export default TableContainer