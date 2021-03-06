import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {

    // when movie poster is clicked, dispatch info to details reducer
    // and dispatch movie id to saga watcher for FETCH_GENRES
    // send user to /details page
    handleClick = () => {
        console.log( 'in handleClick', this.props.movie.id );
        this.props.dispatch({
            type: 'VIEW_DETAILS',
            payload: {
                id: this.props.movie.id,
                title: this.props.movie.title,
                description: this.props.movie.description
            }
        });
        this.props.dispatch( {type: 'FETCH_GENRES', payload: this.props.movie.id} );
        this.props.history.push( '/details' );
    } // end handleClick

    render() {
        return (
            <div className="movie-item">
                {/* displays each poster, which is clickable, along with its title */}
                <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.handleClick}/>
                <h3>{this.props.movie.title}</h3>
                {/* decided not to display description here but rather on /details instead */}
                {/* <p>{this.props.movie.description}</p> */}
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);