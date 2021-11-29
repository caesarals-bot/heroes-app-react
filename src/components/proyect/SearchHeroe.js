import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error'
import CardSearch  from './CardSearch';



export const SearchHeroe = () => {
    
    
    

    const [nameSearch, setNameSearch] = useState('');
    const [heroeSearch, setHeroeSearch] = useState('');
    const [heroe = [], setHeroe] = useState([]);
    const [error, setError] = useState(false);
    const [ligaHeroe, setLigaHeroe] = useState([])
    
    useEffect( () => {

        const consultarApi = async () => {
            if(heroeSearch === '') return;

            // const heroesForSearch =  4;
            const key = '10159344400775792'
            const url = `https://superheroapi.com/api/${key}/search/${heroeSearch}`;

            const resultado =  await axios.get(url);
            const data = resultado.data.results;

            setHeroe(data);
        }
        
        consultarApi();
    }, [heroeSearch ] ) 

    const buscarHeroe = e => {
        e.preventDefault();

        // validando
        if(nameSearch.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setHeroeSearch(nameSearch)


        //enviando
    }

    
    // useEffect( () =>{
    //     const handleInputHeroe = (id) => {
    //         console.log(id)
    //     }; 
    //     handleInputHeroe()
    // },)
    
          

    

    return (
        
       <div>
           <form
              className="bg-white p-2 mt-3 rounded"
              onSubmit={ buscarHeroe }
              >
                <fieldset >
                    <legend>Busca tu heroe</legend>
                    <div className="mb-3">
                    <label htmlFor="TextInput" className="form-label">Busca los mejores heroes y asi formar un gran equipo</label>
                    <input
                      type="text"
                      name="name"
                      id="TextInput"
                      className="form-control"
                      onChange={ e => setNameSearch(e.target.value) }
                      placeholder="Nombre del heroe" />
                    </div>
           
                    <button type="submit" className="btn btn-primary">BuscarHeroe</button>
                </fieldset>
                {error ? <Error mensaje="Agrega un término de busqueda" />: null}
            </form>

            <div className="col-12 p-5 row">
                {heroe.map(heroe => (
                    <CardSearch
                    key={heroe.id}
                    heroes={heroe}
                    ligaHeroe={ligaHeroe}
                    setLigaHeroe={setLigaHeroe}
                    />
                ))}
            </div>
            
       </div>



    )
}
