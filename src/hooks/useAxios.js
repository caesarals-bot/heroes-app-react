import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from 'axios';


export  const useAxios = async (url) => {

    const [state, setState] = useState({data: null, loading:true, error:null})

    useEffect(  () => {

        
        const consultarAPI = async () => {
            const resultado =  await axios.get(url);

            const data = resultado.data.results

            setState({
                loading:false,
                error:null,
                data
            });
        }
        consultarAPI()

    }, [url])

    return state;
}

