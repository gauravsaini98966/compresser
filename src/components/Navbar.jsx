import React from 'react'
import { PiDotsNineBold } from "react-icons/pi";
import { IoCaretDownOutline } from "react-icons/io5";



function Navbar() {
    return (
        <div className=''>

            <div className=''>

                <div className=''>LOGO</div>
                <div className=''>
                    <span><PiDotsNineBold /> </span>
                    <span>Tools</span>
                    <span><IoCaretDownOutline />
                    </span>

                </div>

                <div></div>

            </div>

        </div>
    )
}

export default Navbar