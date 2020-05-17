import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetails extends Component {

    componentDidMount() {
        console.log( 'ItemDetails mounted', this.props);
    }

    backClick = () => {
        console.log( 'Back Button clicked' );
        this.props.history.push('/');
    }

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

    render() {
        let movie = this.props.reduxState.details
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.genres)}</p> */}
                <button onClick={this.backClick}>Back to List</button>
                <button onClick={this.editClick}>Edit</button>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
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