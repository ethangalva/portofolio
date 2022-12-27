import Header from "./header"
import Image from "next/image"

export default function Landing() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="home">
            <Header />
            {/* actual landing contents */}
            <div className="flex flex-col items-center h-full">
                <div className="h-1/5 flex flex-row items-center ">
                    <h1 className="font-bold text-3xl text-center">Hello there, I am a web developer</h1>
                </div>
                <div className="h-4/5 flex w-full flex-col gap-2">
                    {/* SHORT INFORMATION ABOUT ME */}
                    <div className="h-2/6 bg-white text-customBlack rounded-xl p-4 text-sm text-center overflow-hidden font-bold flex items-center">
                        I CREATE BEAUTIFUL WEBSITES THAT ARE FAST LOADING FOR THE MOST PLEASANT EXPERIENCE OF THE USER.
                    </div>
                    {/* QR CODE TO MY GITHUB */}
                    <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="h-2/6 bg-white rounded-xl text-customBlack flex p-4 flex-row items-center">
                        <Image src="/../public/images/qr-code.png" className="w-[100px] h-[100px]" width="100" height="100" alt="" />
                        <h2 className="font-bold text-xl text-center">GITHUB PROFILE</h2>
                    </a>
                    {/* LEARN ABOUT ME CALL TO ACTION */}
                    <a href="https://realempire.vercel.app/" target="_blank" rel="noreferrer" className="h-1/6 bg-customYellow rounded-xl flex items-center flex-row justify-between px-8 py-2                   transition ease-in-out delay-250 hover:rotate-2 hover:cursor-pointer origin-center-left duration-500">
                        {/* dot on the left side */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="customBlack" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                        </svg>
                        {/* <div className="h-4 w-4 rounded-full bg-customBlack" /> */}
                        <div className="font-bold text-customBlack">REAL ESTATE WEBSITE </div>
                    </a>
                    {/* CONTACT ME CALL TO ACTION */}
                    <a href="#projects" className="h-1/6 bg-customGreen rounded-xl flex items-center flex-row justify-between px-8 py-2                   transition ease-in-out delay-250 hover:rotate-2 hover:cursor-pointer origin-center-right duration-500">
                        {/* dot on the left side */}
                        <div className="font-bold">SEE MORE PROJECTS</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
                        </svg>
                    </a>
                    {/* visible only on pc */}
                    <div className="hidden">hi</div>
                    <div className="hidden">hi</div>
                </div>
            </div>
        </div>
    )
}
