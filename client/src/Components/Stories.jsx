import React from 'react'
import styled from 'styled-components'

const Storydiv = styled.div`
margin:20px;
display :grid;
grid-template-columns:repeat(4,110px);
grid-template-rows: auto;

.upperborder{
border:1px solid gray;
border-radius: 50%;
margin:5px;
}

.imgtag{
 width:87px;
 height:87px; 
 border:1px solid gray ;
 margin:2px;
 border-radius: 50%;
}
`



export const Stories = ({Stories}) => {

  return (
    <Storydiv>
     {Stories.map((el)=>{
        return <div key={el.id} > <div className='upperborder'><img className='imgtag' src={el.imgurl} alt ='' /></div>
        <h4>{el.plateform}</h4></div>
     })}
    </Storydiv>
  )
}
