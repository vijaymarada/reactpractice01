import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios'


export default function HFormikFormPost() {
    const [resultResponse, setResponse] = useState('notSubmitted')

    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
            userId: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            axios({
                method: "post",
                url: "https://jsonplaceholder.typicode.com/posts",
                data: JSON.stringify(values),
                headers: { "Content-Type": "application/json; charset=UTF-8" },
            })
                .then((response) => setResponse(response))
                .then((error) => console.log(error))
        },
    });
    return (

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="Title">First Name</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <label htmlFor="Body">Last Name</label>
            <input
                id="body"
                name="body"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.body}
            />
            <label htmlFor="email">userId</label>
            <input
                id="userId"
                name="userId"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.userId}
            />
            <button type="submit">Submit</button>
            <br />
            Response is {JSON.stringify(resultResponse)}
        </form>
    )
}