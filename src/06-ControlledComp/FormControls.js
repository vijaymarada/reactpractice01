import React from 'react'

class FormControlex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', self: '', language: '' }
    }

    captureName = (event) => { this.setState({ name: event.target.value }) }
    captureTextArea = (event) => { this.setState({ self: event.target.value }) }
    captureLanguage = (event) => { this.setState({ language: event.target.value }) }
    captureOnsubmit = (event) => {
        console.log(JSON.stringify(this.state))
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.captureOnsubmit}>
                    <label>Enter the Name </label>
                    <input type="text" id='firstName' onChange={this.captureName}></input><br />
                    <label>About yourself </label>
                    <textarea id='self' onChange={this.captureTextArea}></textarea>
                    <br />
                    <label>Languages you know </label>
                    <select onChange={this.captureLanguage}>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="telugu">Telugu</option>
                    </select>
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </div>

        )
    }
}

export default FormControlex;