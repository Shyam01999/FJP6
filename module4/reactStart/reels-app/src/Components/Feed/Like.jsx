import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../../firebase';

function Like({user, postData}) {
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
          like==true?<FavoriteIcon className={`icon-styling like`} onClick={handleLike}/>:<FavoriteIcon className={`icon-styling unlike`} onClick={handleLike}/>
        }
        </>:
        <>
        </>
      }
    </div>
  )
}

export default Like