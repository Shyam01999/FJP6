import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import Like from '../Feed/Like';
import Comments from '../Feed/Comments';
import Like2 from '../Feed/Like2';
import AddComment from '../Feed/AddComment';
import './Profile.css'

function Profile() {
    const {id} = useParams()
    const [userData,setUserdata] = useState(null);
    const [posts,setPosts] = useState(null);
    const [open, setOpen] = useState(null);

    const handleClickOpen = (id) => {
      setOpen(id);
      console.log(id)
    };
  
    const handleClose = () => {
      setOpen(null);
    };


    useEffect(()=>{
      database.users.doc(id).onSnapshot((snap)=>{
        setUserdata(snap.data())
      })
    },[id])

    useEffect(()=>{
      if(userData!=null){
        let parr =[];
        for(let i=0; i<userData.postIds.length;i++){
          let postData =  database.posts.doc(userData.postIds[i]).get();
          parr.push({...postData,postId:postData.id})
        }
        setPosts(parr)
      }
    },[userData])
    console.log(posts)
  return (
    <>
      {
        posts==null || userData==null? <CircularProgress/>:
        <>
          <Navbar userData={userData}/>
          <div className="spacer"></div>
          <div className="container">
            <div className="upper-part">
              <div className="profile-img">
                <img src={userData.profileUrl}  />
              </div>
              <div className="info">
                <Typography variant='h5'>
                  Email:{userData.email}
                </Typography>
                <Typography variant='h6'>
                  Posts:{userData.postIds.length}
                </Typography>
              </div>
            </div>
            <hr style={{marginTop:"3rem",marginBottom:"3rem"}}/>
            <div className="profile-videos">
                    {
                        posts.map((post,index) => (
                            <React.Fragment key={index}>
                                <div className="videos">
                                <video  muted='muted' onClick={()=>handleClickOpen(post.pId)}>
                                                    <source src={post.pUrl}/>
                                </video>
                        
                                    {/* <Dialog
                                        open={open==post.pId}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        fullWidth={true}
                                        maxWidth='md'
                                    >
                                        <div className='modal-container'>
                                            <div className='video-modal'>
                                                <video autoPlay={true} muted='muted' controls>
                                                    <source src={post.pUrl}/>
                                                </video>
                                            </div>
                                            <div className='comment-modal'>
                                            <Card className='card1'>
                                                <Comments postData={post}/>
                                            </Card>
                                            <Card variant='outlined' className='card2'>
                                                <Typography style={{padding:'0.5rem'}}>{post.likes.length==0?`Liked by nobody`:`Liked by ${post.likes.length} users`}</Typography>
                                                <div style={{display:'flex',alignItems:"center"}}>
                                                    <Like2 user={user} postData={post} style={{display:'flex',justifyContent:"center",alignItem:'center'}}/>
                                                    <AddComment userData={user} postData={post}/>
                                                </div>   
                                            </Card>
                                            </div>
                                        </div>
                                        
                                    </Dialog> */}
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
          </div>
        </>
      }
    </>
  )
}

export default Profile