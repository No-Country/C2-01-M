import React, { useState } from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesLogin } from "../../constants/initial-values-login"
import FormControl from "../form/FormControl"
import axiosHttp from "../../helpers/axiosHTTP"
import { Link, useNavigate } from "react-router-dom"
import { useGetInfoUser } from "../../context/ProductContext"

// styles
import { WrapperSignin, WrapperButton } from "./Login.Styles"
import TextError from "../form/text-error/TextError"
import Loading from "../loading"

const Login = ({ buy }) => {
  const navigate = useNavigate()
  const [messageError, setMessageError] = useState(false)
  const getInfoUser = useGetInfoUser()

  const onSubmit = async (values) => {
    try {
      let api = axiosHttp()
      const url = await `${process.env.REACT_APP_SERVER_URI}/login`
      const options = {
        data: {
          email: values.email,
          password: values.password,
        },
      }
      const info = await api.post(url, options)
      if (info.user.state) {
        getInfoUser(info)
        return !buy && navigate("/home")
      }
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
      initialValues={initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <>
            {formik.isSubmitting ? (
              <Loading />
            ) : (
              <WrapperSignin buy={buy}>
                <Form className='form'>
                  <h3>Welcome</h3>
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
                  {messageError && (
                    <TextError
                      styles={{ marginBottom: "30px", padding: "15px" }}
                    >
                      <span>user or password</span>
                    </TextError>
                  )}
                  <WrapperButton buy={buy}>
                    <button type={"onSubmit"}>Login</button>
                    <Link to={"#"}>Lost your password? </Link>
                    <Link to={"/register"} style={{ display: buy && "none" }}>
                      You do not have an account? Sign up
                    </Link>
                    <Link to={"/home"} style={{ display: buy && "none" }}>
                      Sign in as a guest
                    </Link>
                  </WrapperButton>
                </Form>
              </WrapperSignin>
            )}
          </>
        )
      }}
    </Formik>
  )
}
export default Login
