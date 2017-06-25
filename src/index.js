import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const mapStateToProps = state => {
  return {
    hideButtons: !state.UI.present.showButtons,
  }
};

const ConnectedApp = connect(mapStateToProps)(App)

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
