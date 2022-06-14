import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { SingleUser } from '../Components/SingleUser'

export const MainRoute = () => {
  return (
   <>
   <SingleUser/>
   <Routes>
    <Route path='/' element={} />
    <Route path='/reels' element={} />
    <Route path='/videos' element={} />
    <Route path='/tagged' element={} />
   </Routes>
   </>
  )
}
