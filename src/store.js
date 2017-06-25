import { compose, createStore } from 'redux';
import ScoreApp from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist'

let store = createStore(ScoreApp,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
compose(
  autoRehydrate()
));

persistStore(store)
export default store;