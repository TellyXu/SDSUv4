import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";

import data from "../../../public/data.json"


const index = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        scrollTo(0, 0)
    }, 0);

    return <div className="flex flex-col min-h-screen"
                style={{backgroundColor: '#000000'}}>
        <Header/>
        <main className="flex-grow"
              style={{minHeight: 'calc(100vh - var(--header-footer-height))'}}>
        </main>
        <Footer/>
    </div>
}

export default index
