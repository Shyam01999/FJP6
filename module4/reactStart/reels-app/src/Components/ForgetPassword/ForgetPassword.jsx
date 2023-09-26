import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Alert, CardActions, CircularProgress, makeStyles } from '@mui/material';
import './ForgetPassword.css'
import { AuthContext } from '../../Context/AuthContext';

function ForgetPassword() {
const [email,setEmail] = useState("");
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);
const {forgetPassword} = useContext(AuthContext);

const handleForgetPassword=async()=>{
  if(email == ''){
    setError('Empty field found')
    setTimeout(()=>{
      setError('')
    },2000)
    setLoading(false);
    return
  }
  try{
    setError('');
    setLoading(true);
    await forgetPassword(email);
    setLoading(false);
  }
  catch(error){
    setError(error);
    setTimeout(()=>{
      setError('')
    },2000);
    setLoading(false);
  }
}

  return (
    <div className="forgetPasswordWrapper">
      <div className="forgetPasswordCard">
        <Card variant='outlined'>
          <div className="insta-logo">
              <img src='insta.png' alt='Instagram logo image'/>
          </div>
          <CardContent>
                <Typography className='forgetPassword-title' variant='subtitle1'>Enter your email address and we'll send you a link to get back into your account.</Typography>
                {error != '' && <Alert severity='error'>{error}</Alert>}
                <TextField  label="Email" type="email" variant="outlined" margin="dense" fullWidth={true} value={email} onChange={(e)=>setEmail(e.target.value)} size='small'/>
          </CardContent> 
          <CardActions>
                <Button color='primary' variant="contained"  fullWidth={true} disabled={loading} onClick={handleForgetPassword}>
                  Send Login Link
                </Button>
          </CardActions>
          <CardContent>
              <Typography variant='subtitle1' className='forgetPassword-title'>
                 <Link to='/signup' className='forgetPasswordRedirect'>Create New Account</Link> 
              </Typography>
          </CardContent>
        </Card>      
        <Card variant='outlined' className='forgetPasswordContainer'>
          <CardContent>
            <Typography variant='subtitle1' className='forgetPassword-title'>
            <Link to="/login" className='forgetPasswordRedirect'>Back to Login</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
    
  )
}

export default ForgetPassword;