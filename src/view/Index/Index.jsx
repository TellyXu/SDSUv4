import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";


import ucsd_bg1 from "../../assets/view/sdsuphotos/11.png";
import ucsd_bg2 from "../../assets/view/sdsuphotos/22.jpg";
import ucsd_bg3 from "../../assets/view/sdsuphotos/33.jpg";
import ucsd_bg4 from "../../assets/view/sdsuphotos/44.jpg";
import ucsd_bg5 from "../../assets/view/sdsuphotos/55.jpeg";

const bg2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wIAAgMBAAirR9cAAAAASUVORK5CYII=";

import TMedit from "../../assets/view/sdsutwo.png";

import bIMG_7003_TMedit from "../../assets/view/sdsutwo.png";

import Scrollreveal from "scrollreveal"
import { CSSTransition } from 'react-transition-group';

import icon1 from "../../assets/view/icon1.jpg"
import icon2 from "../../assets/view/icon2.jpg"
import icon1Bg from "../../assets/view/icon1Bg.jpg"
import icon2Bg from "../../assets/view/icon2Bg.jpg"
import googlescholar from "../../assets/view/scholar_logo_64dp.png"

import "./Index.css"


import data from "../../index.json"


console.log('data', data)


function Index() {
    // const navigate = useNavigate();
    const two = useRef(null);
    const [isMain, setIsMain] = useState(false);
    const cssRef = useRef(null);

    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0)'); // 初始颜色为完全透明
    const [opacity1, setOpacity1] = useState(1);

    useEffect(() => {
        const currentElement = two.current;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) setIsMain(false)
                else setIsMain(true)
            });
        });

        if (currentElement) {
            io.observe(currentElement);
        }


        const scrollreveal = new Scrollreveal()
        setTimeout(() => {
            const optionsScoll = (position) => {
                return {
                    duration: 1000,
                    delay: 300,
                    origin: position ? position : 'right',
                    reset: true,
                    mobile: true,
                    distance: '500px',
                    opacity: 0.001,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)',
                    scale: 1,
                }
            }
            scrollreveal.reveal('#bg2', optionsScoll('bottom'))
            scrollreveal.reveal('#bg3, #bg4', optionsScoll('right'))
        }, 500)

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            let opacity_bg = 0;
            if (scrollTop < 1000) {
                opacity_bg = 0.9 * scrollTop / 750;
            } else {
                opacity_bg = 1;
            }

            // 根据滚动距离计算背景颜色的不透明度
            const newColor = `rgba(0, 45, 114, ${opacity_bg})`;
            setBgColor(newColor);


            // 设置一个基准滚动距离，在此之后元素开始变淡
            const fadeStart = 20;
            // 设定最大滚动距离，达到此距离后元素完全透明
            const fadeUntil = 100;

            let newOpacity = 1;

            if (scrollTop > fadeStart) {
                newOpacity = 1 - ((scrollTop - fadeStart) / (fadeUntil - fadeStart));
                newOpacity = newOpacity < 0 ? 0 : newOpacity;
            }
            setOpacity1(newOpacity);
        };


        // 监听页面滚动事件
        window.addEventListener('scroll', handleScroll);

        return () => {
            if (currentElement) io.disconnect()

        }





    }, [])


    return (
        <div>
            <Header />
            <main className="text-white">
                <div style={{ backgroundColor: bgColor }}>
                    <div id="slideshow" className="absolute w-full h-full top-0 -z-10">
                        {
                            data.header.bannerUrls.map((item, index) => (
                                <img key={item + index} className="slide absolute w-full h-full object-cover opacity-0" src={item}
                                    alt="Background 1" />
                            ))
                        }
                    </div>

                    <div className="relative h-screen element">

                        <h1 className="w-6/12 text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p style={{ fontFamily: 'quadon', fontWeight: 600, fontSize: '50px', opacity: opacity1 }}
                                className="m-0 text-6xl font-bold fadeInSlow">
                                {data.header.main.titlePrimary}
                            </p>

                            <div style={{ fontFamily: 'gentona', fontWeight: 400, fontSize: '18px' }}
                                className="mt-3 text-lg fadeInFast">
                                {data.header.main.titleSecondary}
                            </div>
                        </h1>
                        <CSSTransition in={isMain} timeout={300} classNames="fade" unmountOnExit nodeRef={cssRef}>
                            <div ref={cssRef}
                                className="absolute left-1/2 -translate-x-1/2 transform bg-yellow-400 z-10 opacity-60"
                                style={{ width: "1px", height: "20rem", bottom: "-6rem" }}></div>
                        </CSSTransition>
                    </div>
                </div>
                <div className="relative pb-20 bg-rose-300 bg-opacity-15 overflow-hidden"
                    style={{ background: "#4aa1d4" }}>
                    <img id="bg2" className="absolute w-full h-full -left-48 top-0 z-20 opacity-5 object-contain"
                        src={bg2} alt="Background" />
                    <div ref={two} className="w-11/12 relative z-20 text-center mx-auto">
                        <p style={{ fontFamily: 'quadon', fontWeight: 400 }}
                            className="m-0 mt-52 text-6xl font-bold text-center">The Latest</p>
                        <div className='relative mt-8 flex'>
                            <div
                                className='w-8/12 left-content text-left border-r pr-20 box-border border-r-white border-opacity-20'>
                                <img className='w-full shadow-primary' src={TMedit} />
                                <p style={{
                                    fontFamily: 'gentona',
                                    fontWeight: 200,
                                    fontSize: '14px',
                                    color: '#F1C400'
                                }} className='mt-8'>Introduction</p>
                                <p style={{ fontFamily: 'gentona', fontWeight: 400, fontSize: '36px' }}
                                    className='font-bold mt-4 text-3xl hover:underline'>AI for Health Equity Research Lab supported by AIM-AHEAD Program for AI Readiness (PAIR) </p>
                                <p style={{ fontFamily: 'gentona', fontWeight: 200, fontSize: '18px' }}
                                    className='mt-2'>
                                    TBD
                                </p>
                                {/*
                                <div className='mt-8 flex gap-x-10'>
                                    <div className='w-6/12 flex flex-col'>
                                        <img className='w-full shadow-primary' src={main4} />
                                        <p className='mt-8' style={{ color: "#F1C400" }}>Highlight</p>
                                        <p className='mt-3 text-4xl'>
                                            GKII Announces Breakthrough Grant Awardees for Health Data Research
                                        </p>
                                        <p className='mt-3'>
                                            This exciting collaboration with Ashoka University is focused on the field of Health Data Research. Two teams were selected, each with a lead PI from both Johns Hopkins University and Ashoka University. This grant challenge awards $60,000 to each winning proposal for 18 months.
                                        </p>
                                    </div>
                                    <div className='w-6/12 flex flex-col'>
                                        <img className='w-full shadow-primary' src={main3} />
                                        <p className='mt-8' style={{ color: "#F1C400" }}>Highlight</p>
                                        <p className='mt-3 text-4xl'>
                                            Dr. Gigi Gronvall the Awardee of GKII Climate & Health Breakthrough Grant
                                        </p>
                                        <p className='mt-3'>
                                            The Gupta-Klinsky India Institute is excited to announce that Dr. Gigi Gronvall, Associate Professor, Department of Environmental Health and Engineering, at the Johns Hopkins Bloomberg School of Public Health has been selected as the awardee of the Summer 2023 GKII Breakthrough Research Grants Program!
                                        </p>
                                    </div>
                                </div>
                                                     */}
                            </div>


                            <div className='w-4/12 pl-12 right-content-line'>
                                <div className=''>
                                    <div className='text-left right-content-line1'>
                                        <p className='text-6xl font-bold' style={{
                                            color: "#eac642",
                                            fontFamily: 'Arnhem',
                                            fontWeight: 700,
                                            fontSize: '70px'
                                        }}>
                                            {data.main.regionOne.right.one['text-1-1']}
                                        </p>
                                        <p className='my-3 font-bold text-2xl'
                                           style={{fontFamily: 'gentona', fontWeight: 700, fontSize: '30px'}}>
                                            {data.main.regionOne.right.one['text-1-2']}
                                        </p>
                                        <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}>
                                            {data.main.regionOne.right.one['text-1-3']}
                                        </p>
                                    </div>
                                    <div className='mt-10 text-left right-content-line2'>
                                        <p className='text-6xl font-bold' style={{
                                            color: "#eac642",
                                            fontFamily: 'Arnhem',
                                            fontWeight: 700,
                                            fontSize: '70px'
                                        }}>
                                            {data.main.regionOne.right.two['text-2-1']}
                                        </p>
                                        <p className='my-3 font-bold text-2xl'
                                           style={{fontFamily: 'gentona', fontWeight: 700, fontSize: '30px'}}>
                                            {data.main.regionOne.right.two['text-2-2']}
                                        </p>
                                        <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}>
                                            {data.main.regionOne.right.two['text-2-3']}
                                        </p>
                                    </div>
                                    <div className='mt-10 text-left right-content-line3'>
                                        <p className='text-6xl font-bold' style={{
                                            color: "#eac642",
                                            fontFamily: 'Arnhem',
                                            fontWeight: 700,
                                            fontSize: '70px'
                                        }}>
                                            {data.main.regionOne.right.three['text-3-1']}
                                        </p>
                                        <p className='my-3 font-bold text-2xl'
                                           style={{fontFamily: 'gentona', fontWeight: 700, fontSize: '30px'}}>
                                            {data.main.regionOne.right.three['text-3-2']}
                                        </p>
                                        <p style={{fontFamily: 'gentona', fontWeight: 200, fontSize: '18px'}}>
                                            {data.main.regionOne.right.three['text-3-3']}
                                        </p>
                                    </div>
                                </div>

                                <div className='mt-4 border-t border-white pt-4 border-opacity-30 right-content-line4'>
                                    <div className='flex'>
                                        <div
                                            className='w-48 btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                            onClick={_ => window.open(data.main.regionOne.right.GoogleScholarLink)}
                                            style={{
                                                color: "#4aa1d4",
                                                fontFamily: 'gentona',
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>

                                            <img src={googlescholar} alt="Google Scholar Icon"
                                                 className=" left-0 object-contain"/>

                                            <span className='ml-2 transition-all text-yellow-400'>→</span>
                                        </div>
                                        <div
                                            className='w-48 btn bg-white p-4 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all ml-4'
                                            onClick={_ => window.open(data.main.regionOne.right.moreBtnLink)}
                                            style={{
                                                color: "#4aa1d4",
                                                fontFamily: 'gentona',
                                                fontWeight: 600,
                                                fontSize: '18px'
                                            }}>
                                            More About Us <span className='ml-2 transition-all text-yellow-400'>→</span>
                                        </div>
                                    </div>
                                </div>




                            </div>

                        </div>
                    </div>

                </div>

                <div className="relative bg-opacity-15 pt-40" style={{background: "#f3f3f3"}}>
                    <div className="absolute left-1/2 -translate-x-1/2 transform bg-yellow-400 z-30 opacity-60"
                         style={{width: "1px", height: "8rem", bottom: "44rem"}}></div>

                    <div className="w-11/12 relative z-20 text-center mx-auto text-black">
                        <p onClick={_ => window.open(data.main.regionTwo.education.link)}
                           className="m-0 text-6xl font-bold text-center"
                           style={{fontFamily: 'quadon', fontWeight: 400}}>Resources</p>

                        <div className='mt-12 flex gap-x-10'>
                            <div className='w-6/12 bg-white'>
                                <div className='relative'>
                                    <div className='relative'>
                                        <img className='w-full' src={icon1Bg} />
                                        <div className='absolute top-0 w-full h-full bg-black bg-opacity-40'></div>
                                    </div>
                                    <div
                                        className='flex items-center absolute left-52 top-28 transform -translate-x-1/2'>
                                        <div className='w-24 h-24 flex p-4 rounded-full overflow-hidden'
                                            style={{ background: "#eac642" }}>
                                            <img className='w-full' src={icon1} />
                                            <div className="absolute left-1/2 transform bg-yellow-400 z-30" style={{
                                                width: "1px",
                                                height: "8rem",
                                                left: "3rem",
                                                bottom: "-10rem"
                                            }}></div>
                                        </div>
                                        <p className='ml-4 text-3xl border-b-4 hover:border-transparent text-white border-solid border-yellow-400 font-bold cursor-pointer'>Resources</p>
                                    </div>
                                    <div className='text-left p-8'>
                                        <p>
                                            {data.main.regionTwo.resources.introducePrimary}
                                        </p>
                                        <p onClick={_ => window.open(data.main.regionTwo.resources.introduceSecondaryLink)}
                                            className='mt-4 flex items-center'>
                                            <span className='text-lg' style={{ color: "#4aa1d4" }}>
                                                {
                                                    data.main.regionTwo.resources.introduceSecondary
                                                }
                                            </span>
                                            <span className="animated_circle ml-2" aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    width="24px" height="24px" viewBox="0 0 24 24" xmlSpace="preserve">
                                                    <g className="animated_icon_arrow" fill="none" stroke="#2175FF"
                                                        strokeWidth="1.5">
                                                        <path transform="translate(6, 12)"
                                                            d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z"
                                                            fill="#002D72"></path>
                                                    </g>
                                                    <circle className="animated_icon_circle" transform="rotate(-90)"
                                                        cx="11" cy="11" r="11" fill="transparent" stroke="#2175FF"
                                                        strokeWidth="1"></circle>
                                                </svg>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-6/12 bg-white'>
                                <div className='relative'>
                                    <div className='relative'>
                                        <img className='w-full' src={icon2Bg} />
                                        <div className='absolute top-0 w-full h-full bg-black bg-opacity-40'></div>
                                    </div>
                                    <div className='flex items-center absolute left-52 top-28 transform -translate-x-1/2'>
                                        <div className='w-24 h-24 flex p-4 rounded-full overflow-hidden'
                                            style={{ background: "#eac642" }}>
                                            <img className='w-full' src={icon2} />
                                            <div className="absolute left-1/2 transform bg-yellow-400 z-30" style={{
                                                width: "1px",
                                                height: "8rem",
                                                left: "3rem",
                                                bottom: "-10rem"
                                            }}></div>
                                        </div>
                                        <p onClick={_ => window.open(data.main.regionTwo.education.link)}
                                            className='ml-4 text-3xl border-b-4 hover:border-transparent text-white border-solid border-yellow-400 font-bold cursor-pointer'>Education</p>
                                    </div>
                                    <div className='text-left p-8'>
                                        <p>
                                            {
                                                data.main.regionTwo.education.introducePrimary
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='px-20 py-20 relative overflow-hidden' style={{ background: "#4aa1d4" }}>
                    <img id="bg3" className="absolute w-full h-full left-40 top-0 z-10 opacity-5 object-cover"
                        src={bg2} />
                    <div className='flex items-center relative z-20'>
                        <div className='w-6/12 px-10'>
                            <p className='font-bold text-3xl'>{data.main.regionThree.titlePrimary}</p>
                            <p className='mt-4 text-md'>{data.main.regionThree.titleSecondary}</p>
                            <div
                                onClick={_ => window.open(data.main.regionThree.joinNowLink)}
                                className='w-44 mt-4 btn bg-white p-3 flex justify-center items-center hover:bg-yellow-400 cursor-pointer transition-all'
                                style={{ color: "#4aa1d4" }}>
                                {data.main.regionThree.buttonText}

                                <span className='ml-2 transition-all text-yellow-400'>→</span>
                            </div>
                        </div>
                        <div className='w-6/12'>
                            <img className='w-full shadow-primary' src={bIMG_7003_TMedit} />
                        </div>
                    </div>
                </div>


                <div className='px-20 py-10 relative overflow-hidden' style={{ background: "white" }}>
                    <div className='text-center'>
                        <p className='text-5xl font-bold' style={{ color: "#2e271f" }}>{data.main.regionFour.titlePrimary}</p>
                        <p className='mt-4 text-xl text-black'>{data.main.regionFour.titleSecondary}</p>
                        <div
                            onClick={_ => window.open(data.main.regionFour.joinUsNowLink)}
                            className='w-44 mx-auto mt-8 btn2 p-3 flex justify-center items-center cursor-pointer transition-all'
                            style={{ backgroundColor: "#4aa1d4" }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1e3a8a"} // blue-900
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4aa1d4"} // #4aa1d4
                            >

                            {data.main.regionFour.buttonText}

                            <span className='ml-2 transition-all text-white'>→</span>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}

export default Index;
