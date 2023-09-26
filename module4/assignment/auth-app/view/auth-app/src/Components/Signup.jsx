import React, { useEffect, useRef, useState } from 'react';
import './Signup.css';
import { Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from 'formik';
import { signupSchema } from '../Schemas';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    name:"",
    email:"",
    mobile:"",
    password:"",
    address:"",
    profileImg:""
}

function Signup() {
    // const history = useHistory();
    const navigate = useNavigate();
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues,
        validationSchema:signupSchema,
        onSubmit:async(values, action)=>{
            console.log(values);
            try{
                const response = await axios.post('http://localhost:3000/user/signup',values)
                console.log("respo->",response)
                if(response.data.message == 'user signed up'){
                    alert('User register successfully now login')
                    navigate('/')
                }
                else{
                    alert(`Server error ${response.data.message}`)
                }
                
            }
            catch(err){
                console.log(err)
            }
            // action.resetForm()
        }
    })

  return (
    <div className="signupContainer">
        <div className="header">
            <h2>Registration form</h2>
        </div>
        <div className="formdesign-cont">
            <form className="form" id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="name" id="username" placeholder="Enter your Fullname" minLength="5" maxLength="28" autoComplete ="off" value={values.name} onChange={handleChange} onBlur={handleBlur}  />
                    {errors.name && touched.name && handleChange?<><p className='form-error'>{errors.name}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" autoComplete ="off" value={values.email} onChange={handleChange} onBlur={handleBlur}  />
                    {errors.email && touched.email ?<><p className='form-error'>{errors.email}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="form-control">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="tel" name="mobile" id="mobile" placeholder="Enter your Mobile number" autoComplete ="off" value={values.mobile} onChange={handleChange} onBlur={handleBlur}  />
                    {errors.mobile && touched.mobile ?<><p className='form-error'>{errors.mobile}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ?<><p className='form-error'>{errors.password}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Enter Address" value={values.address} onChange={handleChange} onBlur={handleBlur}  />      
                    {errors.address && touched.address ?<><p className='form-error'>{errors.address}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="form-control">
                    <label htmlFor="profileImg">Upload your Image</label>
                    <input type="file" name="profileImg" id="profileImg" accept="image/*" value={values.profileImg} onChange={handleChange} onBlur={handleBlur}  />
                    {errors.profileImg && touched.profileImg ?<><p className='form-error'>{errors.profileImg}</p><FontAwesomeIcon icon={faCircleXmark} className='icon-wrong'/></>:null}
                </div>
                <div className="form-control">
                    <button type='submit'>Signup</button>
                 </div>
                 <div className='form-control'>
                 <h4>Have an account? <Link to='/' className='link'>Login</Link></h4>
                 </div>
            </form>
        </div>
    </div>
  )
}

export default Signup