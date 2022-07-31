import React from "react";
import {Form, Field} from "react-final-form";

const LoginForm = (props) => {
    return (

        <Form onSubmit={(data) => props.LoginMe(data.email, data.password, data.rememberMe)}
              validate={values => {
                  let errors= {};
                  if(!values.email) {
                      errors.email = "None text"
                  }
                  if(!values.password) {
                      errors.password = "None text"
                  }
                  if(!values.rememberMe) {
                      errors.rememberMe = "Check block"
                  }

                  return errors
              }}
              render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <Field name={"email"}>
                              {({input, meta}) => (
                                  <div>
                                      <input {...input} type={"text"} placeholder={"Login"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                      </div>
                      <div>
                          <Field name={"password"}>
                              {({input, meta}) => (
                                  <div>
                                      <input {...input} type={"text"} placeholder={"Login"}/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                      </div>
                      <div>
                          <Field name={"rememberMe"}>
                              {({input, meta}) => (
                                  <div>
                                      <input {...input} type={"checkbox"}/>
                                      <label>Remember me</label>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                          </Field>
                          <div>
                              {props.messageError}
                          </div>
                      </div>
                      <button >Login</button>
                  </form>
              )}
        />
    )
}

export default LoginForm