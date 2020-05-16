import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
    render() {
        console.log( 'list rendered' );
        return (
            <div>
                <ul>
                    {this.props.reduxState.movies.map ((movie) => {
                        return (
                            <MovieItem key={movie.id} movie={movie} />
                        );
                    })}
                </ul>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieList);