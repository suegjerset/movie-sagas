import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  
  componentDidMount() {
    console.log( 'app mounted' );
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(App);
