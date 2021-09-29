import '../App.css';
import { Formik, Field, Form } from 'formik';
import React from 'react';
class DataToPosRest extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: {} }
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ id: '', name: "", email: "", api: "" }}
                    onSubmit={(values) => fetch('https://jsonplaceholder.typicode.com/' + values.api + '/' + values.id)
                        .then(response => response.json())
                        .then(json => this.setState({ data: json }))}
                >
                    <Form>
                        <Field name="id" type="number" />
                        <Field name="name" type="text" />
                        <Field name="email" type="email" />
                        <label>
                            <Field type="radio" name="api" value="posts" />
                            Posts
                        </label>
                        <label>
                            <Field type="radio" name="api" value="comments" />
                            Comments
                        </label>
                        <label>
                            <Field type="radio" name="api" value="albums" />
                            Albums
                        </label>
                        <label>
                            <Field type="radio" name="api" value="todos" />
                            ToDos
                        </label>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <br />
                Data fetched {JSON.stringify(this.state.data)}
            </div>
        )
    }
}
export default DataToPosRest;