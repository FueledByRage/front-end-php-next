import { useState } from "react"
import { Error_Box } from "../components/Error_Box"
import { Container, Login_Page } from '../components/login'
import { Styled_Button, Styled_Input } from "../components/register_form"
import { Styled_Link } from "../components/Styled_Link"
import { setUserSession } from "../storage"
import router from "next/router"
import api from "./api/hello"

export default function Login(){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    async function handleSubmit(e) {

        try {
            e.preventDefault()
            
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            if(email == '' || password == '') setError('Missing credentials');
    
            const response = await api.post('/login', JSON.stringify({ email, password })).catch((error)=>{
                throw new Error(error.response.data.message)
            });

            if(!response) throw new Error('Error: Could not connect to server');

            const { token, username } = response.data;
            

            setUserSession(token, username);
            
            router.push('/post_clip');

        } catch (error) {
            setError(error.message)
        }

    }

    

    return(
        <Container>
            <Login_Page>
                <div className="header">
                    <h1>Welcome!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <Styled_Input
                    type="text"
                    name="email"
                    onChange={e=>{setEmail(e.target.value)}}
                    />
                    <Styled_Input 
                    type="password"
                    name="password"
                    onChange={e=>{setPassword(e.target.value)}}
                    />
                    <Styled_Button>Login</Styled_Button>
                </form>
                <div className="footer">
                    <Styled_Link href="/register">
                        Register
                    </Styled_Link>
                </div>
                {error != '' && <Error_Box>{error}</Error_Box>}
            </Login_Page>

        </Container>
    )
}