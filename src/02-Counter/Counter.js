import React from 'react';
import '../App.css';
import CounterFn  from './CounterFn';


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
        this.onIncrement = this.onIncrement.bind(this)
        //this.onDecrement = this.onDecrement.bind(this)
    }
    onIncrement() {
        this.setState({ counter: this.state.counter + 2 })    //Binding is required Line:8
    }
    onDecrement = () => this.setState({ counter: this.state.counter - 2 })  // Binding is not required

    render() {
        return (
            <div className="App">
                <p>Counter:  {this.state.counter}</p>
                <CounterFn counter= {this.state.counter} /><br />
                <button onClick={this.onIncrement}>Increment</button><br />
                <button onClick={this.onDecrement}>Decrement</button>
            </div>
        );
    }
}
export default Counter;