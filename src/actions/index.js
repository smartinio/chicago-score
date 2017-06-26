import store from './../store'

export function increment(amount) {
  return {
    type: 'INCREASE_SCORE',
    amount,
    id: store.getState().UI.present.selected
  }
}

export function decrement(amount) {
  return {
    type: 'DECREASE_SCORE',
    amount,
    id: store.getState().UI.present.selected
  }
}

export function showButtons(show) {
  return {
    type: show ? 'SHOW_BUTTONS' : 'HIDE_BUTTONS'
  }
}

export function fullReset() {
  return {
    type: 'FULL_RESET'
  }
}

export function raiseBaseID() {
  return {
    type: 'RAISE_BASE_ID'
  }
}

export function resetScores() {
  return {
    type: 'RESET_SCORES'
  }
}

export function resetExcept() {
  return {
    type: 'RESET_EXCEPT',
    id: store.getState().UI.present.selected
  }
}

export function addPlayer(id) {
  return {
    type: 'ADD_PLAYER',
    id
  }
}

export function removePlayer(id) {
  return {
    type: 'DELETE_PLAYER',
    id
  }
}

export function selectPlayer(id) {
  return {
    type: 'SELECT_PLAYER',
    id
  }
}

export function getClass(id) {
  return {
    type: 'GET_CLASS',
    id
  }
}

export function markChicago() {
  return {
    type: 'MARK_CHICAGO',
    id: store.getState().UI.present.selected
  }
}

export function revokeChicago() {
  return {
    type: 'REVOKE_CHICAGO',
    id: store.getState().UI.present.selected
  }
}

export function setName(name, id) {
  return {
    type: 'SET_NAME',
    id,
    name
  }
}