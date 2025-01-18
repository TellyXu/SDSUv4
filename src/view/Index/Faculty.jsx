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
                    Faculty
                </div>
            </div>
            <div className={'mx-auto w-11/12 md:w-10/12 my-20'}>
                {
                    data.main.FacultyList.map((item, index) => <div key={item.avatar + index}>
                        <div className='md:flex items-center'>
                            <div className='mr-4 w-5/12 md:w-6/12'>
                                <img className={'w-full'}
                                    src={item.avatar} />
                            </div>
                            <div className='md:mt-0 mt-4'>
                                <p className={'text-3xl font-bold'}>{item.col1}</p>
                                <p className={'text-gray-500 mt-2'}>{item.col2}</p>
                                <p className={'font-bold my-4'}>{item.col3}</p>
                                <div className='flex justify-between pr-10'>
                                    <p className={'text-gray-500 w-9/12'}>{item.col4}</p>
                                    <div >
                                        {
                                            item.keyword.map((item2, index2) => <p key={item2 + index2} className='first:mt-0 mt-2 text-gray-500'>{item2}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            index !== data.main.FacultyList.length - 1 &&
                            <div className={'bg-black bg-opacity-15 mt-10'} style={{ height: '1px' }}></div>
                        }
                    </div>)
                }
            </div>
        </main>
        <Footer />
    </div>
}

export default index
