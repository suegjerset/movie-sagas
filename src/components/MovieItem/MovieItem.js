import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

    state = {
        id: ''
    }

    handleClick = () => {
        console.log( 'in handleClick' );
        this.setState({
            id: this.props.movie.id
        }); 
        this.props.dispatch({
            type: 'VIEW_DETAILS',
            payload: this.state
        });
    } // end handleClick

    render() {
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.movies.)}</p> */}
                <li>
                    <img src={this.props.movie.poster} alt={this.props.movie.title} 
                    onClick={this.handleClick}/>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.description}</p>
                </li>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieItem);