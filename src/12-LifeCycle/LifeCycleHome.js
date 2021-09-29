import './App.css';
import React from 'react';
class LifeCycleHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
    console.log('Constructor')
  }
  componentDidMount() {
    console.log('Component did mount called')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
  }
  componentWillMount() {
    console.log('Component will mount called')
  }
  render() {
    return (<div>{JSON.stringify(this.state.data)}</div>)
  }
}
export default LifeCycleHome;