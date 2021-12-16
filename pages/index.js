import Login from './login'
import Search_Page from './search'
import { isLogged } from '../storage'
import { useEffect, useState } from 'react'

export default function Home() {

  const [ logged, setIsLogged ] = useState()

  useEffect(()=>{
    setIsLogged(isLogged())
  })
  
  if(logged) return ( <Search_Page /> )
  return(
    <Login />
  )
}
