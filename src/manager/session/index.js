/**
 * ====================================================================================================
 * Name    : Session Manager Script
 * File    : session.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';
import { createStore } from 'redux'

// Referance
import CounterComponent from './components/counter'
import reducers from './reducers/index'

// Redux Store
const store = createStore(reducers)

/**
 * Session Manager
 */
class SessionManager extends Component {

  // Events 

  // Render Element
  render() {
    return (
      <CounterComponent
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    );
  }
}

// Export Module
export default SessionManager