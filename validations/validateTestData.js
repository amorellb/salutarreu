import { object, string } from 'yup'

export const validateTestData = () =>
object().shape({
  name: string() .matches(
    /^([aA-zZ\s])+$/,
    'El nombre solo puede tener letras'
  ).required(),
  result: string().required(),
  type: string().required(),
  testDate: string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'El formato de la fecha debe ser (dd/mm/aaa)'
    )
    .required()
})