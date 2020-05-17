import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import ItemEdit from '../ItemEdit/ItemEdit';
import ItemDetails from '../ItemDetails/ItemDetails';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  
  componentDidMount() {
    console.log( 'app mounted', this.props );
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <h2>React App: Saga Movies Weekend</h2>
        <HashRouter>
          <Route exact path='/' render={(props) => 
            <MovieList {...props} dispatch={this.props.dispatch}/>} />
          <Route path='/details' render={(props) =>
            <ItemDetails {...props} dispatch={this.props.dispatch} />} /> 
          <Route path='/edit' render={(props) =>
            <ItemEdit {...props} dispatch={this.props.dispatch} />} />
        </HashRouter>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(App);
