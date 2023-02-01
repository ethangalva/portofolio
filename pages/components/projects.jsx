import React, { useState } from "react";

export default function Projects() {

    const [isProjectOpen1, setProjectOpen3] = useState(false)
    const [isProjectOpen2, setProjectOpen4] = useState(false)

    const handleClick = event => {
        event.target.classList.remove('active');
        event.currentTarget.classList.toggle('active');
    }

    return (
        <div className="h-screen flex flex-col justify-between px-8 py-4 snap-center" id="projects">
            <div className="flex flex-col flex-nowrap h-full relative gap-0 overflow-hidden">



                {/* SECTION FOR PROJECT 1 */} 
                <div className={ isProjectOpen1 ? "w-full h-1/2 p-1   project active" : "w-full h-1/2 p-1   project"}>
                    <div className={ isProjectOpen2 ? "hidden" : "md:flex-row md:flex-wrap md:w-full w-full h-full p-2 flex flex-col justify-between rounded-xl text-customBlack bg-customYellow hover:bg-customGray transition ease-in-out duration-500"}>

                        {/* TITLE AND SHORT DESCRIPTION OF PROJECT */}
                        <div className={ isProjectOpen1 ? "w-full md:w-full gap-2 flex flex-col h-full justify-between items-center" : "w-full md:w-full flex flex-col h-full justify-between"}>
                            <div className="w-full h-fit flex flex-col items-center">
                                <h3 className="text-center font-bold text-lg md:text-xl lg:text-3xl">PicoWind</h3>
                                <div className="font-semibold text-center md:text-lg md:w-1/2 lg:text-xl lg:pt-2">Single page air turbine brand website built with Next.js</div>
                            </div>


                            {/* thumbnail of websites */}
                            <div className="flex justify-center">
                                <img src="https://i.imgur.com/H4D0zEE.png" className="w-full h-auto md:w-auto md:h-full lg:w-auto max-w-[40vh]" width="1000" height="1000" alt="github profile qr code" />
                                <img src="https://i.imgur.com/H4D0zEE.png" className="hidden md:flex w-full h-auto md:w-auto md:h-full lg:w-auto max-w-[40vh]" width="1000" height="1000" alt="github profile qr code" />
                                <img src="https://i.imgur.com/H4D0zEE.png" className="hidden lg:flex w-full h-auto md:w-auto md:h-full lg:w-auto max-w-[40vh]" width="1000" height="1000" alt="github profile qr code" />
                            </div>

                            { isProjectOpen1 ?
                            <div className="wrapper">
                                <div className="marquee">
                                    <div className="bg-customGreen px-1 text-white font-bold text-center">REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL -</div>
                                    <div className="bg-customGreen px-1 text-white font-bold text-center">REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL -</div>
                                </div>
                            </div>
                            :
                            null
                            }


                            { isProjectOpen1 ?
                            <div className="flex justify-center text-center font-bold w-11/12 md:text-lg">
                                This was the first project with which I started experimenting with the UI Framework Tailwind, also my first time experimenting with Next JS and deploying an aplication with Vercel
                            </div>
                            :
                            null
                            }


                            { isProjectOpen1 ?
                            <div className="flex flex-row justify-center gap-4 w-full font-bold">
                                <a href="https://github.com/" className="hover:underline w-fit text-center flex flex-nowrap text-xl md:text-2xl items-center gap-1">
                                    github
                                    <svg className="w-[1.125rem] h-auto" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="256" height="256"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="#000000" class="color000 svgShape"></path></svg>
                                </a>
                                <a href="https://github.com/" className="hover:underline w-fit text-center flex flex-nowrap text-xl md:text-2xl items-center gap-1">
                                    open
                                    <svg className="w-[1.125rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="256" height="256"><path fill="none" d="M0 0h48v48H0z"></path><path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z" fill="#000000" class="color000 svgShape"></path></svg>
                                </a>
                            </div>
                            :
                            null
                            }



                            { isProjectOpen1 ?
                            <button onClick={() => setProjectOpen3(false)} className="font-bold relative bottom-0 flex w-full justify-center md:text-lg">
                                <p className="text-right hover:underline">CLICK TO SEE LESS</p>
                            </button>
                            :
                            <button onClick={() => setProjectOpen3(true)} className="font-bold flex w-full justify-center md:text-lg">
                                <p className="text-right hover:underline">CLICK TO SEE MORE</p>
                            </button>
                            }



                        </div>
                    </div>
                </div>

                {/* SECTION FOR PROJECT 2 */}
                <div className={isProjectOpen2 ? "w-full h-1/2 p-1   project active" : "w-full h-1/2 p-1   project"}>
                    <div className={isProjectOpen1 ? "hidden" : "md:flex-row md:flex-wrap md:w-full w-full h-full p-2 flex flex-col justify-between rounded-xl text-customBlack bg-customOrange hover:bg-customGray transition ease-in-out duration-500"}>
                        {/* TITLE AND SHORT DESCRIPTION OF PROJECT */}
                        <div className={ isProjectOpen2 ? "w-full md:w-full gap-2 flex flex-col h-full justify-between items-center" : "w-full md:w-full flex flex-col h-full justify-between"}>
                            <div className="w-full h-fit flex flex-col items-center">
                                <h3 className="text-center font-bold text-lg md:text-xl lg:text-3xl">PicoWind</h3>
                                <div className="font-semibold text-center md:text-lg md:w-1/2 lg:text-xl lg:pt-2">Single page air turbine brand website built with Next.js</div>
                            </div>


                            {/* thumbnail of websites */}
                            <div className="flex justify-center">
                                <img src="https://i.imgur.com/H4D0zEE.png" className="w-full h-auto md:w-auto md:h-full lg:w-auto max-w-[40vh]" width="1000" height="1000" alt="github profile qr code" />
                                <img src="https://i.imgur.com/H4D0zEE.png" className="hidden md:flex w-full h-auto md:w-auto md:h-full lg:w-auto max-w-[40vh]" width="1000" height="1000" alt="github profile qr code" />
                                <img src="https://i.imgur.com/H4D0zEE.png" className="hidden lg:flex w-full h-auto md:w-auto md:h-full lg:w-auto max-w-[40vh]" width="1000" height="1000" alt="github profile qr code" />
                            </div>

                            { isProjectOpen2 ?
                            <div className="wrapper">
                                <div className="marquee">
                                    <div className="bg-customGreen px-1 text-white font-bold text-center">REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL -</div>
                                    <div className="bg-customGreen px-1 text-white font-bold text-center">REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL -</div>
                                </div>
                            </div>
                            :
                            null
                            }


                            { isProjectOpen2 ?
                            <div className="flex justify-center text-center font-bold w-11/12 md:text-lg">
                                This was the first project with which I started experimenting with the UI Framework Tailwind, also my first time experimenting with Next JS and deploying an aplication with Vercel
                            </div>
                            :
                            null
                            }


                            { isProjectOpen2 ?
                            <div className="flex flex-row justify-center gap-4 w-full font-bold">
                                <a href="https://github.com/" className="hover:underline w-fit text-center flex flex-nowrap text-xl md:text-2xl items-center gap-1">
                                    github
                                    <svg className="w-[1.125rem] h-auto" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="256" height="256"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" fill="#000000" class="color000 svgShape"></path></svg>
                                </a>
                                <a href="https://github.com/" className="hover:underline w-fit text-center flex flex-nowrap text-xl md:text-2xl items-center gap-1">
                                    open
                                    <svg className="w-[1.125rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="256" height="256"><path fill="none" d="M0 0h48v48H0z"></path><path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z" fill="#000000" class="color000 svgShape"></path></svg>
                                </a>
                            </div>
                            :
                            null
                            }



                            { isProjectOpen2 ?
                            <button onClick={() => setProjectOpen4(false)} className="font-bold relative bottom-0 flex w-full justify-center md:text-lg">
                                <p className="text-right hover:underline">CLICK TO SEE LESS</p>
                            </button>
                            :
                            <button onClick={() => setProjectOpen4(true)} className="font-bold flex w-full justify-center md:text-lg">
                                <p className="text-right hover:underline">CLICK TO SEE MORE</p>
                            </button>
                            }



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
