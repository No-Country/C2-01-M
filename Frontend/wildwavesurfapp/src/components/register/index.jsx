import React from "react"
import { Formik, Form } from "formik"
import { validationSchema } from "./validation-schema"
import { initialValuesRegister } from "../../constants/initial-values-register"
import FormControl from "../form/FormControl"
import axiosHttp from "../helpers/axiosHTTP"

// styles
import { WrapperSignup, WrapperButton } from "./Register.Styles"

const Register = () => {
  const onSubmit = async (values) => {
    try {
      let api = axiosHttp()
      const url = `http://localhost:4000/register`
      const options = {
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      }
      const info = await api.post(url, options)
      console.log(info)
    } catch (error) {
      console.log(error)
    }
    console.log("Formik data", values)
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
              <h1>cargando......</h1>
            ) : (
              <WrapperSignup>
                <Form className='form'>
                  <h3>Registrate</h3>
                  <FormControl
                    control='input'
                    type='text'
                    placeholder='Nombre'
                    name='name'
                  />
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
                  <FormControl
                    control='input'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirma tu Contraseña'
                  />
                  <WrapperButton>
                    <button type={"onSubmit"}>Registrar</button>
                    <a href='#' className='forgot'>
                      Al registrate, aceptas nuestras condiciones de uso y
                      politica de privasidad
                    </a>
                    <a href='#' className='forgot'>
                      ¿Ya tienes Cuenta? Iniciar Sesion
                    </a>
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
