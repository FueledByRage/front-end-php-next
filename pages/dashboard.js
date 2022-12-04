import Login from './login';
import { isLogged } from '../storage';
import { Container, DashboardContainer, DeleteButton, VideoItem } from '../components/Dashboard';
import api from './api/hello';
import { getServerSideProps } from './profile';

export default function Dashboard( { error, results } ){
    
    const executeDelete = (id) =>{
        api.delete(`/post/?id=${id}`)
    }

    return(
        <Container>
            <DashboardContainer>
                <VideoItem>
                    <span>
                        Titulo
                    </span>
                    <span>
                        Criado em:
                    </span>
                    <div>Del</div>
                </VideoItem>
                {
                    results.map((element, index)=>{
                    return <VideoItem key ={index} >
                            <span>{element.title}</span>
                            <span>{element.createdAt}</span>
                            <DeleteButton
                                onClick={e=>{ executeDelete(element.id) }}
                            >X</DeleteButton>
                        </VideoItem>
                    })
                }
            </DashboardContainer>
        </Container>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get(`/post/?author=${query.username}`).catch((error)=>{
            throw error
        });

        return{
            props:{
                results:{
                    posts : response.data
                }
            }
        }
    } catch (error) {
        return{
            props:{
                error : error.status || 404, message : error.message
            }
        }
    }
}