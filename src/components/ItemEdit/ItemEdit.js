import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemEdit extends Component {

    state = {
        id: this.props.reduxState.details.id,
        title: '',
        description: ''
    }

    componentDidMount() {
        console.log( 'in ItemEdit', this.props);
    }

    cancelClick = () => {
        console.log( 'Cancel Button clicked' );
        this.props.history.goBack();
    } // end cancelClick

    descriptionChange = (event) => {
        // console.log('in descriptionChange', event.target.value);
        console.log( 'in descriptionChange' );
        this.setState({
            description: event.target.value
        }) // end setState
    } // end handleChange

    titleChange = (event) => {
        // console.log( 'in titleChange', event.target.value);
        console.log( 'in titleChange' );
        this.setState({
            title: event.target.value
        }) // end setState
    } // end titleChange

    saveClick = () => {
        console.log( 'Save Button clicked' );
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state })
        this.props.history.push( '/details' );
    } // end saveClick

    render() {
        return (
            <div>
                <h3>Editing: {this.props.reduxState.details.title}</h3>
                <div>
                    <button onClick={this.cancelClick}>Cancel</button>
                    <button onClick={this.saveClick}>Save</button>
                </div>
                <div>
                    <input type="text" placeholder="enter movie title" 
                        onChange={this.titleChange}/>
                </div>
                <div>
                    <textarea placeholder="enter movie description" rows="5" cols="25" 
                        onChange={this.descriptionChange}></textarea>
                </div>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemEdit);