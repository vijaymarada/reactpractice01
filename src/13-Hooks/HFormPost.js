import axios from 'axios'
import { useState } from 'react'
import '../App.css'

export default function HFormPost() {
    const [formData, setFormData] = useState({ title: '', body: '', userId: '' })

    const [resultResponse, setResponse] = useState('notSubmitted')
    const captureTitle = (event) => setFormData(Object.assign({}, formData, { title: event.target.value }))
    const captureBody = (event) => setFormData(Object.assign({}, formData, { body: event.target.value }))
    const captureuserId = (event) => setFormData(Object.assign({}, formData, { userId: event.target.value }))
    const postFormData = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: JSON.stringify(formData),
            headers: { "Content-Type": "application/json; charset=UTF-8" },
        })
            .then((response) => setResponse(response))
            .then((error) => console.log(error))
    }
    // const postFormData = (event) => {
    //     event.preventDefault()
    //     console.log(JSON.stringify(formData))
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //       method: 'POST',
    //       body: JSON.stringify(formData),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((json) => setResponse(json));
    //   }
    return (

        <div className="App">
            <form onSubmit={postFormData}>
                <label>Enter Title</label>
                <input type="text" name="title" onChange={captureTitle}></input>
                <br />
                <label>Enter Body</label>
                <input type="text" name="title" onChange={captureBody}></input>
                <br />
                <label>Enter User Id</label>
                <input type="number" name="title" onChange={captureuserId}></input>
                <br />
                <button type='submit'> Submit</button>
                <br></br>
                Response is {JSON.stringify(resultResponse)}
            </form>

        </div>
    )
}