import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

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
            <div>
                <li>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.handleClick}/>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.description}</p>
                </li>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);