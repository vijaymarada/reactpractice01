import React from 'react';
import '../App.css'

class InputEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { userName: '' }
    }

    captureUserName = (event) => {
        this.setState({ userName: event.target.value })
    }
    render() {
        return (
            <div className="App">
                <label>Enter UserName:
                    <input type="text" id="userName" onChange={this.captureUserName}></input>
                </label>
                <br />
                <label>
                    Entered Name: {this.state.userName}
                </label>
            </div>
        );
    }
}
export default InputEvent;