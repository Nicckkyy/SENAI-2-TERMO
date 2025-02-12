import React from "react";
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Login from "./pages/login";
import Home from "./pages/home"


const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={ <Login /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path='/home' element={ <Home /> } />
  </Route>

))

export default function App() {
  return (

    <RouterProvider router={browserRouter} />

  );
}
