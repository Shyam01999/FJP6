import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import { useFormik } from 'formik';
import { loginSchema } from '../Schemas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { doLogin } from './auth';

const initialValues = {
    email:'',
    password:''
}
function Login() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        validationSchema:loginSchema,
        onSubmit:async(values, action)=>{
            try{
                const response = await axios.post('http://localhost:3000/user/login',values)
                console.log("respo->",response);
                if(response.data.message == 'User has logged in'){
                    alert('User has logged in successfully');
                    doLogin(response.data.userDetails,()=>{
                        // console.log("Login details is saved to sessionstorage")
                        navigate('/landing');
                    })
                }
                else{
                    alert(response.data.message)
                    navigate('/')
                }
            }
            catch(err){
                console.log(err)
            }
            // action.resetForm()
        }
    })

  return (
    <div className="loginContainer">
        <div className="login_header">
            <h2>Login form</h2>
        </div>
        <div className="formdesign-cont">
            <form className="form" id="form" onSubmit={handleSubmit}>
                
                <div className="loginform-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete ="off" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.email && touched.email ? <><p className='form-error'>{errors.email}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="loginform-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password ?<><p className='form-error'>{errors.password}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                
                <div className="loginform-control">
                    <button type='submit'>Signin</button>
                 </div>
                 <div className='loginform-control'>
                 <h4>Don't have an account? <Link to='/signup' className='link'>Signup</Link></h4>
                 </div>

            </form>
        </div>
    </div>
  )
}

export default Login