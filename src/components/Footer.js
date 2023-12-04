import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
const Footer = () => {
    return ( 
        <div className="mt-[120px]">
            <div className="text-[gray] max-w-sm m-auto">
                <p className="text-2xl font-semibold flex justify-center mb-6"><img src={logo} width={60} /></p>
                <ul className="flex max-sm:space-x-5 max-sm:ml-5  space-x-10 text-sm mb-6">
                    <Link to="/" className='hover:text-white'>HOME</Link>
                    <Link to='/about' className='hover:text-white'>ABOUT</Link>
                    <Link to='/services' className='hover:text-white'>SERVICES</Link>
                    <Link to='/works' className='hover:text-white'>WORKS</Link>
                    <Link to='/contact' className='hover:text-white'>CONTACT</Link>
                </ul>
             <p className="mb-16 flex justify-center">&copy; All rights reserved by&nbsp;<span className="text-[#5B78F6] font-bold">Danssinia</span></p>
            </div>
        </div>
     );
}
 
export default Footer;