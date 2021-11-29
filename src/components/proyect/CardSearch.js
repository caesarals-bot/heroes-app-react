import React from 'react'



 const CardSearch = ({heroes, ligaHeroe, setLigaHeroe}) => {

    const { 
        id,
        name,   
        powerstats,
        image

         } = heroes;
    

    const handleInputHeroe = id =>{

        
        
        setLigaHeroe([
            ...ligaHeroe,
            heroes])
        
       
    }
    console.log('hi',ligaHeroe)

    return (
        
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                <img src={image.url} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div>
                        <p className="card-text">Combat:{powerstats.combat} </p>
                    </div>
                    <div>
                        <p className="card-text">Durability:{powerstats.durability}  </p>
                    </div>
                    <div>
                        <p className="card-text">Intelligence:{powerstats.intelligence}  </p>
                    </div>
                    <div>
                        <p className="card-text">Power:{powerstats.power}  </p>
                    </div>
                    <div>
                        <p className="card-text">Speed:{powerstats.speed}  </p>
                    </div>
                    <div>
                        <p className="card-text">Strong:{powerstats.strength} </p>
                    </div>
                    
                    <button onClick={() =>handleInputHeroe(id)} type="button" className="btn btn-primary">Agregar</button>
                </div>
                </div>
        
            </div>
        
    )
}
export default CardSearch
