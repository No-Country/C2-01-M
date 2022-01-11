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

const Register = () => {
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
      if (info.user.state) navigate("/login")
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
                  {messageError && (
                    <TextError
                      styles={{ marginBottom: "30px", padding: "15px" }}
                    >
                      <span>usuario o contraseña</span>
                    </TextError>
                  )}
                  <WrapperButton>
                    <button type={"onSubmit"}>Registrar</button>
                    <Link to={"#"}>
                      Al registrate, aceptas nuestras condiciones de uso y
                      politica de privasidad
                    </Link>
                    <Link to={"/login"}>¿Ya tienes Cuenta? Iniciar Sesion</Link>
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
