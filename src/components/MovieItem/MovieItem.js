import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.movies.)}</p> */}
                <h3>Movie Item</h3>
                <li>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} />
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.description}</p>
                </li>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);