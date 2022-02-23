import { Clips_Container, Clip } from "../components/Clips_Page/Clips_page";
import api from "./api/hello"


export default function Clips({error, results, message}){

    if(error){
        return(
            <h1>
                { message }
            </h1>
            
        )
    }

    return(
        <>
            <Clips_Container>
                {
                    results.posts.map((post,index) =>{
                        return <Clip key={index} >
                                    <div className="video-container" >
                                        <video src={post.videoUrl} controls/>
                                    </div>
                                    <div className="body-div">
                                        <span>{post.body}</span>
                                    </div>
                                    <div className="footer" >
                                        <span>{post.author}</span>
                                        <span>{post.created_at}</span>
                                    </div>
                                </Clip>
                    })
                }
            </Clips_Container>
        </>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get(`/post/?author=${query.username}`).catch((error)=>{
            throw error
        })
        const users = await api.get(`/user/?username=${query.username}`).catch((error)=>{
            throw error
        })
        return{
            props: { results: {
                posts: response.data,
                user: users.data
            }}
        }

    } catch (error) {
        return{
            props: {
                error: error.status || 404, message: error.message
            }
        }
    }
}
