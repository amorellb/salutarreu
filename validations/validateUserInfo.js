import { date, mixed, number, object, string } from 'yup'

const FILE_SIZE = 160 * 1024
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const validateProfileData = () =>
  object().shape({
    name: string().required(),
    email: string().email('Introduce un correo válido').required(),
    password: string().min(8, 'Mínimo 8 caracteres'),
    // FIXME: avatar file()
    avatar: mixed()
      .test(
        'fileSize',
        'File too large',
        value => value && value.size <= FILE_SIZE
      )
      .test('fileFormat', 'Unsupported file format', value => {
        console.log(value)
        return value && SUPPORTED_FORMATS.includes(value.type)
      })
  })

export const validateUserData = () =>
  object().shape({
    dni: string().length(9, 'Debe tener 9 caracteres').required(),
    phone: number()
      .positive()
      .integer()
      // FIXME: No funciona correctamente esta validación
      .min(9, 'Mínimo 9 caracteres')
      .max(9, 'Máximo 9 caracteres')
      .required(),
    address: string().required(),
    zipCode: number()
      .positive()
      .integer()
      // FIXME: No funciona correctamente esta validación
      .min(5, 'Mínimo 5 caracteres')
      .max(5, 'Máximo 5 caracteres')
      .required(),
    birthDate: date().max(new Date()).required() // TODO: format dd/mm/yyy
  })
