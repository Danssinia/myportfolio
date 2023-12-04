import { Link } from "react-router-dom"
import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai"
import { useState } from "react"
import logo from "../images/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return ( 
       <div className="h-20 items-center">
        <nav>
        <div className="flex justify-between p-6">
        <p className="text-3xl pl-10 max-sm:pl-1"><img src={logo} className="w-30 h-20"/></p>
            <ul className={`lg:flex ${isOpen ? 'flex fixed right-0 top-16 w-[250px] z-10 h-screen flex-col pt-10 text-[25px] gap-6 bg-[#2C3E50]  text-white' : 'hidden'} space-x-12 pt-2 text-lg font-[400] text-[gray]`}>
                <Link to='/myportfolio' className="hover:text-white transition-all duration-300 max-sm:pl-12">Home</Link>
                <Link to='/myportfolio/about' className="hover:text-white transition-all duration-300">About</Link>
                <Link to='/myportfolio/services' className="hover:text-white transition-all duration-300">Services</Link>
                <Link to='/myportfolio/works' className="hover:text-white transition-all duration-300">Works</Link>
                <Link to='/myportfolio/contact' className="hover:text-white transition-all duration-300">Contact</Link>
            </ul>
            <div className="pr-10">
                <Link to='/myportfolio/contact'><button className="max-sm:hidden bg-[#1A1A1A] p-3 w-32 rounded-xl hover:bg-[#FFFFFF] hover:text-black">Let's talk</button>
                </Link>
            </div>
            <div className="sm:hidden text-3xl">
                <button onClick={handleClick}>
                    {isOpen ? <AiFillCloseCircle/> : <FiMenu/>}
                </button>
            </div>
        </div>
        </nav>
       </div>
     );
}
 
export default Navbar;