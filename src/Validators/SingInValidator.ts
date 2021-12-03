import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email('O campo está inválido')
    .required('O campo Email é Obrigatório'),
  password: yup.string().required('O campo Senha é Obrigatório')
})
