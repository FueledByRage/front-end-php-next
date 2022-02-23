import { Container, Feed, Header, Post_Box } from "../components/profile/index.js"
import { Styled_Avatar } from "../components/profile/styled_avatar.js"
import  api  from "./api/hello.js"
import { FloatButton } from "../components/Float_Button";
import { IconContext } from "react-icons";
import { FiUser } from 'react-icons/fi'

function Profile({error, results, message}){
    
    const url = 'profile.png'
    if(error){
        return(
            <h1>
                { message }
            </h1>
            
        )
    }
    return(
        <>
            <Container>
                <Feed>
                    <Header>
                            <div className="avatar">
                                <Styled_Avatar src={url}></Styled_Avatar>
                                <h2>{results.user.username}</h2>
                            </div>
                        <div>
                            {results.user.about}
                        </div>
                    </Header>
                    {
                        results.posts.map((post)=>{
                            return <Post_Box key={post.author}>
                                <div className="body">
                                    <span>{post.body}</span>
                                </div>
                                <div className="footer">{post.createdAt.split(' ')[0]}</div>
                            </Post_Box>
                        })
                    }
                </Feed>
            <FloatButton href="/my_profile"><IconContext.Provider value={{size: "25px"}}><FiUser /></IconContext.Provider></FloatButton>
            </Container>
        </>
        )
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

export default Profile