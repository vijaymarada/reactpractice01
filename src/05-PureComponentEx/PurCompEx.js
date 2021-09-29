import React from "react";
import '../App.css';


class PureCompEx extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0, message: '' }
    }

    increment = () => 
        this.setState({ counter: this.state.counter + 1, message: 'Hello' })
        render(){
            return (
                <div className='App'>

                    <button onClick={this.increment} >increment</button>
                    <br />
                <label>Counter: {this.state.counter}, Message {this.state.message}</label>
                </div>

            );
        }
    }
export default PureCompEx;