import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

class MovieList extends Component {

    componentDidMount() {
        console.log( 'MovieList mounted' );
    }

    render() {
        console.log( 'movies array mapped' );
        return (
            <div className="movie-list">
                {/* map through movies reducer and send each individual item to 
                MovieItem component along with the ability to use history */}
                {this.props.reduxState.movies.map (movie => 
                    <MovieItem key={movie.id} movie={movie} history={this.props.history}/>
                )}
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieList);