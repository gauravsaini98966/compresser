import React from 'react'
import PDF from "../assets/PdfAnimation.gif"

function Homepage() {
    return (
        <div className='flex justify-between items-center py-[200px] px-[5%] '>

            <div className=''>
                <h1 className='text-[48px] font-[700]  text-[#1a1a1a]'>We make PDF easy .
                </h1>
                <p className='text-[22px] font-[400] py-[20px] text-[#1a1a1a]'>All the tools you’ll need to be more productive and work <br />smarter with documents.</p>

                <button className='text-[#0055ff] text-[16px] font-[700] border-[1px] border-solid border-[#0055ff] rounded-[4px]  px-[10px] py-[6px] bg-transparent	  hover:text-white hover:bg-[#0055ff] '>Explore All PDF Tools</button>

            </div>

            <div className=''>
                <img className='w-[300px]' src={PDF} alt="pdf" />
            </div>

        </div>
    )
}

export default Homepage