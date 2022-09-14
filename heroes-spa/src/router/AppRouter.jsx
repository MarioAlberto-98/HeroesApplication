import {Route,Routes}  from 'react-router-dom';
import {LoginPage} from '../auth';
import {HeroesRoutes} from '../heroes';


export const AppRouter=()=>{
    //  Hace por default una ruta poniendo http://127.0.0.1:5173
    // <Route path="/" element={<Navigate to="/marvel"/> }/> 
    return(
        <>
            
            <Routes>
                <Route path="login" element={<LoginPage/>} />
                <Route path="/*" element={<HeroesRoutes/>}/>
            </Routes>
        </>
    )
}