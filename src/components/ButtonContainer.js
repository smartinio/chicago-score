import { connect } from 'react-redux';
import Buttons from './Buttons';
import { increment, decrement, resetScores, resetExcept, markChicago, updateLog } from './../actions';

function mapDispatchToProps(dispatch) {
  return {
    increment: amount => dispatch(increment(amount)),
    decrement: amount => dispatch(decrement(amount)),
    resetAll: () => dispatch(resetScores()),
    resetExcept: () => dispatch(resetExcept()),
    markChicago: () => dispatch(markChicago()),
    updateLog: entry => dispatch(updateLog(entry)),
  };
}


function mapStateToProps(state) {
  const currentPlayer = state.Players.find(p => p.id === state.UI.selected);
  let currentPlayerName = '';

  if (currentPlayer) {
    currentPlayerName = currentPlayer.name !== '' ? currentPlayer.name : `Spelare ${state.Players.indexOf(currentPlayer) + 1}`;
  }

  return {
    currentPlayerName,
  };
}

const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Buttons);

export default ButtonContainer;
