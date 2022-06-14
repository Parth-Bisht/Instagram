import React from 'react'
import Slider from '../Components/Slider'
import style from "../Styles/Login.module.css"

import styles from "../Styles/Home.module.css"
const Welcome = () => {
  return (
    <div className={styles.homemain}>
    <div>

    {/* <div className={styles.hom}>
      <img src="https://i.pinimg.com/originals/b7/3e/62/b73e62da299075cc73f9c02dc081804a.png"/>
      <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"/>
    </div> */}
    <div className={styles.home}>
        <img src="https://i.pinimg.com/originals/b7/3e/62/b73e62da299075cc73f9c02dc081804a.png"/>
        
          <div>
          <Slider/>
          </div>
       
    </div>
    </div>
    <div>
    <div className={style.box} style={{marginTop:"30px",width:"100%"}}>
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram"/>
         <form>
         <span class="_9nyy2">Phone number, username, or email</span>
         <br/>
         <input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" name="username" type="text"/>
            <br/>
            <span class="_9nyy2">Password</span>
            <br/>
            <input aria-label="Password" aria-required="true" autocapitalize="off" autocorrect="off" name="password" type="password" />
            <br/>
            <input type="submit" disabled value="Login" />
         </form>
         <div className={style.or}>
           <div ></div>
           <div >or</div>
           <div ></div></div>
         <div style={{display:'flex',alignItems:"center",justifyContent:"center",fontSize:"13px",gap:"10px"}}>
            <img height="14px" width="14px" src="https://www.bing.com/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="facebook"/>
            <span style={{color: "#385185",cursor:"pointer"}}>Login with Facebook</span>
         </div>
         <br/>
         <a style={{color:"rgba(var(--fe0,0,55,107),1)",fontSize:"13px"}} href="#" >Forgot Password?</a>
    </div>
    <div className={style.box} style={{fontSize:"13px",width:"100%"}}>
        <p style={{color: "rgba(var(--i1d,38,38,38),1)"}}>Don't have an account? <a style={{color:"rgba(var(--d69,0,149,246),1)"}} href="/signup">Sign up</a> </p>
    </div>
    <p style={{color: "rgba(var(--i1d,38,38,38),1)",marginBottom:"15px",fontSize:"13px"}}>Get the app</p>
    
    <div className={style.app}>
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="playstore"/>
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="apple"/>
    </div>
  
    </div>
    </div>

  )
}

export default Welcome