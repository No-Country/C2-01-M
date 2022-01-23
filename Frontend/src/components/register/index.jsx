import React, { useState } from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesRegister } from "../../constants/initial-values-register"
import FormControl from "../form/FormControl"
import axiosHttp from "../../helpers/axiosHTTP"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../loading"
import Message from "../message"

// styles
import { WrapperSignup, WrapperButton } from "./Register.Styles"

const Register = ({ buy, setShowRegister }) => {
  const [showMsg, setShowMsg] = useState({
    show: false,
    message: "",
    className: "",
  })
  const navigate = useNavigate()
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

      if (buy && info.userData.state) {
        setShowRegister(false)
      }
      if (!buy && info.userData.state) {
        setShowMsg({
          show: true,
          message: "Successful registration!!!",
          className: "success",
        })
        setTimeout(() => {
          setShowMsg(false)
          navigate("/login")
        }, 2000)
      }
    } catch (error) {
      if (error) {
        setShowMsg({
          show: true,
          message: "Wrong email or password!!!",
          className: "error",
        })
        setTimeout(() => {
          setShowMsg(false)
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
              <Loading />
            ) : (
              <>
                {showMsg.show ? (
                  <Message
                    msg={showMsg.message}
                    className={showMsg.className}
                  />
                ) : null}
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
                    <WrapperButton buy={buy}>
                      <button type={"onSubmit"}>Registrar</button>
                      <Link to={"#"} style={{ display: buy && "none" }}>
                        By registering, you accept our conditions of use and
                        privacy policy.
                      </Link>
                      <Link to={"/login"} style={{ display: buy && "none" }}>
                        Do you already have an account? Log in
                      </Link>
                    </WrapperButton>
                  </Form>
                </WrapperSignup>
              </>
            )}
          </>
        )
      }}
    </Formik>
  )
}
export default Register
