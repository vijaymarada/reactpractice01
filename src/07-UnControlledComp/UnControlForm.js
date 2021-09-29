import React from 'react'

class UncontrolledForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.firstName = React.createRef()
        this.self = React.createRef();
        this.language = React.createRef();

    }
    captureOnsubmit = (event) => {
        let formData = {}
        formData['firstName'] = this.firstName.current.value
        formData['self'] = this.self.current.value
        formData['language'] = this.language.current.value
        console.log(JSON.stringify(formData))
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.captureOnsubmit}>
                    <label>Enter the Name </label>
                    <input type="text" id='firstName' ref={this.firstName}></input><br />
                    <label>About yourself </label>
                    <textarea id='self' ref={this.self}></textarea>
                    <br />
                    <label>Languages you know </label>
                    <select ref={this.language}>
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
export default UncontrolledForm;