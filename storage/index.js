export function setUserSession(token, username){
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('username', username)
}

export function getUser(){
    const userStr = sessionStorage.getItem('username')

    if(userStr) return userStr
    else return null
}

export function removeUserSession(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}

export const getToken = () => sessionStorage.getItem('token'); 

export function isLogged(){
  if(sessionStorage.getItem('token') === null) return false
  
  return true
}