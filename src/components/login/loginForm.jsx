import React from "react";
import {Form, Field} from "react-final-form";

const LoginForm = (props) => {
    return (
        <Form
            initialValues={{
                firstName: 'Login'
            }}
            // validate={(data) => { console.log(data)}}
            onSubmit={(formData) => {
                console.log(formData)
            }}>
            {({handleSubmit, pristine, form, submitting}) => (

                <form onSubmit={handleSubmit}>
                    <div>
                        <Field component={"input"} name={"login"} placeholder={"Login"}/>
                    </div>
                    <div>
                        <Field component={"input"} name={"password"} placeholder={"Password"}/>
                    </div>
                    <div>
                        <Field component={"input"} name={"checkbox"} id="checkbox" type={"checkbox"}/>
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <div>
                        <button type={"submit"} disabled={submitting}>Login</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default LoginForm