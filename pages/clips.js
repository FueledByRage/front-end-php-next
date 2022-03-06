import { Clips_Container, Clip } from "../components/Clips_Page/Clips_page";
import { FloatButton } from "../components/Float_Button";
import { IconContext } from "react-icons";
import { FiUser } from 'react-icons/fi';
import api from "./api/hello"
import { useEffect } from "react";


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
                    Array.from(results.posts) && Array.from(results.posts).map((post,index) =>{
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
            <FloatButton href={`/post_clip`}><IconContext.Provider value={{size: "25px"}}><FiUser /></IconContext.Provider></FloatButton>
        </>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get(`/post/?author=${query.username}`).catch((error)=>{
            throw error
        })
        const user = await api.get(`/user/?username=${query.username}`).catch((error)=>{
            throw error
        })

        if(!response || !user) throw new Error('Error: Could not connect to server');

        return{
            props: { results: {
                posts: response.data,
                user: user.data
            }}
        }

    } catch (error) {
        return{
            props: {
                error: error.status || 404, message: 'Message'
            }
        }
    }
}
