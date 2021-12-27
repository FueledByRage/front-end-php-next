import { useEffect, useState } from "react";
import { Container, Form_Box, Styled_Button, Styled_Input } from "../components/My_Profile";
import { getToken, getUser, isLogged } from "../storage";
import { Error_Box } from "../components/Error_Box";
import api from "./api/hello";
import Login from "./login";


export default function My_Profile(props){

    const [ logged, setLogged ] = useState(false)
    const [ user, setUser ] = useState('')
    const [ body, setBody ] = useState('')
    const [ error, setError ] = useState('')

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

            window.location.reload()
        } catch (error) {
            setError(error.message)
        }

    }

    if(!logged) return (<Login />)
    return(
        <>
        <Container>
            <Form_Box>
                <h3>{user}</h3>
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