import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import ButtonContainer from './components/ButtonContainer';
import TableContainer from './components/TableContainer';
import 'font-awesome-webpack';
import './App.css';
import './../node_modules/bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <div className="container">
            <div className="section">
              <TableContainer />
            </div>
          </div>

          <div style={App.buttonContainerStyle()}>
            <ButtonContainer />
          </div>

        </div>
      </Provider>
    );
  }

  static buttonContainerStyle() {
    return {
      borderTop: '1px solid #d3d3d3',
      position: 'fixed',
      padding: '2rem',
      width: '100%',
      bottom: '0',
      margin: '0',
      backgroundColor: '#e9e9e9',
      boxSizing: 'border-box'
    }
  }
}

export default App;
