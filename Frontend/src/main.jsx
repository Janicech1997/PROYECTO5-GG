import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import Contactos from "./components/contactos/Contactos";
import Inicio from "./components/inicio/Inicio";
import Productos from "./components/productos/Productos";
import Productoindividual from "./components/productos/Productoindividual"
import Productoindividualpago from "./components/productos/Productoindividualpago"
import Registrarse from "./components/iniciarsesion/Registrarse";
import Iniciarsesion from "./components/iniciarsesion/Iniciarsesion";
import UserProvider from './context/UserContext'


const routesFromElements = createRoutesFromElements(
  <Route>
    <Route index element={<Inicio />} />
    <Route path='/' element={<Inicio />} />
    <Route path='/inicio' element={<Inicio />} />
    <Route path='/productos' element={<Productos />} />
    <Route path='/productoindividual' element={<Productoindividual />} />
    <Route path='/contactos' element={<Contactos />} />
    <Route path='/registrarse' element={<Registrarse />} />
    <Route path='/iniciarsesion' element={<Iniciarsesion />} />
    <Route path='/productoindividualpago' element={<UserProvider><Productoindividualpago /></UserProvider> } />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
