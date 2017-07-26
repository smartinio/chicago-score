import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import 'moment/locale/sv';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import wrapper from './wrapper';
import './index.css';


function mapStateToProps(state) {
  return {
    hideButtons: !state.UI.showButtons,
  };
}

const render = wrapper(connect(mapStateToProps)(App));

ReactDOM.render(render.app, render.root);
registerServiceWorker();
