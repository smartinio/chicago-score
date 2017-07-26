export default function (state = [], action) {
  switch (action.type) {
    case 'FULL_RESET':
      return [];

    case 'ADD_PLAYER':
      return [...state, { id: action.id, name: '', score: 0, chicago: false }];

    case 'DELETE_PLAYER':
      return state.filter(player => player.id !== action.id);

    case 'SET_NAME':
      return state.map(player => player.id === action.id ? { id: player.id, name: action.name, score: player.score, chicago: player.chicago } : player);

    case 'INCREASE_SCORE':
      return state.map(player => player.id === action.id ? { id: player.id, name: player.name, score: player.score + action.amount, chicago: player.chicago } : player);

    case 'DECREASE_SCORE':
      return state.map(player => player.id === action.id ? { id: player.id, name: player.name, score: player.score - action.amount, chicago: player.chicago } : player);

    case 'RESET_SCORES':
      return state.map(player => ({ id: player.id, name: player.name, score: 0, chicago: false }));

    case 'RESET_EXCEPT':
      return state.map(player => player.id === action.id ? player : { id: player.id, name: player.name, score: 0, chicago: false });

    case 'MARK_CHICAGO':
      return state.map(player => player.id === action.id ? { id: player.id, name: player.name, score: player.score + 15, chicago: true } : player);

    case 'REVOKE_CHICAGO':
      return state.map(player => player.id === action.id ? { id: player.id, name: player.name, score: player.score, chicago: false } : player);

    default:
      return state;
  }
}
