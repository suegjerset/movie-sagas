import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Link } from 'react-router-dom';

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
    } // end handleClick

    render() {
        return (
            <div>
                <HashRouter>
                    <li>
                        <Link to='/details'>
                        <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.handleClick}/>
                        </Link>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.description}</p>
                    </li>
                </HashRouter>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);