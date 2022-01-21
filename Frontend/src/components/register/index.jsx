import React, { useState } from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesRegister } from "../../constants/initial-values-register"
import FormControl from "../form/FormControl"
import axiosHttp from "../../helpers/axiosHTTP"
import { Link, useNavigate } from "react-router-dom"
import TextError from "../form/text-error/TextError"
import Loader from "../loader/loader"

// styles
import { WrapperSignup, WrapperButton } from "./Register.Styles"

const Register = ({ buy, setShowRegister }) => {
  const navigate = useNavigate()
  const [messageError, setMessageError] = useState(false)
  const onSubmit = async (values) => {
    try {
      let api = axiosHttp()
      const url = `${process.env.REACT_APP_SERVER_URI}/register`
      const options = {
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      }

      const info = await api.post(url, options)
      if (buy && info.newUser.state) {
        setShowRegister(false)
      }
      if (!buy && info.newUser.state) navigate("/login")
    } catch (error) {
      if (error) {
        setMessageError(true)
        setTimeout(() => {
          setMessageError(false)
        }, 2000)
      }
    }
  }

  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <>
            {formik.isSubmitting ? (
              <Loader />
            ) : (
              <WrapperSignup buy={buy}>
                <Form className='form'>
                  <h3>Sign Up</h3>
                  <FormControl
                    control='input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    style={{
                      border: buy ? "none" : "",
                      borderBottom: buy && "1px solid black",
                    }}
                  />
                  <FormControl
                    control='input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    style={{
                      border: buy ? "none" : "",
                      borderBottom: buy && "1px solid black",
                    }}
                  />
                  <FormControl
                    control='input'
                    type='password'
                    name='password'
                    placeholder='Password'
                    style={{
                      border: buy ? "none" : "",
                      borderBottom: buy && "1px solid black",
                    }}
                  />
                  <FormControl
                    control='input'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm your password'
                    style={{
                      border: buy ? "none" : "",
                      borderBottom: buy && "1px solid black",
                    }}
                  />
                  {messageError && (
                    <TextError
                      styles={{ marginBottom: "30px", padding: "15px" }}
                    >
                      <span>user or password</span>
                    </TextError>
                  )}
                  <WrapperButton buy={buy}>
                    <button type={"onSubmit"}>Registrar</button>
                    <Link to={"#"} style={{ display: buy && "none" }}>
                      By registering, you accept our conditions of use and
                      privacy policy
                    </Link>
                    <Link to={"/login"} style={{ display: buy && "none" }}>
                      Do you already have an account? Log in
                    </Link>
                  </WrapperButton>
                </Form>
              </WrapperSignup>
            )}
          </>
        )
      }}
    </Formik>
  )
}
export default Register
