import React from 'react'

export const Stories = ({Stories}) => {
    
  return (
    <>
     <div>
        <img src={Stories.imgurl} alt ='' />
        <h4>{Stories.plateform}</h4>
     </div>

    </>
  )
}
