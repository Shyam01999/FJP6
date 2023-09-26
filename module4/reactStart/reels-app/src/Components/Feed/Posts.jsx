import React, { useEffect, useState } from 'react'
import { database } from '../../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Video from './Video';
import './Posts.css';
import Avatar from '@mui/material/Avatar';
import Like from './Like';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Like2 from './Like2';
import AddComment from './AddComment';
import Comments from './Comments';


function Posts({user}) {
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
        let parr =[];
        let unsub = database.posts.orderBy('createdAt','desc').onSnapshot((querySnapshot)=>{
            parr = []
            querySnapshot.forEach((doc)=>{
                let data = {...doc.data(),postId:doc.id};
                parr.push(data)
            })
            setPosts(parr) 
        })
       return unsub
    },[])

  return (
    <div>
        {
            posts == null || user == null? <CircularProgress />:
                <div className="video-container">
                    {
                        posts.map((post,index) => (
                            <React.Fragment key={index}>
                                <div className="videos">
                                    <Video src = {post.pUrl}/>
                                    <div className="fa">
                                        <Avatar  src={user.profileUrl} />
                                        <h4>{user.fullname}</h4>
                                    </div>
                                    <Like user={user} postData={post}/>
                                    <ChatBubbleIcon className='chat-icon' onClick={()=>handleClickOpen(post.pId)}/>
                                    <Dialog
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
                                        
                                    </Dialog>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
        }
    </div>
  )
}

export default Posts