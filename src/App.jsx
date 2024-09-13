import { useEffect, useState } from 'react'
import './app.scss'
import { Routes, Route } from 'react-router-dom'
import { publicRouters } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
     <Routes>
        {/* <Route path='/' element={ <Home /> } />
        <Route path='/about' element={<About />} /> */}

        {publicRouters.map (route =>{
            let Element = route.element
          return (
            <Route key={route.name} path={route.path} element={ <Element />} />
          )
        })}
     </Routes>
    </>
  )
}

export default App
