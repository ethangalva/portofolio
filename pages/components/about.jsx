import Image from "next/image"

export default function About() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="projects">
            <div className="flex flex-col items-center h-full gap-2 ">
                {/* MAIN TITLE OF THE SECTION */}
                <h2 className="w-full bg-customBlack text-white font-bold text-2xl text-center">ABOUT ME</h2>
                {/* ABOUT ME MESSAGE TO THE READER */}
                <p className="text-center font-semibold">Hello there! my name is Ethan Galvan and I am a web developer mainly focused in front end. I believe in always doing your best and taking pride in your work, whatever it is.</p>
                {/* MAIN SKILLS SECTION */}
                <div className="w-full h-2/6 bg-customGreen rounded-xl py-2 hover:text-customBlack hover:bg-customYellowLight hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">
                    <h3 className="w-full font-bold text-center text-2xl hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">MAIN SKILLS</h3>
                    {/* LIST OF LENGUAGES / FRAMEWORKS I HAVE WORKED WITH */}
                    <div className="flex w-full h-5/6 p-2">
                        {/* col 1 of skills */}
                        <div className="flex flex-col w-1/2 font-medium h-full justify-between items-center">
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">HTML 5</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">CSS 3</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">REACT</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">NODE.JS</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">JAVASCRIPT</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">HEROKU</div>
                        </div>
                        {/* col 2 of skills */}
                        <div className="flex flex-col w-1/2 font-medium h-full justify-between items-center">
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">EXPRESS</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">NEXT.JS</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">TAILWIND</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">MONGO DB</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">BOOTSTRAP</div>
                            <div className="hover:font-bold hover:scale-[105%] duration-500 transition ease-in-out hover:cursor-default">REST API</div>

                        </div>
                    </div>
                </div>
                {/* CALL TO ACTION SEND AN EMAIL */}
                <a href="mailto:ethangalva@gmail.com" className="w-full flex justify-center gap-2 items-center bg-customOrange rounded-xl h-[2rem] hover:scale-[105%] duration-500 transition ease-in-out">
                    <h3 className="font-bold text-center hover:underline">ethangalva@gmail.com</h3>
                </a>
                {/* LINKS DOWNLOAD RESUME / LINKED-IN PROFILE */}
                <div className="h-1/6 flex flex-row items-center w-full gap-2">
                    <a className="font-bold text-lg w-1/2 flex items-center rounded-xl bg-customGreen text-white h-full p-2 text-center transition ease-in-out delay-100 hover:scale-[105%] hover:bg-customYellowLight hover:text-customBlack origin-center duration-500 hover:cursor-pointer">DOWNLOAD RESUME</a>
                    <a className="font-bold text-lg w-1/2 flex items-center rounded-xl bg-customGreen text-white h-full p-2 text-center transition ease-in-out delay-100 hover:scale-[105%] hover:bg-customYellowLight hover:text-customBlack origin-center duration-500 hover:cursor-pointer">LINKED-IN PROFILE</a>
                </div>
                {/* QR & LINK TO GITHUB PROFILE */}
                <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="h-1/6 bg-white rounded-xl text-customBlack flex p-4 flex-row items-center w-full hover:scale-[101%]">
                    {/* qr code */}
                    <Image src="/../public/images/qr-code.png" className="w-[100px] h-[100px]" width="100" height="100" alt="" />
                    {/* title */}
                    <h2 className="font-bold text-xl text-center">GITHUB PROFILE</h2>
                </a>
                
            </div>
        </div>
    )
}