import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Navbar = () => {

    const navigate = useNavigate();

    //const navigate = useNavigate(); Lo que realiza es llamar un customHook que direcciona 
    // a una ruta en especial, este customHook con el react-router-dom,se puede ejecutar 
    // llamandolo dentro de un metodo con la ruta como se muestra:
    // navigate('/login', { 
    //    replace: true
    //})
    // Se puede mandar un objeto que contiene el "replace y state"
    //Lo que hace "replace: true" es reemplazar la ruta que uno se encuentra
    //Ejemplo:
    //Cuando presionamos logout
    // que manda a la page Login pero si intentas regresar con la flecha del
    //navegador ya no te va aparecer la misma sesion de usuario, la cambia por
    // una page del navegador, viene con el react-router-dom



    const onLogout = () =>{
        navigate('/login', {
            replace: true
        })
    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collage">
                <div className="navbar-nav">
                    <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                    to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                    to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}`}
                    to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className="nav-item nav-link text-primary">
                        Mario
                   </span>
                   <button className="nav-item nav-link btn"
                           onClick={onLogout}
                   >
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}
