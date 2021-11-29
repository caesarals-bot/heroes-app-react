import React, {useEffect} from 'react';
import { AppRouter } from './AppRouter';
import axios from 'axios';
// import { useState } from 'react/cjs/react.development';



export const MainApp = () => {

    // const [heroe, setHeroe] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://superheroapi.com/api/10159344400775792/search/batman`;

            const resultado = await axios.get(url);

            console.log(resultado.data.results)
        }
        consultarAPI();
    }, []);
    
    return (
        
        <AppRouter />

    )
}
