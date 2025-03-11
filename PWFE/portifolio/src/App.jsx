import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Main from './pages/inicio'


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={ <Main /> } />
    {/* <Route path='/login' element={ <Login /> } /> */}
    {/* <Route path='/home' element={ <Home /> } /> */}
  </Route>
))

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
