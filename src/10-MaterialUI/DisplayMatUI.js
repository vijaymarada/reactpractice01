import TableMaterialUI from "./TableMaterialUI";
import React from "react";
import '../App.css';

class DisplayMatUI extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tabledata: [] }
    }

    fetchAllData = () => fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => this.setState({ tabledata: json }))
    render() {
        return (
            <div>
                <button onClick={this.fetchAllData}>Click to get data</button><br />
                <TableMaterialUI tabledata={this.state.tabledata}></TableMaterialUI>
            </div>
        )
    }
}
export default DisplayMatUI;