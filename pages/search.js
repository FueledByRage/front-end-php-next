import { useState } from "react/cjs/react.development";
import { Error_Box } from "../components/Error_Box";
import { Container, Search_Box, Search_Input, Search_Iten, Search_Result } from "../components/Search";
import api from "./api/hello";

export default function Search_Page(){

    const [ results, setResults ] = useState(null)
    const [ error, setError ] = useState(null)
    async function handleSearch(e){
        const param = e.target.value
        const response = await api.get(`/user/?username=${param}`).catch((e)=>{
            setResults(null)
        })
        
        if(response) setResults(response.data)
    }


    return(
        <Container>
            <Search_Box>
                <Search_Input 
                onChange={handleSearch}
                />
            </Search_Box>
                {
                    results != null &&(
                        <Search_Result>
                                <Search_Iten key={results.username}>
                                    <p>
                                        {results.username}
                                    </p>
                                </Search_Iten>
                        </Search_Result>
                    )
                }
                {
                    error != null&&(
                        <Error_Box>
                            {error}
                        </Error_Box>
                    )
                }
        </Container>
    )
}