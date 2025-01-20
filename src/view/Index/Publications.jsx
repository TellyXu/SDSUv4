import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";

import data from "../../../public/data.json"

console.log(data.main.FacultyList)
const index = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        scrollTo(0, 0)
    }, 0);

    return <div className={'flex flex-col'}>
        <Header />
        <main className='h-full' style={{ background: '#f0f0f0' }}>
            <div className={'h-72 flex justify-center items-center'} style={{ background: '#4aa1d4', height: '24rem' }}>
                <div className='text-white text-6xl font-bold mt-10 flex flex-col'>
                    <button className='text-center text-base hover:underline' onClick={_ => navigate('/')}>
                        Return to homepage
                    </button>
                    Projects & Publications
                </div>
            </div>
            <div className={'mx-auto w-11/12 md:w-10/12 my-20'}>

                <div className='w-11/12 mx-auto md:w-6/12'>
                    {
                        data.main.publications.map((item, index) => <div key={item.content + index} dangerouslySetInnerHTML={{ __html: item.content }} 
                            className='first:mt-0 mt-12 text-center shadow-md rounded-md hover:shadow-lg transition-all p-8'
                        >
                        </div>)
                    }
                </div>

            </div>
        </main>
        <Footer />
    </div>
}

export default index
