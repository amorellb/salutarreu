import { object, string } from 'yup'

// const FILE_SIZE = 160 * 1024
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const validateProfileData = () =>
  object().shape({
    name: string().required(),
    email: string().email('Introduce un correo válido').required(),
    password: string().min(8, 'Mínimo 8 caracteres')
    // FIXME: avatar file()
    // avatar: mixed()
    //   .test(
    //     'fileSize',
    //     'File too large',
    //     value => value && value.size <= FILE_SIZE
    //   )
    //   .test('fileFormat', 'Unsupported file format', value => {
    //     console.log(value)
    //     return value && SUPPORTED_FORMATS.includes(value.type)
    //   })
  })

export const validateUserData = () =>
  object().shape({
    DNI: string()
      .matches(
        /^([0-9]{8})([A-Za-z]{1})$/,
        'Debe tener 8 caracteres numéricos seguidos de una letra'
      )
      .required("El DNI es obligatorio"),
    phone: string()
      .matches(/^([0-9]{9})$/, 'Debe tener 9 caracteres numéricos')
      .required("El teléfono es obligatorio"),
    address: string().required("La dirección es obligatoria"),
    zipCode: string()
      .matches(/^([0-9]{4})$/, 'Debe tener 4 caracteres numéricos')
      .required("El código postal es obligatorio"),
    birthDate: string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        'El formato de la fecha debe ser (dd/mm/aaa)'
      )
      .required("La fecha de nacimiento es obligatoria"),
  })

