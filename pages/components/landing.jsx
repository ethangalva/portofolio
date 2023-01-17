import Header from "./header"
import Image from "next/image"

export default function Landing() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="home">
            <Header />
            {/* actual landing contents */}
            <div className="flex flex-col items-center h-full">
                <div className="h-1/5 flex flex-row items-center md:hidden">
                    <h1 className="font-bold text-3xl text-center">Hello there, I am a web developer</h1>
                </div>
                {/* THIS IS WERE THE ACTUAL BLOCKS OF THE LANDING PAGE ARE CONTAINED WITHIN */}
                <div className="h-4/5 flex w-full flex-col gap-2 md:h-full md:flex-wrap md:flex-row md:gap-0">
                    
                    {/* SHORT INFORMATION ABOUT ME */}
                    <div className="order-1 h-2/6 w-full md:w-3/5 md:p-1                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500 ">
                        <div className=" h-full flex-col bg-white lg:bg-red-300 xl:bg-blue-400 w-full text-customBlack rounded-xl p-4 text-sm text-center overflow-hidden font-bold flex items-center justify-evenly md:text-2xl">
                            I CREATE BEAUTIFUL WEBSITES THAT ARE FAST LOADING FOR THE MOST PLEASANT EXPERIENCE OF THE USER.
                            <div className="hidden md:flex w-full flex-col justify-end items-center ">
                                <span className="w-full h-[1.5px] bg-customBlack" /> 
                                Front End Web Development<br />
                                <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="font-semibold text-sm bg-customYellow w-fit px-1 rounded-3xl mt-2 md:text-md hover:underline">@ethangalva</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* QR CODE TO MY GITHUB */}
                    <div className="order-2 h-2/6 w-full md:w-2/6 md:p-1 md:order-3                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="h-full bg-white rounded-xl text-customBlack flex p-4 flex-row items-center md:w-full md:flex-col justify-center">
                            <Image src="/../public/images/qr-code.png" className="w-[100px] h-[100px] md:h-[180px] md:w-[180px]" width="200" height="200" alt="github profile qr code" />
                            <h2 className="font-bold text-xl text-center">GITHUB PROFILE</h2>
                        </a>
                    </div>
                    
                    {/* SMALL RECTANGLES WITH WEBSITE LINK AND LINK TO SEE MORE PROJECTS */}
                    <div className="flex flex-col h-2/6 gap-2 order-4 w-full md:order-2 md:w-2/5 md:p-1">
                        {/* REAL ESTATE WEBSITE */}
                        <div className="order-3 md:order-2 w-full h-1/2 md:w-full md:p-0                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            <a href="https://realempire.vercel.app/" target="_blank" rel="noreferrer" className="h-full bg-customYellow rounded-xl flex items-center flex-row justify-center gap-4  px-8 py-2">
                                {/* dot on the left side */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="customBlack" className="bi bi-box-arrow-up-right md:w-[30px] md:h-[30px]" viewBox="0 0 16 16">
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                                </svg>
                                {/* <div className="h-4 w-4 rounded-full bg-customBlack" /> */}
                                <div className="font-bold text-customBlack md:text-xl">REAL ESTATE WEBSITE</div>
                            </a>
                        </div>

                        {/* CONTACT ME CALL TO ACTION */}
                        <div className="order-4 md:order-4 w-full h-1/2 md:w-full md:p-0                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            <a href="#projects" className="h-full bg-customGreen rounded-xl flex items-center flex-row justify-center gap-4 px-8 py-2">
                                {/* dot on the left side */}
                                <div className="font-bold md:text-xl">SEE MORE PROJECTS</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-down-square-fill md:w-[30px] md:h-[30px]" viewBox="0 0 16 16">
                                    <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* VISIBLE ONLY ON MD */}

                    

                    {/* PIXEL ART FOREST */}
                    <div className="order-4 hidden md:flex h-2/6 w-4/6 p-1                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        <div className="bg-customOrange h-full w-full rounded-xl flex-row flex overflow-hidden">
                            <Image src="/../public/images/treesbackground.gif" width="1000" height="1000" classname="w-full h-full" alt="background" />
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div className="order-6 hidden md:flex h-2/6 w-2/6 p-1 md:flex-col">
                        <div className="bg-customBlack h-5/6 w-full rounded-xl p-2 flex flex-col gap-3">
                            <a href="#projects" className="hover:underline md:text-xl">PROJECTS</a>
                            <a href="#contact" className="hover:underline md:text-xl">CONTACT</a>
                            <a href="#landing" className="hover:underline md:text-xl">LANDING</a>
                            <a href="#about" className="hover:underline md:text-xl">ABOUT</a>
                        </div>
                        <a href="mailto:ethangalva@gmail.com" className="flex w-full p-2 rounded-xl h-1/6 bg-customGreen text-customWhite font-bold justify-center                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            <p className="text-center w-full hover:underline flex flex-row justify-center items-center h-full">ethangalva@gmail.com</p>
                        </a>
                    </div>

                    {/* CHARACTER AND LITTLE PERSONAL MESSAGE */}
                    <div className="order-5 hidden md:flex h-2/6 w-4/6 p-1                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        <div className="h-full w-full rounded-xl p-2 flex bg-white gap-2">
                            {/* IMAGE OF A CHARACTER THAT LOOKS LIKE ME */}
                            <Image src="/../public/images/CuteAvataravatar.jpg" width="1000" height="1000" alt="github profile qr cod" className="w-1/2 md:w-auto h-full" />
                            {/* INFORMATION ABOUT ME */}
                            <div className="w-1/2 text-customBlack font-semibold flex flex-col justify-center md:w-2/3">
                                {/* <h3 className="font-bold">ABOUT ME:</h3> */}
                                <div className="w-full text-left text-xl">
                                    <span className="text-customOrange font-handWritten">&#60;h3&#62;</span> Hello there! <span className="text-customOrange font-handWritten">&#60;&#47;h3&#62;</span>
                                </div>
                                <div className="w-full text-left text-lg">
                                    <span className="text-customOrange font-handWritten">&#60;p&#62;</span> thank you for taking your time to check out my personal portofolio, promise you wont be let down! <span className="text-customOrange font-handWritten">&#60;&#47;p&#62;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
