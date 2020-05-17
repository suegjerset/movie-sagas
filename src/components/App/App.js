import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import ItemEdit from '../ItemEdit/ItemEdit';
import ItemDetails from '../ItemDetails/ItemDetails';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  
  // display all movies on page load
  componentDidMount() {
    console.log( 'app mounted' );
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  // set up routers to specific pages for components
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-Title">Saga Movies Weekend</h1>
        </header>
        
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
