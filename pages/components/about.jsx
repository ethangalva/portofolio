export default function About() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="projects">
            <div className="flex flex-col md:flex-row md:flex-wrap items-center h-full gap-2 md:gap-0 ">
                
                {/* ABOUT ME MESSAGE TO THE READER */}
                <div className="order-1 h-3/6 w-full md:w-4/5 md:p-1                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500 ">
                    <div className=" h-full flex-col bg-white md:bg-customPastelYellow lg:bg-customPastelOrange xl:bg-customPastelGreen w-full text-customBlack rounded-xl p-4 text-center overflow-hidden font-bold flex items-center justify-evenly md:text-xl">
                        <p className="text-center font-semibold">I&apos;m a self thought front-end web developer. I create visually appealing, user-friendly websites using HTML, CSS, JavaScript, and frameworks. My goal is to deliver high-quality responsive websites. Let&apos;s work together.</p>
                        {/* MAIN SKILLS SECTION */}
                        <div className="wrapper">
                            <div className="marquee">
                                <div className="bg-customGreen px-1 text-white font-bold text-center">REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL -</div>
                                <div className="bg-customGreen px-1 text-white font-bold text-center">REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL - REACT - NODE.JS - NEXT.JS - TAILWIND - VERCEL -</div>
                            </div>
                        </div>
                        <p className="font-bold">MAIN SKILLS</p>
                    </div>
                </div>



                {/* PERSONAL HOBIES */}
                <div className="order-3 md:order-11 w-full h-3/6 md:p-1 md:w-3/6 lg:w-4/6 gap-2 flex flex-col">
                    <div className="w-full h-full bg-white rounded-xl flex items-center py-2      hover:scale-[101%] duration-500 transition ease-in-out hover:cursor-default">
                        <h3 className="w-full font-bold text-customBlack text-center px-2 md:text-xl hover:scale-[101%] duration-500 transition ease-in-out hover:cursor-default">Some of my hobies include reading and watching articles of javascript and css libraries. Experimenting with new frameworks and technologies is something that I really enjoy. </h3>
                    </div>
                    <a className="hover:underline hover:cursor-pointer font-bold text-2xl w-full h-2/6 bg-customGreen rounded-xl hidden md:flex px-2 text-center justify-center items-center gap-2">
                        SEND ME AN EMAIL
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                        </svg>
                    </a>
                </div>
                {/* LINKS DOWNLOAD RESUME / LINKED-IN PROFILE */}
                <div className="order-4 md:order-2 w-full md:w-1/5 h-1/6 md:h-3/6 md:p-1">
                    <div className="w-full h-full flex flex-row md:flex-col items-center gap-2">
                        {/* LINKS DOWNLOAD RESUME / LINKED-IN PROFIL */}
                        <div className="order-1 w-1/2 h-full md:p-0 md:h-1/3 md:w-full                 transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            <a href="https://github.com/ethangalva" className="h-full bg-customYellow hover:bg-customGray rounded-xl flex items-center flex-col text-center justify-center px-2 py-2 hover:underline hover:cursor-pointer                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            {/* dot on the left side */}
                                <div className="font-bold text-customBlack md:text-lg lg:text-2xl ">GITHUB PROFILE</div>
                            </a>
                        </div>
                        <div className="order-2 w-1/2 h-full md:p-0 md:h-1/3 md:w-full                  transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            <a href="https://www.linkedin.com/in/ethan-galvan-5774a0232/" className="h-full bg-customOrange hover:bg-customGray rounded-xl flex items-center flex-col text-center justify-center px-2 py-2 hover:underline hover:cursor-pointer                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            {/* dot on the left side */}
                                <div className="font-bold text-customBlack md:text-lg lg:text-2xl">LINKED-IN PROFILE</div>
                            </a>
                        </div>
                        <div className="order-3 hidden md:p-0 md:h-1/3 md:flex md:w-full                  transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            <a href="../../public/Ethan-Galvan.pdf" download className="h-full bg-customRed hover:bg-customGray rounded-xl flex items-center flex-col text-center justify-center px-2 py-2 hover:underline hover:cursor-pointer                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                            {/* dot on the left side */}
                                <div className="font-bold text-customBlack md:text-lg lg:text-2xl">DOWNLOAD RESUME</div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DOWNLOAD RESUME IN MD VIEW ONLY */}
                <div className="order-2  md:hidden w-full h-1/6 md:w-full md:p-0                  transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                    <a href="../../public/Ethan-Galvan.pdf" download className="h-full bg-customOrange hover:bg-customGray rounded-xl flex items-center flex-row justify-center gap-4 px-2 py-2                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        {/* dot on the left side */}
                        <div className="font-bold text-customBlack text-lg lg:text-2xl">DOWNLOAD RESUME</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="customBlack" className="bi bi-arrow-down-square-fill md:w-[30px] md:h-[30px]" viewBox="0 0 16 16">
                            <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
                        </svg>
                    </a>
                </div>

                {/* IMAGE OF ME ONLY IN MD AND OVER */}
                <div className="order-8 w-3/6 h-3/6 lg:w-2/6 md:p-1 hidden md:flex      hover:scale-[101%] duration-500 transition ease-in-out hover:cursor-default ">
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-xl">
                        <img src="https://i.imgur.com/DqXUHBT.jpg" width="1000" height="1000" alt="github profile qr cod" className="w-5/6 md:w-auto h-5/6" />
                    </div>
                </div>
            </div>
        </div>
    )
}
