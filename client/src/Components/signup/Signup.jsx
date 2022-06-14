import React, { useState } from 'react'
import style from '../../Styles/signup.module.css'
import insta_logo from '../../Images/insta_logo.png'
import apple_store from '../../Images/apple_store.png'
import google_play from '../../Images/google_play.png'
import { FaFacebookSquare } from 'react-icons/fa';


const Signup = () => {
    const [FormData, setFormData] = useState({});

    const handleChange = (e) => {
        const inputName = e.target.name;
          setFormData({
            ...FormData,
            [inputName]: e.target.value,
          });

      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (FormData) {
             console.log(FormData)
     
        } else {
          alert("Fill the details Correctly");
        }
      };

    return (
        <div className={style.sign_main}>
            <form className={style.signup} onSubmit={handleSubmit}>
                <img src={insta_logo} alt="instalogo" className={style.logo} />
                <h3 className={style.sign_heading}>Sign up to see photos and videos from your friends.</h3>

                <div className={style.login_fb}>
                    <div className={style.icon}>
                        <FaFacebookSquare />
                    </div>
                    <a href='http://www.facebook.com/'>Log in with Facebook</a>
                </div>

                <div className={style.or}>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>

                <div className={style.input_box}>
                    <input type="text" name="email"
                    onChange={handleChange}
                        placeholder='Mobile Number or Email' required />
                    <input type="text" name="name" placeholder='Full Name'
                        onChange={handleChange}
                        required/>
                    <input type="text" name="username" placeholder='Username'
                        onChange={handleChange}
                        required/>
                    <input type="password" name="password" placeholder='Password'
                        onChange={handleChange}
                        required 
                        aria-required="true"
                        
                        />
                </div>
                <div className={style.para}>
                    <p>People who use our service may have uploaded your
                        contact information to Instagram. <span>Learn More</span> </p>
                    <p>By signing up, you agree to our Terms , <span> Data Policy and Cookies Policy .
                    </span></p>
                </div>
                <button className={style.login_fb + " " + style.signup_btn}
                // style={!error ? {backgroundColor:"blue"} : {backgroundColor:"black"}}
                    type='submit' onClick={handleSubmit} >Sign up</button>
            </form>

            <div className={style.have_ac}>
                <p>Have an account? <span >Log in</span> </p>
            </div>

            <p>Get the app.</p>
            <div className={style.getApp}>
                <img src={apple_store} alt="apple store" />
                <img src={google_play} alt="google play" />
            </div>










        </div>
    )
}

export default Signup