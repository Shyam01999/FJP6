import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthContext';
import { Alert, CardActions, CircularProgress, makeStyles } from '@mui/material';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Crousel() {
// const store = useContext(AuthContext)
const [email,setEmail] = React.useState("");
const [password,setPassword]= React.useState("");
const [name,setName] = React.useState("");
const [files,setFile] = React.useState(null);
const [error,setError] = React.useState("");
const [loader,setLoader] = React.useState(false);
const [user,setUser] = useState(null);


const handleSignup = async ()=>{
  // try{
  //   setLoader(true)
  //   if(files == null && email == '' && password == '' && name == ''){
  //     setError('Empty field found');
  //     setTimeout(()=>{
  //       setError('');
  //     },2000)
  //      setLoader(false)
  //     return;
  //   }
  //    console.log(email+" "+password);
  //   //  let userCred = await createUserWithEmailAndPassword(auth,email,password)
  //   //  let userCred = await store.signup(email,password);
  //   //  const docRef = await addDoc(collection(db,"users"),{
  //   //   email,
  //   //   name,
  //   //   password,
  //   //   reelsIds:[],
  //   //   profileImageUrl:"",
  //   //   userId:userCred.user.uid
  //   //  })
  //    console.log(userCred.user);
  //    setUser(userCred.user)
  // }
  // catch(err){
  //   setError(err.message)
  //   setTimeout(()=>{
  //     setError('')
  //   },2000)
   
  // }
  // setLoader(false)
}

  return (
    <>
        <div className="imgcard" >
            <div className="card">
            <CarouselProvider
                visibleSlides={1}
                totalSlides={4}
                naturalSlideWidth={238}
                naturalSlideHeight={510}
                hasMasterSpinner
                isPlaying={true}
                infinite={true}
                dragEnabled={false}
                touchEnabled={false}

            >
                <Slider>
                    <Slide index={0}><Image src='screenshot1.png'/></Slide>
                    <Slide index={1}><Image src='screenshot2.png'/></Slide>
                    <Slide index={2}><Image src='screenshot3.png'/></Slide>
                    <Slide index={3}><Image src='screenshot4.png'/></Slide>
                </Slider>
            </CarouselProvider>
            </div>
        </div>
  
    </>
  )
}

export default Crousel;
