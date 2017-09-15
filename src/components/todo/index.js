/**
 * ====================================================================================================
 * Name    : Todo Script
 * File    : todo.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance
import List from "./list"

/**
 * Todo Component
 */
class Todo extends Component {

    // Constructor
    constructor(props) {

        // Base
        super(props);

        // Property
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { items: [], text: '' };
    }

    // Events 

    // Change
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    // Submit
    handleSubmit(e) {

        // No Action
        e.preventDefault();

        // Define new item
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };

        // Set Item
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    // Render Element
    render() {
        return (
            <div id="todos">
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group">
                        <label>{this.title}</label>
                        <input onChange={this.handleChange} value={this.state.text} type="text" className="form-control" />
                        <span className="input-group-addon">{(this.state.items.length + 1)}</span>
                    </div>
                    <button type="submit" className="btn-success">{'Add'}</button>
                </form>
                <List items={this.state.items}></List>
            </div>
        );
    }
}

// Export Module
export default Todo