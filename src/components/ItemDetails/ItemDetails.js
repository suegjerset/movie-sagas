import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetails extends Component {

    componentDidMount() {
        console.log( 'ItemDetails mounted', this.props);
    }

    backClick = () => {
        console.log( 'Back Button clicked' );
        this.props.history.goBack()
    }

    editClick = () => {
        console.log( 'Edit Button clicked' );
        this.props.dispatch({
            type: 'EDIT_DETAILS',
            payload: {
                id: this.props.reduxState.details.id,
                title: this.props.reduxState.details.title,
                description: this.props.reduxState.details.description
            }
        });
        this.props.history.push('/edit');
    }

    render() {
        let movie = this.props.reduxState.details
        // let genre = this.props.reduxState.genre
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.details)}</p> */}
                <button onClick={this.backClick}>Back to List</button>
                <button onClick={this.editClick}>Edit</button>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemDetails);