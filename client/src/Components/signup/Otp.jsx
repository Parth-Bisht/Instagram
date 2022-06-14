import React from 'react'
import otp from '../../Images/otp.png';

import apple_store from '../../Images/apple_store.png'
import google_play from '../../Images/google_play.png'
import style from '../../Styles/signup.module.css'
const Otp = () => {
  return (
    <div>
         

<div className={`${style.sign_main} ${style.signup}`}>
        <div className={style.date_of_birth} >
  <img src={otp} alt="img"  className={style.img_date}/>
<h4 >Just one more step</h4>
<p>Enter the 6-digit code we sent to:</p>
<span>
    {/* data from server */}
    9999999999
</span>
  
  </div>
  <input type="number" name="otp" placeholder='######'required 
  className={style.otp_input}/>

  <button className={style.login_fb + " " + style.signup_btn + " " + style.confirm}>Confirm</button>
 
  <div className={style.change_req}>
<span>Change Number</span>
<hr />
<span>Request new Code</span>

</div>


 
  </div>
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

export default Otp