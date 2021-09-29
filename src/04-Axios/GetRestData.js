import axios from 'axios';
import React from 'react';

class GetRestData extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toDoId: '', data: { userid: '', id: '', title: '', completed: '' }, error: '' }
    }

    onToDoEnterId = (event) => {
        this.setState({ toDoId: event.target.value })
    }

    fetchDatabyId = () => axios.get('https://jsonplaceholder.typicode.com/todos/' + this.state.toDoId)
        .then(response => this.setState({ data: response.data }))
        .catch((error) => {
            console.log(error)
            this.setState({ error: error })
        })

    render() {
        return (
            <div>
                <label>Enter ToDo Id: <input type="number" id="toDoid" onChange={this.onToDoEnterId}></input></label><br />
                <button onClick={this.fetchDatabyId}>Click to Get Data</button><br />

                Output: {JSON.stringify(this.state.data)}
                {this.state.error === '' ? <div></div> : <div>{JSON.stringify(this.state.error.message)}</div>}
            </div>
        );
    }
}
export default GetRestData;