import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Posts } from '../Components/Posts'
import { Reels } from '../Components/Reels'
import { SingleUser } from '../Components/SingleUser'
import { Tagged } from '../Components/Tagged'
import { Videos } from '../Components/Videos'

export const MainRoute = () => {
  return (
   <>
   <SingleUser/>
   <Routes>
    <Route path='/' element={<Posts/>} />
    <Route path='/reels' element={<Reels/>} />
    <Route path='/videos' element={<Videos/>} />
    <Route path='/tagged' element={<Tagged/>} />
   </Routes>
   </>
  )
}
