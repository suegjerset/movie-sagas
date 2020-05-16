import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  
  componentDidMount() {
    console.log( 'app mounted' );
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <p>React App: Saga Movies Weekend</p>
        <MovieList />
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(App);
