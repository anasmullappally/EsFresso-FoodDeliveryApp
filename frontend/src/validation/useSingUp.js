import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().positive().integer().min(10).required(),
});

export const signInSchema = yup.object().shape({
  phoneNumber: yup.number().positive().integer().min(10).required(),
})

export const adminSignInSchema =  yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required').min(5),
})