import '../App.css'
import { useState } from 'react'

export default function HCounter() {


    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return (
        <div className="App">
            Counter is {counter}
            <br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    )

}