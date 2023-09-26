import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Alert, CardActions, CircularProgress, makeStyles } from '@mui/material';
import './login.css';
import { AuthContext } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  
const {login} = useContext(AuthContext)
const [email,setEmail] = useState("");
const [password,setPassword]= useState("");
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);
const history = useHistory();
// const [user,setUser] = useState(null);


const handleLogin = async ()=>{
  if(email == '' || password == ''){
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
    await login(email,password)
    setLoading(false)
    history.push('/')
  }
  catch(error){
    setError(error);
    setTimeout(()=>{
      setError('')
    },2000);
    setLoading(false)
  }
}

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <Card variant='outlined'>
          <div className="insta-logo">
              <img src='insta.png' alt=''/>
          </div>
          <CardContent>
                {error != '' && <Alert severity='error'>{error}</Alert>}
                <TextField id="outlined-basic"  label="Email" type="email" variant="outlined" margin="dense" fullWidth={true} value={email} onChange={(e)=>setEmail(e.target.value)} size='small'/>
                <TextField label="Password" type="password"  margin="dense" fullWidth={true} value={password} onChange={(e)=>setPassword(e.target.value)} size='small'/>
                <Typography variant='subtitle1' className='login-title'><Link to='/forgetPassword' className='loginRedirect'>Forget password ?</Link></Typography>
          </CardContent> 
          <CardActions>
                <Button color='primary' variant="contained"  fullWidth={true} onClick={handleLogin} disabled={loading}>
                  Login
                </Button>
          </CardActions>
        </Card>      
        <Card variant='outlined' className='loginContainer'>
          <CardContent>
            <Typography variant='subtitle1' className='login-title'>
              Don't Have an account ? <Link to="/signup" className='loginRedirect'>Sign up</Link> 
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
    
  )
}

export default LoginForm;