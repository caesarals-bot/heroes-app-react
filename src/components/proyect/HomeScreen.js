import React from 'react'
import { CardHome } from './CardHome'
import { NavLink } from "react-router-dom";


export const HomeScreen = () => {

    

    return (
        <div className="bg-secondary opacity-50 text-center m-3">
            <h1 className="text-white">League of heroes App</h1>
            <p className="text-white">en league of heores App forma el mas temido equipo de heroes, los cuales tienen diversos poderes y lanzate a conquistar el Mundo.</p>
            <CardHome />
            <NavLink to="/login" className="btn btn-primary text-white mt-3">Logueate</NavLink><p className="text-white mb-3 p-3">  Crea tu equipo</p>
            
        </div>
    )
}
