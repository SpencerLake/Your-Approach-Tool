import React from 'react'
import "./Header.css"

export default function header () {

    const menuBtn = document.querySelector('.menu-btn')
    let menuOpen = false

    // menuBtn.addEventListener('click', () => {
    //     if(!menuOpen) {
    //         menuBtn.classList.add('open')
    //         menuOpen = true
    //     } else {
    //         menuBtn.classList.remove('open')
    //         menuOpen = false
    //     }
    // })

    return(
        <section>
            <header>
                <div className='menu-btn'>
                    <div className='menu-btn__burger'></div>
                </div>
                <div className='logo'></div>
                <div className='profile-pic'></div>
            </header>
        </section>
    )
}