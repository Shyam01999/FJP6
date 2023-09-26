import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link,useHistory } from 'react-router-dom';
import { Alert, CardActions, CircularProgress, makeStyles } from '@mui/material';
import './Signup.css'
import { AuthContext } from '../../Context/AuthContext';
import { database, storage } from '../../firebase';



function Signup() {
const [email,setEmail] = useState("");
const [password,setPassword]=useState("");
const [name,setName] = useState("");
const [file,setFile] = useState(null);
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);
const history = useHistory()
const {signup} = useContext(AuthContext);

const handleSignup = async ()=>{
  if(file == null || email == '' || password == '' || name == ''){
    setError('Empty field found');
    setTimeout(()=>{
      setError('');
    },2000)
     setLoading(false)
    return;
  }
  try{
    setError('');
    setLoading(true);
    let userObj = await signup(email, password);
    let uid = userObj.user.uid;
    console.log(uid)
    const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file)  ;     
        uploadTask.on('state_changed',fn1,fn2,fn3) 
        function fn1(snapshot){
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Uplooad is ${progress} done.`)
        }
        function fn2(error){
          setError(error);
          setTimeout(()=>{
            setError('');
          },2000)
           setLoading(false);
           return
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
                database.users.doc(uid).set({
                  email:email,
                  userId:uid,
                  fullname:name,
                  profileUrl:url,
                  createdAt:database.getTimeStamp()
                })
            })
            setLoading(false)
            history.push('/')
        }
    
  }
  catch(err){
    setError(err.message)
    setTimeout(()=>{
      setError('')
    },2000)
   
  }
  setLoading(false)
}

  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card variant='outlined'>
          <div className="insta-logo">
              <img src='insta.png' alt=''/>
          </div>
          <CardContent>
                <Typography className='signup-title' variant='subtitle1'>Sign up to see photos and videos from your friends</Typography>
                {error != '' && <Alert severity='error'>{error}</Alert>}
                <TextField  label="Email" type="email" variant="outlined" margin="dense" fullWidth={true} value={email} onChange={(e)=>setEmail(e.target.value)} size='small'/>
                <TextField  label="Password" type="password" variant="outlined" margin="dense" fullWidth={true} value={password} onChange={(e)=>setPassword(e.target.value)} size='small'/>
                <TextField  label="Full Name" type="text" variant="outlined" margin="dense" fullWidth={true} value={name} onChange={(e)=>setName(e.target.value)} size='small'/>
                <Button color='secondary' variant="outlined" size="small" fullWidth={true} margin='dense' startIcon={<CloudUploadIcon />} component="label">
                  <input hidden accept="image/*" multiple type="file" onChange={(e)=>setFile(e.target.files[0])} />
                  UPLORD PROFILE IMAGE
                </Button>
          </CardContent> 
          <CardActions>
                <Button color='primary' variant="contained"  fullWidth={true} disabled={loading} onClick={handleSignup}>
                  SignUp
                </Button>
          </CardActions>
          <CardContent>
              <Typography variant='subtitle1' className='signup-title'>
                  By signing up, you agree to the Terms, Conditions and cookies policy.
              </Typography>
          </CardContent>
        </Card>      
        <Card variant='outlined' className='signupContainer'>
          <CardContent>
            <Typography variant='subtitle1' className='signup-title'>
              Have an account ? <Link to="/login" className='signupRedirect'>Login</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Signup;