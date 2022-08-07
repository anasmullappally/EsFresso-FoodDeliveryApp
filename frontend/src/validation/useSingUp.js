import * as yup from 'yup'

export const signupSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.number().positive().integer().min(10).required()
  })
  