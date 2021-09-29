import React from 'react';

class CounterFn extends React.Component {
    render() {
        return (
        <b> Counter from function : {this.props.counter} </b> 
        )
    }
}

export default CounterFn;