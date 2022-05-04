import { object, string } from 'yup'
export const validateLogIn = () =>
  object().shape({
    email: string()
      .required('Introduce el correo')
      .email('Introduce un correo válido'),
    password: string().required('Introduce la contraseña')
  })
