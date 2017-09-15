/**
 * ====================================================================================================
 * Name    : Timer Script
 * File    : timer.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance

/**
 * Timer Component
 */
class Timer extends Component {

    // Constructor
    constructor(props) {

        // Base
        super(props);

        // Property
        this.state = { secondsElapsed: 0 };
    }

    // Timer Tick 
    tick() {

        // Set State
        this.setState((prevState) => ({

            // Set State from old state
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    // Component Did Mount
    componentDidMount() {

        // Timer Start
        this.interval = setInterval(() => this.tick(), 1000);
    }

    // Component Un Mount
    componentWillUnmount() {

        // Timer Clear
        clearInterval(this.interval);
    }

    // Render Element
    render() {
        return (
            <div className="alert alert-secondary">
                {this.props.title}
                <span className="badge badge-primary">
                    {this.state.secondsElapsed}
                </span>
            </div>
        );
    }
}

// Export Module
export default Timer