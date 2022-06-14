import React from 'react'
import style from '../../Styles/footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer_main}>
        <div className={style.footer_flex}>

        <p href="https://www.instagram.com/directory/profiles/">Meta </p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
       <p> Help</p>
       <p> API</p>
       <p> Privacy</p>
       <p>Terms</p>
       <p>Top accounts</p>
       <p>Hashtags</p>
        <p>Locations</p>
        <p>Instagram Lite</p>
        <p>Contact uploading and non-users</p>
        </div>
        <div className={style.footer_flex}>
<select name="langyage" className={style.language}>
<option value="English">English (UK) </option>
<option value="Hindi">Hindi </option>
<option value="Bengali">Bengali </option>
<option value="Malayalam">Malayalam </option>
<option value="Marathi">Marathi </option>
<option value="Nepali">Nepali </option>
</select>
          <p>© 2022 Instagram from Meta</p>
        </div>
    </div>
  )
}

export default Footer