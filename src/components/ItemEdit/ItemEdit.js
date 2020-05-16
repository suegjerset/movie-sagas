import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemEdit extends Component {

    componentDidMount() {
        console.log( 'in ItemEdit', this.props);
    }

    render() {
        return (
            <div>
                <h1>Item Edit</h1>
                <div>
                    <input type="text" placeholder="enter movie title" />
                </div>
                <div>
                    <textarea placeholder="enter movie description" rows="5" cols="25"></textarea>
                </div>
            </div>
        ); // end return
    } // end render
} // end class

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(ItemEdit);