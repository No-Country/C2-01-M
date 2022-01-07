import React from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesLogin } from "../../constants/initial-values-login"
import FormControl from "../form/FormControl"

// styles
import { WrapperSignin, WrapperButton } from "./Login.Styles"

const Login = () => {
  const onSubmit = async (values) => {
    console.log("Formik data", values)
  }

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        /* console.log("Formik props", formik) */
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
                    <a href='#' className='forgot'>
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
