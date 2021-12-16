import { useState } from "react"
import { Error_Box } from "../components/Error_Box"
import { Form_Div, Styled_Input, Styled_Button } from "../components/register_form"
import { isLogged, setUserSession } from "../storage"
import api from "./api/hello"
import router from 'next/router'


export default function Register_Page(){

    
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ about, setAbout ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null) 


    async function handleSubmit(e){

        try {
            e.preventDefault()
    
            if(email == '' || username == '' || password == '' ) setError('There are empty fields!')
    
            const response = await api.post(`/user/register`, JSON.stringify({email, password, username, about})).catch((error)=>{
                throw new Error(error.response.data.message)
            })

            const { token, user } = response.data

            setUserSession(token, user)

            router.push('/')

        } catch (error) {
            setError(error.message)            
        }

    }

    
    if(isLogged()) router.push('/') 

    return(


        <Form_Div>
            <form className="form" onSubmit={handleSubmit}>
                <Styled_Input 
                name="email"
                className="inputs"
                type="text"
                placeholder="Email"
                onChange={e=>{setEmail(e.target.value)}}
                />
                <Styled_Input 
                name="username"
                className="inputs"
                type="text"
                placeholder="User"
                onChange={e=>{setUsername(e.target.value)}}
                />
                <Styled_Input 
                name="password"
                className="inputs"
                type="password"
                placeholder="Password"
                onChange={e=>{setPassword(e.target.value)}}
                />
                <Styled_Input
                    name="about"
                    className="inputs"
                    rows='6'
                    type="text"
                    placeholder="Tell me about yourself..."
                    onChange={e=>{setAbout(e.target.value)}}
                />
                <Styled_Button>Registrar</Styled_Button>
            </form>
            {error && <Error_Box>{error}</Error_Box>}
        </Form_Div>

    )
}