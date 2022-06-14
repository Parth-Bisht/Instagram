import React from 'react';
import Carousel from 'fade-carousel'


function Slider() {

 const urls= ['https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png',
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png',
   'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png',
   'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png'
];

 const divStyle = {
    height: "560px",
    width: "245px",
    
    backgroundColor: '#f2f2f2'
  }
  


  return (
    <div >
      <Carousel divStyle={divStyle} delay={4000} mode={"fade"} >
        {urls.map((url, index) => (
         
            <img
              src={url}
              style={{ width: "100%", height: "auto" }}
              alt="asdada"
             
            />
          
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
