import Login from './login';
import { isLogged } from '../storage';
import Search_Page from './search';
import { useEffect, useState } from 'react';

export default function Home() {

  const [ logged, setIsLogged ] = useState(false)

  useEffect(()=>{
    setIsLogged(isLogged())
  },[])
  
  if(logged) return ( <Search_Page /> )
  return(
    <Login />
  ) 
}
