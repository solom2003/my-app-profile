import { px } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-800 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-gray-800 h-20"> {/*logo container*/}
            <a className="text-4xl font-semibold  text-white" href="/"> Abdo<span className='text-4xl text-[#f94449]/100'>;</span> </a>            </div>
            <div className="flex flex-col ml-4">
                <Link className="text-xl font-medium my-4 text-white" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <Link className="text-xl font-normal my-4 text-white" href="/component/profile/cvpage" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Profile
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const pasname = usePathname();
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex filter bg-gray-800 px-4 py-4 h-20 items-center justify-evenly">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-4xl font-semibold ml-[80px] text-white" href="/"> Abdo<span className='text-4xl text-[#f94449]/100'>;</span> </a>
            </div>
            <div className="w-9/12 flex justify-end items-center ">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between  items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex mr-[80px] text-xl text-white">
                  <div className='mr-[50px] hover:text-[#f94449]/100 hover:underline'>
                    <Link  href="/">
                        Home
                    </Link>
                  </div>
                  <div className='mr-[50px] hover:text-[#f94449]/100 hover:underline'>
                    <Link href="/component/profile/cvpage" >
                     Profile
                    </Link>

                  </div>
                    
                </div>
            </div>
        </nav>
    )
}