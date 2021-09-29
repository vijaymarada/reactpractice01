import '../App.css'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function HFormPostUnControlled() {
    const TitleRef = React.createRef()
    const BodyRef = React.createRef()
    const UseridRef = React.createRef()

    const [resultResponse, setResponse] = useState('notSubmitted')

    const postFormData = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: JSON.stringify({ title: TitleRef.current.value, body: BodyRef.current.value, userid: UseridRef.current.value }),
            headers: { "Content-Type": "application/json; charset=UTF-8" },
        })
            .then((response) => setResponse(response))
            .then((error) => console.log(error))
    }
    return (
        <div className="App">
            <form onSubmit={postFormData}>
                <label>Enter Title</label>
                <input type="text" name="title" ref={TitleRef}></input>
                <br />
                <label>Enter Body</label>
                <input type="text" name="title" ref={BodyRef}></input>
                <br />
                <label>Enter User Id</label>
                <input type="number" name="title" ref={UseridRef}></input>
                <br />
                <button type='submit'> Submit</button>
                <br></br>
                Response is {JSON.stringify(resultResponse)}
            </form>

        </div>
    )

}