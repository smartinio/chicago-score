import { combineReducers } from 'redux';
import Players from './players';
import UI from './ui';

const ScoreApp = combineReducers({
  Players,
  UI,
});

export default ScoreApp;
