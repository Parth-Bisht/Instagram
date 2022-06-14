import React from 'react'
import styled from 'styled-components'

const Storydiv = styled.div`
margin:1.25rem;
display :grid;
grid-template-columns:repeat(4,6.875rem);
grid-template-rows: auto;

.upperborder{
border:0.0625rem solid gray;
border-radius: 50%;
margin:0.3125rem;
}

.imgtag{
 width:5.4375rem;
 height:5.4375rem; 
 border:0.0625rem solid gray ;
 margin:0.125rem;
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
