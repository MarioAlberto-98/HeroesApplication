import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    //  Hace por default una ruta poniendo http://127.0.0.1:5173
    // <Route path="/" element={<Navigate to="/marvel"/> }/> 
  return (
    <>
        <Navbar/>
        <div className="container">
        <Routes>
                <Route path="marvel" element ={<MarvelPage/>} />
                <Route path="dc" element={<DcPage/>} />
                <Route path="search" element ={<SearchPage/>} />
                {/* Se asigna una ruta y se maneraja en base al Id del heroe que se mandan a HeroPage, con destructuracion  */}
                <Route path="hero/:id" element={<HeroPage/>} />
                <Route path="/" element={<Navigate to="/marvel"/> }/> 
        </Routes>  
        </div>
    </>
  )
}
23800