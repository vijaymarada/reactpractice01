import '../App.css';
import React from 'react';
import Button from '@mui/material/Button';
import SelectLogic from './SelectLogic';
import TableSelectUI from './TableSelectUI';
class SelectUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabledata: [], type: '' }
  }
 
  captureChange = (event) => this.setState({ type: event.target.value })
 
  fetchalldata = () => fetch('https://jsonplaceholder.typicode.com/' + this.state.type)
    .then(response => response.json())
    .then(json => this.setState({ tabledata: json }))
 
  render() {
    return (
      <div>
        <SelectLogic captureChange={this.captureChange}></SelectLogic>
        <Button variant="contained" onClick={this.fetchalldata}>Click to get data</Button><br />
        <TableSelectUI type={this.state.type} tabledata={this.state.tabledata} />
 
      </div>
    )
  }
 
}
 
export default SelectUI