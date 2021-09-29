import React from 'react'
import '../App.css'
import { Formik, Field, Form } from 'formik'

class FormikEx extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Formik
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: ''
                    }
                }
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName"></Field>
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName"></Field>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email"></Field>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }
}
export default FormikEx;