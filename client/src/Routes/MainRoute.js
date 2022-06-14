import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { SingleUser } from '../Components/SingleUser'

export const MainRoute = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<SingleUser/>} />
   </Routes>
   </>
  )
}
