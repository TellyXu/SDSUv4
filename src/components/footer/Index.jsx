import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import logoaimahead from "../../../public/aimahead-logo-white-lg.png"
import data from "../../../public/data.json"

function Index() {

    return (
        <footer className='lg:py-10 lg:px-20 p-4' style={{ background: "#4aa1d4" }}>
            <div className='block lg:flex'>
                <div className='w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center md:justify-start'>
                    <img src={logoaimahead} alt="AI Health Equity Logo" style={{ height: '60px', width: 'auto' }} />
                </div>

                <div className='w-full lg:w-7/12 flex items-center'>
                    <div className='flex w-full lg:flex-row lg:w-full lg:justify-end flex-wrap gap-6 uppercase'
                        style={{ color: "#FFF" }}>

                        <span onClick={_ => window.open(data.footer.item1Link)} className='hover:text-blue-700 cursor-pointer transition-all block w-full text-center lg:w-auto lg:inline'>
                            {data.footer.item1}
                        </span>
                        <span onClick={_ => window.open(data.footer.item2Link)} className='hover:text-blue-700 cursor-pointer transition-all block w-full text-center lg:w-auto lg:inline'>
                            {data.footer.item2}
                        </span>
                        <span onClick={_ => window.open(data.footer.item3Link)} className='hover:text-blue-700 cursor-pointer transition-all block w-full text-center lg:w-auto lg:inline'>
                            {data.footer.item3}
                        </span>

                        {/*}
                        <div className='flex-col lg:flex-row gap-4 hidden lg:flex'>
                            <span className=''>LinkedIn</span>
                            <span className=''>Twitter</span>
                            <span className=''>Instagram</span>
                            <span className=''>Facebook</span>
                            <span className=''>YouTube</span>
                        </div>
                        */}
                    </div>
                </div>
                {/*
                <div className='flex justify-center gap-x-4 mt-4 lg:hidden'>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                    <div className='w-10 h-20 flex justify-center items-center rounded-full overflow-hidden'>
                        <img src={tt}/>
                    </div>
                </div>
                */}
            </div>
            <span style={{color: "#FFF"}} className='mt-1 block w-full text-center lg:w-auto lg:inline font-extrabold'>
                {data.footer.copyright}
            </span>

        </footer>
    )
}

export default Index
