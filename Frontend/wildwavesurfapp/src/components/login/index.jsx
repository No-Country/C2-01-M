import React, { useState } from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesLogin } from "../../constants/initial-values-login"
import FormControl from "../form/FormControl"
import axiosHttp from "../../helpers/axiosHTTP"
import { useNavigate } from "react-router-dom"
import { useGetInfoUser } from "../../context/ProductContext"

// styles
import { WrapperSignin, WrapperButton } from "./Login.Styles"
import TextError from "../form/text-error/TextError"

const Login = () => {
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
        return navigate("/home")
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
              <h1>cargando......</h1>
            ) : (
              <WrapperSignin>
                <Form className='form'>
                  <h3>Bienvenido</h3>
                  <FormControl
                    control='input'
                    type='email'
                    placeholder='Email'
                    name='email'
                  />
                  <FormControl
                    control='input'
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                  />
                  {messageError && (
                    <TextError
                      styles={{ marginBottom: "30px", padding: "15px" }}
                    >
                      <span>usuario o contraseña</span>
                    </TextError>
                  )}
                  <WrapperButton>
                    <button type={"onSubmit"}>Login</button>
                    <a href='#' className='forgot'>
                      ¿Perdiste tu contraseña?
                    </a>
                    <a href='/register' className='forgot'>
                      ¿No tienes Cuenta? Registrate
                    </a>
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
