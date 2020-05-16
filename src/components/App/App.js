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
    console.log( 'app mounted' );
    this.props.dispatch({ type: 'FETCH_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <h2>React App: Saga Movies Weekend</h2>
        <HashRouter>
          <Route exact path="/" component={ MovieList } />
          <Route path="/details" component={ ItemDetails } />
          <Route path="/edit" component={ ItemEdit } />
        </HashRouter>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(App);
