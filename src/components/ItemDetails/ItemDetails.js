import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetails extends Component {

    componentDidMount() {
        console.log( 'ItemDetails mounted', this.props);
    }

    render() {
        let movie = this.props.reduxState.details
        return (
            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.details)}</p> */}
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemDetails);