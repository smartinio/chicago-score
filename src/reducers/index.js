import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import Players from './players'
import UI from './ui'

const ScoreApp = combineReducers({
  Players: undoable(Players),
  UI: undoable(UI)
})

export default ScoreApp