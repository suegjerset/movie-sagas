import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_MOVIES', fetchMovies);
    yield takeEvery( 'FETCH_GENRES', fetchGenres);
    yield takeEvery( 'UPDATE_MOVIE', updateMovie);
}

// generator functions
function* fetchMovies() {
    console.log( 'in fetchMovies' );
    try {
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log( 'error in fetching movies', error);
    }
} // end fetchMovies

function* fetchGenres(action) {
    console.log( 'in fetchGenres' );
    let id = action.payload;
    try {
        const response = yield axios.get(`/genres/${id}`);
        yield put({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
        console.log( 'error in fetching genres', error);
    }
} // end fetchGenres

function* updateMovie(action) {
    console.log( 'in updateMovie' );
    let id = action.payload.id;
    try {
        yield axios.put(`/movies/${id}`, (action.payload));
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log( 'error updating movie', error);
    }
} // end updateMovie

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store the clicked movie details
const details = (state = [], action) => {
    switch (action.type) {
        case 'VIEW_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from server/database
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres returned from server/database
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        details,
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware( sagaMiddleware, logger ),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
    document.getElementById('root'));
registerServiceWorker();
