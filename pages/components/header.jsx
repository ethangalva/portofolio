export default function Header() {
    return (
        <div className=" flex justify-between md:hidden">
            {/* BRAND */}
            <div className="w-1/2 flex md:w-1/4 ">
                <a className="flex items-center">
                    <div className="text-xl font-bold md:text-2xl">ethangalva</div>
                </a>
            </div>
            {/* NAV MENU */}
            <div className="hidden w-2/4 justify-start items-center gap-4 text-md font-semibold md:flex">
                <a href="#projects" className="">PROJECTS</a>
                <a href="#about" className="">ABOUT</a>
            </div>
            {/* SEND INQUIRY CTA */}
            <div className="w-1/2 flex items-center justify-end text-md font-bold flex-nowrap md:text-2x md:w-1/4">
                <a className="items-center" href="mailto:ethangalva@gmail.com">
                    <div className="px-3 rounded-full text-white bg-customBlack hover:underline">CONTACT ME</div>
                </a>
            </div>
        </div>
    )
}