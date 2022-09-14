import { Link } from 'react-router-dom';

//CharactersByHero Es el segundo componente el cual se manda llamar cuando se 
//repiten el alter_ego y characters mostrando o no las personas que se han caracterizado
//el personaje
const CharactersByHero=({alter_ego, characters})=>{
    //if (alter_ego === characters) return (<></>);
    //return <p> { characters } </p> 

    return (alter_ego === characters)
    ? <></>
    : <p>{characters}</p>

}


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

  const heroImageURL =`/assets/heroes/${id}.jpg`;  

  return (
    <div className="col animate__animated animate__bounce">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageURL} className="card-img" alt={superhero}/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {/*  
                            Se puede usar esto: 
                            ( alter_ego != characters ) && ( <p>{characters}</p> )
                            evitando crear un nuevo componente o tambien esta forma:
                             <CharactersByHero characters={ characters} alter_ego={alter_ego}/>
 
                        */} 
                        <CharactersByHero characters={ characters } alter_ego={alter_ego}/>

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        {
                        //Muesta el boton mas.. y te direcciona a una page
                        }
                        <Link to={`/hero/${id}`}>
                            Mas..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
