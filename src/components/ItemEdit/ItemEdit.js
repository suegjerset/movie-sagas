import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemEdit extends Component {

    componentDidMount() {
        console.log('in ItemEdit', this.props);
    }

    render() {
        return (
            <div>
                <h1>Item Edit</h1>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemEdit);