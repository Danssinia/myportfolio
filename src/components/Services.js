import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {RiComputerLine } from 'react-icons/ri'
import {CiMobile1} from 'react-icons/ci'
import {FaTools} from 'react-icons/fa'
import {GoDatabase} from 'react-icons/go'
import {motion} from 'framer-motion'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import icon2 from '../images/icon2.png'
import sign from '../images/sign.png'
import star2 from '../images/star2.png'
const Services = () => {
    const [animationTriggered, setAnimationTriggered] = useState(true);
    return ( 
        <div className="max-w-[90%]  mt-16 m-auto">
            <div className="flex flex-1 max-sm:flex max-sm:flex-col">
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}} className="w-[370px] h-[900px]  rounded-3xl bg-[#1A1A1A] border-[0.25px] border-[#313131]">
                    <div className='mt-20 ml-10 text-4xl max-sm:text-2xl grid grid-rows-4 gap-[150px]'>
                        <p className='flex'><RiComputerLine/> <p className='pl-8 text-2xl'>Website Development</p></p>
                        <p className='flex'><CiMobile1/><p className='pl-8 text-2xl'>Application Development</p></p>
                        <p className='flex'><FaTools/><p className='pl-8 text-2xl'>Maintenance and Support</p></p>
                        <p className='flex'><GoDatabase/><p className='pl-8 text-2xl'>Software Testing</p></p>
                    </div>
                </motion.div>
                <div className="w-[66%] max-sm:left-0  max-sm:w-[100%] h-[805px] max-sm:h-[1530px] rounded-3xl relative  left-6 top-24 bg-[#1A1A1A] border-[0.25px] border-[#313131]">
                    <div className="ml-8 mt-6  flex flex-1 max-xl:ml-3 max-sm:ml-4 max-sm:flex max-sm:flex-col ">
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}} className='w-[46%]  max-sm:w-[95%] h-[350px] rounded-3xl border-[0.25px] border-[#313131] bg-[#272727]'>
                        <ul className='list-disc ml-8 max-xl:ml-1 mt-6 text-[#C2C2B3] '><p className='text-[gray]'>WEBSITE DEVELOPMENT</p>
                        <div className='ml-10 mt-3 w-[245px]'>
                            <li>Custom Website Design and Development </li>
                            <li>Responsive and mobile-friendly website Development</li>
                            <li>E-commerce website Development</li>
                            <li>Content management system (CMS) implementation</li>
                            <li>Website Performance optimization</li>
                            <li>Website maintenance and support</li>
                        </div>
                            
                        </ul>
                    </motion.div>
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}} className='w-[46%] h-[350px]  rounded-3xl max-sm:ml-0 max-sm:mt-6 ml-6 border-[0.25px]  border-[#313131] max-sm:w-[95%] bg-[#272727]'>
                    <ul className='list-disc max-xl:whitespace-normal  ml-8 mt-6 text-[#C2C2B3] '><p className='text-[gray]'>APPLICATION DEVELOPMENT</p>
                        <div className='ml-10 mt-3 w-[245px]'>
                            <li>Custom Application Development </li>
                            <li>Mobile Application development (ios,Android)</li>
                            <li>Cross-platform application development</li>
                            <li>Application modernization and migration</li>
                            <li>Application integration services</li>
                            <li>Application testing and quality assurance</li>
                        </div>
                            
                        </ul>
                    </motion.div>
                    </div>

                    <div className="ml-8 mt-6  max-sm:ml-0 flex flex-1 max-sm:flex max-sm:flex-col">
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}  className='w-[46%] max-sm:w-[90%]   max-sm:ml-5 h-[350px] rounded-3xl border-[0.25px] border-[#313131] bg-[#272727]'>
                    <ul className='list-disc ml-8 mt-6 text-[#C2C2B3] '><p className='text-[gray]'>MAINTENANCE AND SUPPORT</p>
                        <div className='ml-10 mt-3 w-[245px]'>
                            <li>Application Maintenance and bug fixing</li>
                            <li>Software updates and upgrades</li>
                            <li>Performance monitoring and optimization</li>
                            <li>Security patches and vulnerability assessments</li>
                            <li>Helpdesk and technical support services</li>
                            <li>Application enhancement and feature additions</li>
                        </div>
                            
                        </ul>
                    </motion.div>
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}  className='w-[46%] max-sm:w-[90%] h-[350px] max-sm:mt-6 rounded-3xl ml-6 border-[0.25px] border-[#313131] bg-[#272727] max-sm:'>
                    <ul className='list-disc ml-8 mt-6 text-[#C2C2B3] '><p className='text-[gray]'>SOFTWARE TESTING</p>
                        <div className='ml-10 mt-3 w-[245px]'>
                            <li>Functional testing</li>
                            <li>Regression testing</li>
                            <li>Performance and load testing </li>
                            <li>Security testing</li>
                            <li>Usability and user experience testing</li>
                            <li>automated testing</li>
                            <li>Test case design and execution</li>
                        </div>
                            
                        </ul>
                    </motion.div>
                    </div>
                </div>
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}  className="">
                    <p className="absolute right-28 max-sm:top-[1070px]  max-sm:right-[330px] top-40"><img src={star2} alt="" /></p>
                    <p className="absolute left-[550px] max-sm:left-24 max-sm:text-3xl max-sm:top-[1075px] max-xl:text-4xl max-xl:top-[165px] text-7xl font-bold">MY OFFERINGS</p>
                    <p className="absolute max-xl:right-[490px] max-sm:top-[1070px]  max-sm:right-10 right-[750px] top-40"><img src={star2} alt="" /></p>
                </motion.div>
            </div>
        
            <div className="flex flex-3 max-sm:flex max-sm:flex-col ">
            <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}  className="w-[270px] border-[0.25px] border-[#313131] max-sm:w-[100%] max-sm:mt-[120px] h-[240px] mt-6 rounded-3xl bg-[#1A1A1A]">
                    <div className='w-[220px] h-[130px] flex rounded-3xl mt-8 ml-6 bg-[#171717] border-[0.25px] border-[#313131] max-sm:w-[90%] max-sm:ml-4'>
                        <div className='w-20 h-20 hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full border-[0.25px] border-[#313131] left-5 max-sm:left-16 relative bg-[#1A1A1A]'>
                        <a target='_blank' href='https://linkedin.com/in/danssinia'><FaLinkedin className='text-[40px]  absolute top-5 left-5'/></a>
                        </div>
                        <div className='w-20 h-20 hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 max-sm:left-24 rounded-full left-10 relative bg-[#1A1A1A] border-[0.25px] border-[#313131]'>
                        <a target='_blank' href='https://github.com/Danssinia'><FaGithub className='text-[40px]  absolute top-5 left-5'/></a>
                        </div>
                    </div>
                    <div className='flex flex-1'>
                        <div>
                        <p className="pl-5 mt-4 text-[gray] text-sm">STAY WITH ME</p>
                        <p className="pl-5 text-xl font-bold">Profiles</p>
                        </div>
                        <div className='relative left-10 text-3xl mt-6 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[95px]'>
                            <Link to='/myportfolio/contact'><FaRegArrowAltCircleRight/></Link>
                            </div>
                    </div>
                        
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}  className='w-[560px] h-[240px] max-sm:w-[100%] max-sm:ml-0  mt-6 rounded-3xl ml-6 bg-[#1A1A1A] border-[0.25px] border-[#313131]'>
                    <img src={icon2} alt="" className='ml-8'/>
                    <div className='flex flex-1'>
                        <div>
                        <p className='mt-2 max-sm:text-4xl max-sm:mt-8 ml-8 text-5xl'>Let's</p>
                    <p className='ml-8 max-sm:text-4xl  text-5xl'>work <span className='text-[#0A58CA]'>together.</span></p>
                        </div>
                        <div className='relative left-10 text-3xl mt-[110px] text-[gray] hover:text-white m-auto max-sm:mt-24 transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[20px]'>
                            <Link to='/myportfolio/contact'><FaRegArrowAltCircleRight/></Link>
                            </div>
                    </div>
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}  className="w-[270px] h-[240px] max-sm:w-[100%] max-sm:ml-0 border-[0.25px] border-[#313131] bg-[#1A1A1A] mt-6 ml-6 rounded-3xl">
                        <img src={sign} alt="" className="ml-4 max-sm:ml-16 mt-8"/>
                        <div className='flex flex-1'>
                            <div>
                            <p className="pl-5 mt-4 text-[gray] text-sm">MORE ABOUT ME</p>
                        <p className="pl-5 text-xl font-bold">Credentials</p>
                            </div>
                            <div className='relative left-10 text-3xl mt-6 text-[gray] hover:text-white m-auto max-sm:mt-6 transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[90px]'>
                            <Link to='/myportfolio/contact'><FaRegArrowAltCircleRight/></Link>
                            </div>
                        </div>
                        
                    </motion.div>
            </div>
        </div>
     );
}
 
export default Services;