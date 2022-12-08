import { Clips_Container, Clip, EmptyContainer, UserInfo, UserAbout, Username } from "../components/Clips_Page/Clips_page";
import { FloatButton } from "../components/Float_Button";
import { IconContext } from "react-icons";
import { FiUser } from 'react-icons/fi';
import api from "./api/hello"
import Icon from "../components/icon";
import { useState } from "react";
import router from "next/router"



export default function Clips({error, results, message}){

    const [ closeModal, setCloseModal ] = useState(true);
    const [ selectedVideo, setSelectedVideo ] = useState('');

    if(error){
        return(
            <h1>
                { message }
            </h1>
            
        )
    }

    const openVideo = ( videoUrl ) =>{
        const videoName = videoUrl.split('/').slice(-1);
        router.push(`/clip/?videoname=${videoName}`)
    }

    return(
        <>
            <UserInfo>
                <Icon>
                    {
                        results.user.username[0]
                    }
                </Icon>
                <Username>
                    <strong>
                        {
                            results.user.username
                        }
                    </strong>
                </Username>
                <UserAbout>
                    {
                        results.user.about
                    }
                </UserAbout>
            </UserInfo>
            <Clips_Container>
                {
                    
                    (Array.from(results.posts) && Array.from(results.posts).length > 0 ) ? Array.from(results.posts).map((post,index) =>{
                        return <Clip onClick={e => openVideo(post.videoUrl)} key={index}>
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
                    }) :
                    <EmptyContainer>
                        <span>
                            Ainda não há vídeos para esse usuario
                        </span>
                    </EmptyContainer>

                }
            </Clips_Container>
            <FloatButton href={`/post_clip`}><IconContext.Provider value={{size: "25px"}}><FiUser /></IconContext.Provider></FloatButton>
        </>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get(`/post/?author=${query.username}`).catch((error)=>{
            throw new Error('Error getting posts');
        })
        const user = await api.get(`/user/?username=${query.username}`).catch((error)=>{
            throw new Error('Error reaching user');
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
                error: error.status || 404, message: error.message || 'Message'
            }
        }
    }
}
