import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ItemDetails.css';

class ItemDetails extends Component {

    componentDidMount() {
        console.log( 'ItemDetails mounted' );
    }
    // button goes back to home page
    backClick = () => {
        console.log( 'Back Button clicked' );
        this.props.history.push('/');
    }

    // when clicked, collects all movie information and dispatches to revise reducer
    // sends user to /edit page to modify movie information
    editClick = () => {
        console.log( 'Edit Button clicked' );
        let item = this.props.reduxState.details;
        this.props.dispatch({
            type: 'EDIT_DETAILS',
            payload: {
                id: item.id,
                title: item.title,
                description: item.description
            }
        });
        this.props.history.push( '/edit' );
    }

    // renders Back to List/Edit buttons and movie title/description for clicked poster
    // map through array from genres reducer and display genre name(s) specific movie
    render() {
        let movie = this.props.reduxState.details
        return (
            <div className="movie-details">
                {/* <p>{JSON.stringify(this.props.reduxState.genres)}</p> */}
                <button onClick={this.backClick}>Back to List</button>
                <button className="edit-btn" onClick={this.editClick}>Edit</button>
                <h2>{movie.title}</h2>
                <p><span className="description">Description:</span> {movie.description}</p>
                <h4>Genres:</h4>
                    <ul>
                        {this.props.reduxState.genres.map( item => 
                            <li key={item.name}>{item.name}</li>)}
                    </ul>   
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemDetails);