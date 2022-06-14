import React from 'react'
import style from '../../Styles/signup.module.css'
import insta_logo from '../../Images/insta_logo.png'
import apple_store from '../../Images/apple_store.png'
import google_play from '../../Images/google_play.png'
import { FaFacebookSquare } from 'react-icons/fa';


const Signup = () => {
  return (
    <div className={style.sign_main}>
    <div className={style.signup}>
<img src={insta_logo} alt="instalogo" className={style.logo}/>
        <h3 className={style.sign_heading}>Sign up to see photos and videos from your friends.</h3>

        <div className={style.login_fb}>
            <div className={style.icon}>
            <FaFacebookSquare/>
            </div>
        <p>Log in with Facebook</p>
        </div>

<div className={style.or}>
    <div></div>
    <div>OR</div>
    <div></div>
</div>

<div className={style.input_box}>
    <input type="text" placeholder='Mobile Number or Email'/>
    <input type="text" placeholder='Full Name'/>
    <input type="text" placeholder='Username'/>
    <input type="text" placeholder='Password'/>
</div>
<div className={style.para}>
    <p>People who use our service may have uploaded your
         contact information to Instagram. <span>Learn More</span> </p>
         <p>By signing up, you agree to our Terms , <span> Data Policy and Cookies Policy .
            </span></p>
</div>
<button className={style.login_fb+ " " +style.signup_btn}>Sign up</button>
    </div>

<div className={style.have_ac}>
<p>Have an account? <span>Log in</span> </p>
</div>

    <p>Get the app.</p>
<div className={style.getApp}>
<img src={apple_store} alt="" />
<img src={google_play} alt="" />
</div>










    </div>
  )
}

export default Signup