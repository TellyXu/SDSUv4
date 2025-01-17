import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logoaimahead from "../../../public/aimahead-logo-white-lg.png";
import "./Index.css";
import data from "../../../public/data.json";

function Index() {
    const [is_scroll, set_is_scroll] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > 750) set_is_scroll(true);
            else set_is_scroll(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleHTML = data.header.title.replace(/(aim-ahead|aimahead)/gi, match =>
        `<span class="${is_scroll ? 'text-scroll-white' : 'text-initial-blue'}">${match}</span>`
    );

    return (
        <div className={`fixed top-0 z-40 w-full text-white bg-opacity-100 transition-all duration-500 ${is_scroll ? 'bg-blue-400' : ''}`}>
            <header className="p-2 lg:py-6 lg:px-20 flex box-border">
                <div className="w-28 lg:w-1/12 lg:mr-10 mr-6">
                    <img src={logoaimahead} alt="AI Health Equity Logo" style={{ width: 'auto' }} />
                </div>
                <div className="w-10/12 flex gap-x-4 items-center">
                    <p className="font-gentona font-medium " dangerouslySetInnerHTML={{ __html: titleHTML }}>
                    </p>
                </div>

            </header>
        </div>
    );
}

export default Index;
// import { useState } from 'react'
// import { useNavigate } from "react-router-dom"
//
// import logoaimahead from "../../../public/aimahead-logo-white-lg.png"
// import "./Index.css"
//
// import data from "../../../public/data.json"
//
//
// function Index() {
//     const [is_scroll, set_is_scroll] = useState(false)
//
//     const navigate = useNavigate();
//
//     document.addEventListener('scroll', e => {
//         const scrollTop = window.scrollY || window.pageYOffset;
//         if (scrollTop > 750) set_is_scroll(true)
//         else set_is_scroll(false)
//     })
//
//     return (
//         <div className="fixed top-0 z-40 w-full text-white bg-opacity-20 transition-all duration-500" style={{ background: is_scroll ? "#4aa1d4" : "" }}>
//             <header className="p-2 lg:py-6 lg:px-20 flex box-border">
//                 <div className="w-28 lg:w-1/12 lg:mr-10 mr-6">
//                     <img src={logoaimahead} alt="AI Health Equity Logo" style={{ width: 'auto' }} />
//                 </div>
//                 <div className="w-10/12 flex gap-x-4 items-center">
//                     <p style={{fontFamily: 'gentona', fontWeight: 500}}
//                        className={is_scroll ? "text-white-on-scroll" : ""}
//                        dangerouslySetInnerHTML={{__html: data.header.title}}>
//                     </p>
//                 </div>
//
//                 <div className="w-5/12  justify-end gap-x-4 items-center hidden">
//                     <div>
//                         <p style={{fontFamily: 'gentona', fontWeight: 500}}
//                            className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
//                             Home
//                         </p>
//                     </div>
//                     <div>
//                         <p style={{ fontFamily: 'gentona', fontWeight: 500 }}
//                             className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
//                             About Us
//                         </p>
//                     </div>
//                     <div>
//                         <p style={{ fontFamily: 'gentona', fontWeight: 500 }}
//                             className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
//                             Insight & Research
//                         </p>
//                     </div>
//                     <div>
//                         <p style={{ fontFamily: 'gentona', fontWeight: 500 }}
//                             className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
//                             Partnership
//                         </p>
//                     </div>
//                     <div>
//                         <p style={{ fontFamily: 'gentona', fontWeight: 500 }}
//                             className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
//                             Events
//                         </p>
//                     </div>
//                     {/*
//                     <div>
//                         <p className="py-1 border-b-2 border-transparent hover:border-yellow-400 hover:border-b-2 hover:border-solid cursor-pointer transition-all">
//                             Join the email list
//                         </p>
//                     </div>
//
//                     */}
//                     <div>
//                         <i className="iconfont icon-search text-2xl hover:text-yellow-400 transition-all cursor-pointer"></i>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     )
// }
//
// export default Index
