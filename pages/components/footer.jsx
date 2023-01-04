export default function Footer() {
    return (
        <div className="h-screen flex flex-col justify-between px-8 gap-4 py-4 snap-center" id="projects">
            <div className="flex flex-col items-left h-full gap-2 justify-between">
                {/* CONTAINER FOR TOP OF PAGE */}
                <div className="w-full flex flex-row">
                    <div className="text-white w-1/2 font-bold">@ethangalva</div>
                    <div className="w-1/2 items-center flex  justify-end gap-2 text-white font-bold hover:underline">
                        <a href="#home">BACK TO TOP</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>    
                    </div>
                </div>
                {/* CONTAINER FOR LINKS */}
                <div className="flex flex-col items-center">
                    {/* GITHUB FOOTER LINK */}
                    <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="flex flex-wrap text-white hover:cursor-pointer text-4xl font-bold">
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">G</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">I</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">T</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">H</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">U</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">B</div>
                    </a>
                    {/* LINKED IN PROFILE LINK */}
                    <a href="https://www.linkedin.com/in/ethan-galvan-5774a0232/" target="_blank" rel="noreferrer" className="flex flex-wrap text-white hover:cursor-pointer text-4xl font-bold">
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">L</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">I</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">N</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">K</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">E</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">D</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">-</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">I</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">N</div>
                    </a>
                    {/* EMAIL ME LINK */}
                    <a href="emailto:ethangalva@gmail.com" className="flex flex-wrap text-white hover:cursor-pointer text-4xl font-bold">
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">E</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">M</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">A</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">I</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">L</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">-</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">M</div>
                        <div className="hover:text-customYellowLight transition duration-200 ease-in-out hover:underline">E</div>
                    </a>
                </div>
                {/* CONTAINER FOR BOTTOM OF PAGE */}
                <div className="flex flex-row w-full">
                    <div className="text-white w-1/2 font-bold text-center flex items-center gap-2  md:w-1/3">
                        <a href="https://dribbble.com/shots/19884830-INDThecture-landing-page-Architecture-Sunnyday-Sunnyday" target="_blank" rel="noreferrer">INSPIRATION</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                        </svg>
                    </div>
                    <div className="text-white text-center hidden md:block w-1/3">
                        FAST LOADING WEBSITES,<br />
                        RELIABLE AND RESPONSIVE
                    </div>
                    <div className="w-1/2 items-center flex justify-end gap-2 text-white font-bold md:w-1/3 hover:underline">
                        <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer">by @ethangalva</a>
                    </div>
                </div>
            </div>
        </div>
    )
}




