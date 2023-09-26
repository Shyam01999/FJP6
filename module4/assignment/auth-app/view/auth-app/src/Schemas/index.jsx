import * as Yup from 'yup';

export const signupSchema = Yup.object({
    name:Yup.string().min(5).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    mobile:Yup.string().min(10).max(12).required("Please enter your mobile number"),
    password:Yup.string().min(6).required("Please enter password"),
    address:Yup.string().min(5).required('Please enter address'),
    profileImg:Yup.string(),
})

export const loginSchema = Yup.object({
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
})