import { combineReducers } from 'redux'
import undoable, { excludeAction } from 'redux-undo'
import Players from './players'
import UI from './ui'

const ScoreApp = combineReducers({
  Players: undoable(Players),
  UI: undoable(UI, {filter: excludeAction(['SHOW_BUTTONS', 'HIDE_BUTTONS', 'SELECT_PLAYER'])})
})

export default ScoreApp