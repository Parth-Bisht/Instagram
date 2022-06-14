import React, { useState } from 'react'
import style from '../../Styles/Signup.module.css'

import { FaFacebookSquare } from 'react-icons/fa';
import Footer from '../../Components/Footer';


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
        <div>
        <div className={style.sign_main}>
            <form className={style.signup} onSubmit={handleSubmit}>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instalogo" className={style.logo} />
                <h3 className={style.sign_heading}>Sign up to see photos and videos from your friends.</h3>

                <div className={style.login_fb}>
                    <div className={style.icon}>
                        <FaFacebookSquare />
                    </div>
                    <p>Log in with Facebook</p>
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
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
            </div>







        


        </div>
        <Footer/>
        </div>
    )
}

export default Signup