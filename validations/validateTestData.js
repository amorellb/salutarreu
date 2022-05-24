import { object, string } from 'yup'

export const validateTestData = () =>
object().shape({
  testName: string() 
  .matches(
    /^([aA-zZ\s])+$/,
    'El nombre solo puede tener letras'
  ).required('El nombre es obligatorio'),
  result: string().required('El resultado es obligatorio'),
  type: string().required('El tipo es obligatorio'),
  testDate: string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'El formato de la fecha debe ser (dd/mm/aaa)'
    )
    .required('La fecha es obligatoria')
})