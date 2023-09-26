//isLoggedIn
export const isLoggedIn=()=>{
    let data = sessionStorage.getItem('login')
    if(data != null) return true
    else return false
    
}

//doLogin => data set to session storage
export const doLogin=(data,next)=>{
    sessionStorage.setItem('login', JSON.stringify(data))
    next()
}   

//doLogout => remove from session storage
export const doLogout=(next)=>{
    sessionStorage.removeItem('login')
    next()
}

//getCurrentUser Details
export const getCurrentUser = ()=>{
    if(isLoggedIn){
        return sessionStorage.getItem('login')
    }
    else{
        return false
    }
}
