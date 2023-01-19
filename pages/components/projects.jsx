import Image from "next/image"

export default function Projects() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="projects">
            <div className="flex flex-row flex-wrap items-center h-full">

                <div className="w-full h-1/2 order-1 p-1">
                    <div className="w-full h-full p-2 flex flex-col justify-between bg-customYellow rounded-xl text-customBlack hover:bg-customPastelYellow                 transition ease-in-out delay-100 hover:scale-[101%] hover:bg-customYellowLight origin-center duration-500">
                        {/* TITLE AND SHORT DESCRIPTION OF PROJECT */}
                        <div className="h-1/2">
                            <h3 className="text-center font-bold text-lg ">RealEmpire</h3>
                            <div className="font-semibold text-center">Brand website for a real estate company built with Next.js </div>
                        </div>
                        {/* PROJECTS LINKS AND SEE MORE */}
                        <div className="flex flex-col gap-2">
                            {/* see more */}
                            <a href="#" className="font-bold flex w-full items-center justify-center gap-2">
                                <p className="text-right hover:underline">SEE MORE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                                </svg>
                            </a>
                            {/* open website */}
                            <a href="#" className="font-bold flex w-full items-center justify-center gap-2">
                                <p className="text-right hover:underline">OPEN WEBSITE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                                </svg>
                            </a>
                            {/* open github */}
                            <a href="#" className="font-bold flex items-center justify-center gap-2">
                                <p className="text-right hover:underline">GITHUB REPOSITORY</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>



                {/* SECTION FOR PROJECT 3 */}
                <div className="w-full h-1/2 order-2 p-1">
                    <div className="md:flex-row md:flex-wrap md:w-full w-full h-full p-2 flex flex-col justify-between rounded-xl text-customBlack bg-customGreen hover:bg-customPastelGreen transition ease-in-out delay-100 hover:scale-[101%] hover:bg-customYellowLight origin-center duration-500">

                        {/* TITLE AND SHORT DESCRIPTION OF PROJECT */}
                        <div className="w-full md:w-2/3">
                            <div className="h-1/2 md:w-full">
                                <h3 className="text-center font-bold text-lg ">PicoWind</h3>
                                <div className="font-semibold text-center">Single page air turbine brand website built with Next.js</div>
                            </div>
                            {/* PROJECTS LINKS AND SEE MORE */}
                            <div className="flex flex-col md:flex-row w-full md:justify-center  gap-2">
                                {/* see more */}
                                <a href="#" className="font-bold flex w-full items-center justify-center gap-2 md:w-fit ">
                                    <p className="text-right hover:underline text-sm">SEE MORE</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                                    </svg>
                                </a>
                                {/* open website */}
                                <a href="#" className="font-bold flex w-full items-center justify-center gap-2 md:w-fit">
                                    <p className="text-right hover:underline">OPEN WEBSITE</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                                    </svg>
                                </a>
                                {/* open github */}
                                <a href="#" className="font-bold flex w-full items-center justify-center gap-2 md:w-fit">
                                    <p className="text-right hover:underline">GITHUB REPOSITORY</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* ONLY VISIBLE ON MD AND AFTER ON */}
                        <div className="hidden md:flex w-1/3 h-full bg-customPastelYellow">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
