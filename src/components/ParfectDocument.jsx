import React from 'react'
import Perfectpic from "../assets/PerfectPic.svg"

function ParfectDocument() {
    return (
        <div className='flex justify-between py-[20px] md:flex-col items-center w-[100%]'>


            <div className='w-[50%] md:w-[100%]'>

                <h3 className='text-[32px] sm:text-[26px] xs:text-[24px] font-[700]  text-[#1a1a1a]'>Create the Perfect Document
                </h3>

                <p className='text-[18px] py-[10px] sm:text-[16px] xs:text-[16px] font-[400]  text-[#1a1a1a]'>File too big? Compress it. Need a specific format? Convert it. Things getting chaotic? Merge and split files, or remove excess pages.</p>

            </div>
            <div className='w-[50%] md:w-[100%] sm:w-[70%] xs:w-[90%]'>
                <img src={Perfectpic} alt="image" />

            </div>

        </div>
    )
}

export default ParfectDocument