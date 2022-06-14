import React from 'react'
import style from "../Styles/Login.module.css"
const Login = () => {
  return (
    <div>
    <div className={style.box} style={{marginTop:"30px"}}>
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
    <div className={style.box} style={{fontSize:"13px"}}>
        <p style={{color: "rgba(var(--i1d,38,38,38),1)"}}>Don't have an account? <a style={{color:"rgba(var(--d69,0,149,246),1)"}} href="/signup">Sign up</a> </p>
    </div>
    <p style={{color: "rgba(var(--i1d,38,38,38),1)",marginBottom:"15px",fontSize:"13px"}}>Get the app</p>
    
    <div className={style.app}>
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="playstore"/>
        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="apple"/>
    </div>
    </div>
  )
}

export default Login


/*
 const urls= ['https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png',
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png',
   'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png',
   'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png'
];
*/