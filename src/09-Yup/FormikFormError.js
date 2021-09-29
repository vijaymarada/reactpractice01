import React from 'react'
import '../App.css'
import { Formik, Field, Form } from 'formik'
import ValidationSchema from './ValidationSchema'

class FormikFormError extends React.Component {
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
                validationSchema={ValidationSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstName">First Name: </label>
                        <Field name="firstName"></Field> <br />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <label htmlFor="lastName">Last Name: </label>
                        <Field name="lastName"></Field><br />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <label htmlFor="email">Email: </label>
                        <Field name="email"></Field> <br />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}</Formik>
        )
    }
}
export default FormikFormError;