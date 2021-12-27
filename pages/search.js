import { useState } from "react";
import { Error_Box } from "../components/Error_Box";
import { FloatButton } from "../components/Float_Button";
import { IconContext } from "react-icons";
import { FiUser } from 'react-icons/fi'
import { Container, Search_Box, Search_Input, Search_Iten, Search_Result } from "../components/Search";
import api from "./api/hello";


export default function Search_Page(){

    const [ results, setResults ] = useState([])
    const [ error, setError ] = useState('')
    async function handleSearch(e){
        const param = e.target.value
        const response = await api.get(`/user/?username=${param}`).catch((e)=>{
            setResults(null)
        })
        
        if(response) setResults(response.data)
    }


    return(
        <>            
            <Container>
                <Search_Box>
                    <Search_Input 
                    onChange={handleSearch}
                    />
                </Search_Box>
                    {
                        results.length > 0 &&(
                            <Search_Result>
                                    <Search_Iten key={results.username}>
                                        <a href={`/profine?username=${results.username}`}>
                                            <p>
                                                {results.username}
                                            </p>
                                        </a>
                                    </Search_Iten>
                            </Search_Result>
                        )
                    }
                    {
                        error != '' &&(
                            <Error_Box>
                                {error}
                            </Error_Box>
                        )
                    }
            </Container>
            <FloatButton href="/my_profile"><IconContext.Provider value={{size: "25px"}}><FiUser /></IconContext.Provider></FloatButton>
        </>
    )
}