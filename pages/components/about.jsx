import Image from "next/image"

export default function About() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="projects">
            <div className="flex flex-col items-center h-full gap-2 ">
                
                
                {/* ABOUT ME MESSAGE TO THE READER */}
                <div className="order-1 h-3/6 w-full md:w-3/5 md:p-1                    transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500 ">
                    <div className=" h-full flex-col bg-white md:bg-customPastelYellow lg:bg-customPastelOrange xl:bg-customPastelGreen w-full text-customBlack rounded-xl p-4 text-center overflow-hidden font-bold flex items-center justify-evenly md:text-xl">
                        <p className="text-center font-semibold">I'm a self thought front-end web developer. I create visually appealing, user-friendly websites using HTML, CSS, JavaScript, and frameworks. My goal is to deliver high-quality responsive websites. Let's work together.</p>
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
                <div className="order-3 w-full h-2/6 bg-white rounded-xl flex items-center py-2 hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">
                    <h3 className="w-full font-bold text-customBlack text-center hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default px-2">Some of my hobies include reading and watching articles of javascript and css libraries. Experimenting with new frameworks and technologies is something that I really enjoy. </h3>
                </div>
                {/* LINKS DOWNLOAD RESUME / LINKED-IN PROFILE */}
                <div className="order-4 h-1/6 flex flex-row items-center w-full gap-2">
                    {/* LINKS DOWNLOAD RESUME / LINKED-IN PROFIL */}
                    <div className="order-1 w-1/2 h-full md:w-full md:p-0                  transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        <a href="" className="h-full bg-customYellow hover:bg-customGray rounded-xl flex items-center flex-col text-center justify-center px-2 py-2                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        {/* dot on the left side */}
                            <div className="font-bold text-customBlack md:text-lg lg:text-2xl">DOWNLOAD RESUME</div>
                        </a>
                    </div>
                    <div className="order-2 w-1/2 h-full md:w-full md:p-0                  transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        <a href="" className="h-full bg-customYellow hover:bg-customGray rounded-xl flex items-center flex-col text-center justify-center px-2 py-2                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        {/* dot on the left side */}
                            <div className="font-bold text-customBlack md:text-lg lg:text-2xl">LINKED-IN PROFILE</div>
                        </a>
                    </div>
                </div>

                <div className="order-2 w-full h-1/6 md:w-full md:p-0                  transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        <a href="" className="h-full bg-customOrange hover:bg-customGray rounded-xl flex items-center flex-row justify-center gap-4 px-2 py-2                     transition ease-in-out delay-250 hover:scale-[101%] origin-center duration-500">
                        {/* dot on the left side */}
                        <div className="font-bold text-customBlack text-lg lg:text-2xl">DOWNLOAD RESUME</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="customBlack" className="bi bi-arrow-down-square-fill md:w-[30px] md:h-[30px]" viewBox="0 0 16 16">
                            <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
