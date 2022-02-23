import { useEffect, useState } from "react";
import { Container, Form_Box, Styled_Button, Styled_Input } from "../components/My_Profile";
import { getToken, getUser, isLogged } from "../storage";
import { Error_Box } from "../components/Error_Box";
import api from "./api/hello";
import Login from "./login";
import router from "next/router"
import { Styled_Avatar } from "../components/profile/styled_avatar";



export default function My_Profile(props){

    const [ logged, setLogged ] = useState(false)
    const [ user, setUser ] = useState('')
    const [ body, setBody ] = useState('')
    const [ error, setError ] = useState('')
    const url = 'profile.png'

    useEffect(()=>{
        setLogged(isLogged)
        setUser(getUser())
    },[])

    const Handle_Submit = async event => {
        //Trying a new syntax :x
        try {            
            event.preventDefault 
    
            const response = await api.post('/post/register', JSON.stringify({body, token: getToken()})).catch((error)=>{
                throw new Error(error.response.data.message)
            })

            router.push(`/profile?username=${user}`)

        } catch (error) {
            setError(error.message)
        }

    }

    if(!logged) return (<Login />)
    return(
        <>
        <Error_Box>Não funciona mais, removerei em breve :)</Error_Box>
        <Error_Box><a href={`/clips/?username=${user}`}>Use esse link</a></Error_Box>
        <Container>
            <Form_Box>
                <div className="header">
                    <Styled_Avatar src={url}/>
                    <h3>{user}</h3>
                </div>
                <form onSubmit={Handle_Submit}>
                    <Styled_Input 
                    rows='6'
                    placeholder='Type here...'
                    onChange={e=> setBody(e.target.value)}
                    />
                    <Styled_Button>Post</Styled_Button>
                </form>
                {error != '' && <Error_Box>{error}</Error_Box>}
            </Form_Box>
        </Container>
        </>
    )
}