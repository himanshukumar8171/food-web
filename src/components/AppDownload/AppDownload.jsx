import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./AppDownload.css"

const AppDownload = () => {
  return (
    <div className='app-donaload' id='app-donaload'>
        <p>for Better Experience Download <br/>Tomato App</p>
        <div className="download-plateform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
