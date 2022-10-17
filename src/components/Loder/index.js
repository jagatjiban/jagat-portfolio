import React from 'react'
import './index.scss'
import LogoJ from '../../assets/images/jagat-logo.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'

const Loader=() =>{
    return(
    <>
        <div className="loader-container">
            <span className='loader-logo-container'>
                <img className='loader-logo'src={LogoJ} alt="logo" />
                <img className='loader-sub-logo' src={LogoSubtitle} alt="logo-subtitle" />
            </span>
            <span className='text'>jagat is working</span>
            <div className="loadingbar-container">
                <div className='loadingbar'></div>
            </div>
        </div>
    </>
    )
} 

export default Loader;