import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemEdit extends Component {

    // sets state with information from revise reducer
    state = {
        id: this.props.reduxState.revise.id,
        title: this.props.reduxState.revise.title,
        description: this.props.reduxState.revise.description
    }

    componentDidMount() {
        console.log( 'in ItemEdit' );
    }

    // cancel button takes user back to /details page
    cancelClick = () => {
        console.log( 'Cancel Button clicked' );
        this.props.history.goBack();
    } // end cancelClick

    // collects user input for movie description and updates local state
    descriptionChange = (event) => {
        // console.log('in descriptionChange', event.target.value);
        console.log( 'in descriptionChange' );
        this.setState({
            description: event.target.value
        }) // end setState
    } // end handleChange

    // collects user input for move title and updates local state
    titleChange = (event) => {
        // console.log( 'in titleChange', event.target.value);
        console.log( 'in titleChange' );
        this.setState({
            title: event.target.value
        }) // end setState
    } // end titleChange

    // dispatches updated information to saga
    // dispatches updated information to details reducer
    // sends user to /details page which will display updated movie information
    saveClick = () => {
        console.log( 'Save Button clicked' );
        this.props.dispatch( { type: 'UPDATE_MOVIE', payload: this.state } );
        this.props.dispatch( { type: 'VIEW_DETAILS', payload: this.state } );
        this.props.history.push( '/details' );
    } // end saveClick

    // renders current movie title, input boxes for revisions and Cancel/Save buttons
    render() {
        return (
            <div>
                <h3>Editing: {this.props.reduxState.details.title}</h3>
                <div>
                    <button onClick={this.cancelClick}>Cancel</button>
                    <button className="edit-btn" onClick={this.saveClick}>Save</button>
                </div>
                <p>Title:</p>
                <p><input type="text" placeholder="enter movie title" onChange={this.titleChange}/>
                </p>
                <p>Description:</p>
                <p><textarea placeholder="enter movie description" rows="5" cols="40" 
                    onChange={this.descriptionChange}></textarea>
                </p>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemEdit);