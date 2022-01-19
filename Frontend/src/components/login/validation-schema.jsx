import * as Yup from "yup"

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Formato de Email invalido")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
})
