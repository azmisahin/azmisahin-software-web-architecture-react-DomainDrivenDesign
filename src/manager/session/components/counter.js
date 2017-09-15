// Counter component
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Counter Conponent
 */
class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p className="alert alert-info">
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement} className="btn btn-primary">
          +
        </button>
        {' '}
        <button onClick={onDecrement} className="btn btn-primary">
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd} className="btn btn-primary">
          Odd
        </button>
        {' '}
        <button onClick={this.incrementAsync} className="btn btn-primary">
          Async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter