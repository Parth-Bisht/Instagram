import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";


const NavStyle = styled.div`
*{
    color:black;
    text-decoration: none;
}

display: flex;
justify-content: center;

.linksdiv{
width:40%;
text-align: center;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
margin:2px;
padding:10px;
color:blue;
}
.linksdiv span{
 padding-inline:5px;
} 
`


export const Userpost = () => {
  return (
   <>
   <hr/> 
         <NavStyle>
         <div className='linksdiv'>
         <NavLink  to="/"><BsFillGrid3X3GapFill/><span>POSTS</span></NavLink>
         <NavLink  to="/reels"><MdOutlineVideoLibrary/><span>REELS</span></NavLink>
         <NavLink  to="/videos" ><i class="fa-solid fa-circle-play"></i> <span>VIDEOS</span></NavLink>
         <NavLink  to="/tagged" ><MdOutlinePermContactCalendar/><span>TAGGED</span></NavLink>
         </div>
        </NavStyle>
   </>
  )
}
