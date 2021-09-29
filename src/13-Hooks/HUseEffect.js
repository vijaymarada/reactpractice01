import '../App.css'
import { useEffect, useState } from 'react'

export default function HUseEffect() {

    const [data, setData] = useState([])
    const [type, setType] = useState('todos')
    useEffect(() => {
        //Works like componentDidMount in Class components
        //invokes when page loads
        fetch('https://jsonplaceholder.typicode.com/' + type)  
            .then((response) => response.json()) 
            .then((json) => setData(json));
        return () => {
            //Any cleanup activities
        }
    }, [type])  // once this type is changes, this useEffects calls again
    return (
        <div className="App">
            <label>Select to fetch</label>
            <select onChange={(event) => setType(event.target.value)}>
                <option value="todos">Todos</option>
                <option value="posts">Posts</option>
            </select>
            <br />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (<tr><td>{row.id}</td><td>{row.userId}</td><td>{row.title}</td></tr>))}
                </tbody>
            </table>
        </div>
    );
}