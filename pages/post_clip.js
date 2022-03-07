import { useEffect, useState } from "react";
import { Container, StyledForm } from "../components/PostClips/post_clips";
import { Styled_Button } from "../components/register_form";
import { getToken, getUser, isLogged } from "../storage";
import api from "./api/hello"
import { Error_Box } from "../components/Error_Box";
import Login from "./login";
import router from "next/router";
import { FiVideo } from 'react-icons/fi'
import { IconContext } from "react-icons";
import { FloatButton } from "../components/Float_Button";



export default function PostClip(props){

    const [ file, setFile ] = useState(null);
    const [ logged, setLogged ] = useState(false);
    const [ body, setBody ] = useState('');
    const [ error, setError ] = useState(null);

    useEffect(()=>{
        setLogged(isLogged);
    },[]);

    async function Handle_Submit(e){
        e.preventDefault();

        const config = {headers: { token: getToken() }}
        const form = new FormData();
        form.append('file', file);
        form.append('body', body);

        try {
            const response = await api.post('/post/register', form, config).catch((e) =>{
                throw e;
            });

            if(!response) throw new Error('Error: Could not connect to server');


            router.push(`/clips/?username=${getUser()}`)
        } catch (error) {
            setError(error.message);
        }

        
    }

    if(!logged) return( <Login /> );

    return(
        <Container>
            <StyledForm onSubmit={Handle_Submit}>
                <textarea 
                    rows={5}
                    onChange={(e)=> setBody(e.target.value)}
                />
                <input
                    type='file'
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <Styled_Button>Send</Styled_Button>
            </StyledForm>
            {error  && <Error_Box>{error}</Error_Box>}
            <FloatButton href={`/clips/?username=${getUser()}`}><IconContext.Provider value={{size: "20px"}}><FiVideo /></IconContext.Provider></FloatButton>
        </Container>
    );
}