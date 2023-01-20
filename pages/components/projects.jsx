import Image from "next/image"

export default function Projects() {

    const handleClick = event => { 
        event.currentTarget.classList.toggle('active');
    }

    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="projects">
            <div className="flex flex-col flex-wrap items-center h-full relative overflow-hidden">



                {/* SECTION FOR PROJECT 2 */}
                <button onClick={handleClick} className="w-full h-1/2 order-1 p-1   project">
                    <div className="md:flex-row md:flex-wrap md:w-full w-full h-full p-2 flex flex-col justify-between rounded-xl text-customBlack bg-customYellow hover:bg-customPastelYellow transition ease-in-out delay-100 hover:scale-[101%] hover:bg-customYellowLight origin-center duration-500">

                        {/* TITLE AND SHORT DESCRIPTION OF PROJECT */}
                        <div className="w-full md:w-full flex flex-col h-full justify-between">
                            <div className="w-full h-fit">
                                <h3 className="text-center font-bold text-lg ">PicoWind</h3>
                                <div className="font-semibold text-center">Single page air turbine brand website built with Next.js</div>
                            </div>


                            {/* thumbnail of websites */}
                            <div className="flex justify-center">
                                <Image src="/../public/images/placeholder.png" className="w-full h-auto md:h-[180px] md:w-[180px] lg:h-5/6 lg:w-auto max-w-[40vh]" width="200" height="200" alt="github profile qr code" />
                            </div>

                            {/* PROJECTS LINKS AND SEE MORE */}
                            <div className="font-bold flex md:hidden w-full justify-center">
                                <p className="text-right hover:underline">CLICK TO SEE MORE</p>
                            </div>
                        </div>
                    </div>
                </button>

                {/* SECTION FOR PROJECT 2 */}
                <div className="w-full h-1/2 order-1 p-1   project">
                    <div className="md:flex-row md:flex-wrap md:w-full w-full h-full p-2 flex flex-col justify-between rounded-xl text-customBlack bg-customGreen hover:bg-customPastelGreen transition ease-in-out delay-100 hover:scale-[101%] hover:bg-customYellowLight origin-center duration-500">

                        {/* TITLE AND SHORT DESCRIPTION OF PROJECT */}
                        <div className="w-full md:w-full flex flex-col h-full justify-between">
                            <div className="w-full h-fit">
                                <h3 className="text-center font-bold text-lg ">PicoWind</h3>
                                <div className="font-semibold text-center">Single page air turbine brand website built with Next.js</div>
                            </div>

                            {/* thumbnail of websites */}
                            <div className="flex justify-center">
                                <Image src="/../public/images/placeholder.png" className="w-full h-auto md:h-[180px] md:w-[180px] lg:h-5/6 lg:w-auto max-w-[40vh]" width="200" height="200" alt="github profile qr code" />
                            </div>

                            {/* PROJECTS LINKS AND SEE MORE */}
                            <a href="#" className="font-bold flex w-full justify-center">
                                <p className="text-right hover:underline">SEE MORE</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
