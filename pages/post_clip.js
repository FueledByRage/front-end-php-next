import { useEffect, useState } from "react";
import DragAndDrop from "../components/PostClips/DragAndDrop";
import { Container, StyledForm } from "../components/PostClips/post_clips";
import { Styled_Button } from "../components/register_form";
import { getToken, isLogged } from "../storage";
import api from "./api/hello"
import Login from "./login";



export default function PostClip(props){

    const [ file, setFile ] = useState(null);
    const [ logged, setLogged ] = useState(false);
    const [ body, setBody ] = useState('');
    const [ error, setError ] = useState(null);

    useEffect(()=>{
        setLogged(isLogged);
    });

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
            
        } catch (error) {
            setError(error);
        }

        
    }

    if(!logged) return( <Login /> );

    return(
        <Container>
            <StyledForm onSubmit={Handle_Submit}>
                <input
                    type='file'
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <textarea 
                    rows={5}
                    onChange={(e)=> setBody(e.target.value)}
                />
                <Styled_Button>Send</Styled_Button>
            </StyledForm>
        </Container>
    );
}