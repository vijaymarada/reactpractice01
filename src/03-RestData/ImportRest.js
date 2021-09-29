import React from 'react';
import ImportDataToTable from './ImportDataToTable';

class RestDataFromJson extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toDoid: '', data: { userid: '', id: '', title: '', completed: '' }, allData: [], tableView: 'false' }
    }

    captureTodoId = (event) => {
        this.setState({ toDoid: event.target.value })
    }

    fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/' + this.state.toDoid)
        .then(response => response.json())
        .then(resultById => this.setState({ data: resultById }))

    fetchAllData = () => fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(result => this.setState({ allData: result, tableView: 'true' }))
    render() {
        return (
            <div>
                <label>Enter Todo Id: <input type="number" id="inputId" onChange={this.captureTodoId} /></label>
                <br />
                <button onClick={this.fetchData}>Get Data</button>
                <br />
                Data fetched {JSON.stringify(this.state.data)}
                <br />
                <label>------------------ Fetch all Data---------------------------</label><br />
                <button onClick={this.fetchAllData}>Fetch All</button>
                <br />
                <ImportDataToTable restData={this.state.allData} tableView={this.state.tableView} />
            </div>

        );

    }
}
export default RestDataFromJson;