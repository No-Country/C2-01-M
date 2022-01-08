import React from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesLogin } from "../../constants/initial-values-login"
import FormControl from "../form/FormControl"
import axiosHttp from "../../helpers/axiosHTTP"
import { useNavigate } from "react-router-dom"

// styles
import { WrapperSignin, WrapperButton } from "./Login.Styles"

const Login = () => {
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      let api = axiosHttp()
      const url = `http://localhost:4000/login`
      const options = {
        data: {
          email: values.email,
          password: values.password,
        },
      }
      const info = await api.post(url, options)
      console.log(info)
    } catch (error) {
      console.log(error)
    }
    // todo solo para simular la el login
    if (values.name !== "" && values.email !== "") {
      setTimeout(() => {
        navigate("/home")
      }, 2000)
    }
    /* console.log("Formik data", values) */
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
