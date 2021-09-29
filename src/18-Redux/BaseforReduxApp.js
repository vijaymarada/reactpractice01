import '../App.css'
import React from 'react'
import { connect } from 'react-redux'

class BaseforReactRedux extends React.Component {
    //  ...............Counter Example.........................}
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }
    // ...............Counter Example - End......................... }

    todoIdref = React.createRef()
    dispatchFetch = () => {
        this.props.dispatch({ type: 'FETCH_TODO_ID', todoId: this.todoIdref.current.value })
    }

    dispatchFetchAll = () => {
        this.props.dispatch({ type: 'FETCH_TODOS_ALL' })
    }
    render() {
        return (<div>
            {/* ...............Counter Example......................... */}
            <label>Counter: {this.props.data.counter}</label> <br />
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <br />
            {/* ...............Counter Example......................... */}
            <br />
            <br />

            <label> Enter Todo id to Search</label>
            <input type="text" id="todoId" ref={this.todoIdref}></input>
            <br />
            <button onClick={this.dispatchFetch}>Fetch</button>
            <br />
            <button onClick={this.dispatchFetchAll}>Fetch All</button>
            <br />
            Todo id to fetch is {this.props.data.todoId} <br />
            Data fetched is {JSON.stringify(this.props.data.data)}
        </div>
        )
    }
}

const mapStateToProps = (state) => ({ data: state })
export default connect(mapStateToProps)(BaseforReactRedux)