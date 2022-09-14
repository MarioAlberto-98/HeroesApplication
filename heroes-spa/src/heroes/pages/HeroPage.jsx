import {useMemo} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
export const HeroPage = () => {
  //Con este customHook puedes obtener los parametros de la page 
  //const params = useParams();
  //console.log(params);
  //En consola se muestra asi:
  //Object
  // *: "hero/dc-batman"
  //heroId: "dc-batman"

  //Este Id viene de HeroRoutes, <Route path="hero/:id" element={<HeroPage/>} />
  const {id} = useParams();
  //console.log(id);
  //El valor del Id se pasa a la funcion getHeroById o sea a getHeroById.js
  //retornando el valor que es igual al id que llega como variable al If con el nombre hero.
  //El if lo que hace es validar  si el dato de la direccion es valida, si no lo es te mand a una pagina 
  //por default
  const navigate = useNavigate();


  //Lo que hace useMemo es que cuando un componente padre, por y o x razon se renderice
  //evita que se renderize el componente o se dispare,haciendo que cambie el valor de id
  //por eso es bueno poner useMemo, para almacenar el valor y si pasa ello, no cambie el valor 
  //Lo va disparar cada que sus dependencias cambien, este es el call back que 
  //que va disparar, lo que regrese esta funcion es lo que vamos a tener en la variable "hero".
  //Las dependencias van a ser [id], cuando el id cambie, este [id] va a volver a disparar las funcion que trar nuevo hero
  const hero = useMemo(() => getHeroById(id),[id]); 
  const onNavigateBack=()=>{
    //Lo que hace el -1 es llevarte a la pagina anterior
    navigate(-1);
  }


  console.log(hero);

  if(!hero) {
     return <Navigate to="/marvel"/>
  }

  return (

    <>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`/assets/heroes/${ id }.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />   
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
            <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
          </ul>
          <h5 className="mt-3">Characteres</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-outline-primary"
          onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
    
  )



}
