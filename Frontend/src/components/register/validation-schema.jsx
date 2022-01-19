import * as Yup from "yup"

export const validationSchema = Yup.object({
  name: Yup.string().required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Formato de Email invalido")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Contraseña o email incorrectos")
    .required("Este campo es obligatorio"),
})
