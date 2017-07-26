import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'font-awesome-webpack';
import ButtonContainer from './components/ButtonContainer';
import TableContainer from './components/TableContainer';
import './App.css';
import './../node_modules/animate.css/animate.min.css';
import './../node_modules/bulma/css/bulma.css';

class App extends Component {

  displayMode() {
    return this.props.hideButtons ? 'none' : '';
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
      boxSizing: 'border-box',
    };
  }

  render() {
    return (
      <div className="App">

        <div className="container" style={{ height: '100vH', overflow: 'hidden' }}>
          <div className="section">
            <TableContainer />
          </div>
        </div>

        <div className="animated slideInUp" style={this.buttonContainerStyle()}>
          <ButtonContainer />
        </div>

        <ToastContainer
          position="bottom-center"
          style={{ marginBottom: '180px', borderRadius: '90px' }}
          closeButton={false}
          hideProgressBar
          autoClose={2500}
        />
      </div>
    );
  }
}

App.PropTypes = {
  hideButtons: PropTypes.bool.isRequired,
};

export default App;
