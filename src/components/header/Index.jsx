import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import logoaimahead from "../../assets/components/header/aimahead-logo-white-lg.png"
import "./Index.css"

import data from "../../index.json"

function Index() {
    const [is_scroll, set_is_scroll] = useState(false)

    const navigate = useNavigate();

    document.addEventListener('scroll', e => {
        const scrollTop = window.scrollY || window.pageYOffset;
        if (scrollTop > 750) set_is_scroll(true)
        else set_is_scroll(false)
    })

    return (
        <div className="fixed top-0 z-40 w-full text-white bg-opacity-20 transition-all duration-500" style={{ background: is_scroll ? "#4aa1d4" : "" }}>
            <header className="py-6 px-20 flex">
                <div className="w-1/12">
                    <img src={data.header.logoUrl} alt="AI Health Equity Logo" style={{height: '60px', width: 'auto'}}/>
                </div>
                <div className="w-10/12 flex gap-x-4 items-center">
                    <p style={{fontFamily: 'gentona', fontWeight: 500}}>
                       {
                        data.header.title
                       }
                    </p>
                </div>

                <div className="w-5/12  justify-end gap-x-4 items-center hidden">
                    <div>
                        <p style={{fontFamily: 'gentona', fontWeight: 500}}
                           className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
                            Home
                        </p>
                    </div>
                    <div>
                        <p style={{fontFamily: 'gentona', fontWeight: 500}}
                           className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
                            About Us
                        </p>
                    </div>
                    <div>
                        <p style={{fontFamily: 'gentona', fontWeight: 500}}
                           className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
                            Insight & Research
                        </p>
                    </div>
                    <div>
                        <p style={{fontFamily: 'gentona', fontWeight: 500}}
                           className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
                            Partnership
                        </p>
                    </div>
                    <div>
                        <p style={{fontFamily: 'gentona', fontWeight: 500}}
                           className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
                            Events
                        </p>
                    </div>
                    {/*
                    <div>
                        <p className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
                            Join the email list
                        </p>
                    </div>

                    */}
                    <div>
                        <i className="iconfont icon-search text-2xl hover:text-yellow-400 transition-all cursor-pointer"></i>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Index
