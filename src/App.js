import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ButtonContainer from './components/ButtonContainer';
import TableContainer from './components/TableContainer';
import 'font-awesome-webpack';
import './App.css';
import './../node_modules/animate.css/animate.min.css';
import './../node_modules/bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
        <div className="App">

          <div className="container">
            <div className="section">
              <TableContainer />
            </div>
          </div>

          <div className="animated slideInUp" style={ this.buttonContainerStyle() }>
            <ButtonContainer />
          </div>

        </div>
    );
  }

  displayMode() {
    return this.props.hideButtons ? 'none' : ''
  }

   buttonContainerStyle() {
    return {
      display: this.displayMode(),
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

App.PropTypes = {
  hideButtons: PropTypes.bool.isRequired
};

export default App;
