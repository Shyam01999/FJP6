import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../../firebase';

function Like2({user, postData}) {
  const[like,setLike] = useState(null);
  useEffect(()=>{
    let check = postData.likes.includes(user.userId)?true:false;
    setLike(check)
  },[postData])

  const handleLike=()=>{
    if(like){
      let narr = postData.likes.filter((el)=> el!=user.userId)
      database.posts.doc(postData.postId).update({
        likes:narr
      })
    }else{
      let narr = [...postData.likes,user.userId]
      database.posts.doc(postData.postId).update({
        likes:narr
      })
    }
  }

  return (
    <div>
      {
        like != null?
        <>
        {
          like==true?<FavoriteIcon style={{padding:'1rem',paddingTop:'0.7rem'}} className={`like`} onClick={handleLike}/>:<FavoriteIcon style={{padding:'1rem',paddingTop:'0.7rem'}} className={`unlike2`} onClick={handleLike}/>
        }
        </>:
        <>
        </>
      }
    </div>
  )
}

export default Like2