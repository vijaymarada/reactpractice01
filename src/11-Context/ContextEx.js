import React from 'react'
import '../App.css'
import Child from './Child'
import ColorContext from './ColorContext';

class ContextEx extends React.Component {
    render() {
        return (
            <div>
                <ColorContext.Provider value='Red'>
                    <Child></Child>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default ContextEx;