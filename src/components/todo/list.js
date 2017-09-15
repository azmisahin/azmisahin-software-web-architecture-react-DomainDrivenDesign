/**
 * ====================================================================================================
 * Name    : List Script
 * File    : list.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance

/**
 * List Component
 */
class List extends Component {

    // Events 

    // Render Element
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map(item => (
                    <li className={"list-group-item " + item.text} key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

// Export Module
export default List