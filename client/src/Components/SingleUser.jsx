import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Profile } from './Profile'
import { Stories } from './Stories'
import { Userpost } from './Userpost'
export const SingleUser = () => {
 const[data,setData] = useState([])


  useEffect(()=>{

   const getData= async ()=>{
    const res =  await axios.get(`http://localhost:4000/user`)
    const data = res.data;
    console.log(data,"data");
    setData(data)
   }

getData()

  },[])

  return (
   <>
   {data.map((el)=>{
    return [<Profile key={el.id} {...el} />]
   })}
   {data.map((el)=>{
    return  <Stories key={el.id} {...el} />
   })}
    <Userpost/>

   </>
  )
}
