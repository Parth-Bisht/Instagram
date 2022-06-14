import React from 'react'
import style from '../../Styles/footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer_main}>
        <div className={style.footer_flex}>

        <p>Meta </p>
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
<option value="English">English (India) </option>
<option value="English">Hindi (India) </option>
<option value="English">Benhali (India) </option>
<option value="English">Malayalam </option>
</select>
          <p>© 2022 Instagram from Meta</p>
        </div>
    </div>
  )
}

export default Footer