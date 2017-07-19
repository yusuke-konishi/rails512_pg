import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <div>Counter = {this.state.counter}</div>
        <button onClick={this.increment}>Click me!</button>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Counter />,
    document.getElementById('counter')
  )
})
