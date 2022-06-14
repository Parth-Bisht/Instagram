import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const NavStyle = styled.nav`
margin:2px;
padding:10px;

color:blue;
`


export const Userpost = () => {
  return (
   <>
   <hr/> 
         <NavStyle>
         <NavLink  to="/" >POSTS</NavLink>
         <NavLink  to="/reels" >REELS</NavLink>
         <NavLink  to="/videos" >VIDEOS</NavLink>
         <NavLink   to="/tagged" >TAGGED</NavLink>
        </NavStyle>
   </>
  )
}
