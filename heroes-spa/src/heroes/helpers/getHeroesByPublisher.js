import {heroes} from '../data/heroes';
// Se manda llamar los datos de "heroes.js"
//Se pasa mediante props
export const getHeroesByPublisher=(publisher)=>{
    //Se crea un arreglo con el tipo de publisher
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    //Validar si los datos en el arreglo se incluyen en en json, sino manda un error
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }
    //retorna los datos ya filtrados del json
    return heroes.filter(heroe => heroe.publisher === publisher);     
}