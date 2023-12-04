import {RiComputerLine } from 'react-icons/ri'
import {CiMobile1} from 'react-icons/ci'
import {FaTools} from 'react-icons/fa'
import {GoDatabase} from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {motion} from 'framer-motion'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import dan from '../images/dan.jpg'
import my_works from '../images/my_works.png'
import sign from '../images/sign.png'
import resume from '../images/resume.png'
import icon2 from '../images/icon2.png'
const Home = () => {
    const [animationTriggered, setAnimationTriggered] = useState(true);
    const handleClick = () => {
        const cvFile = 'Danssinia CV.pdf';
        const link = document.createElement('a');
        link.href = `${cvFile}`;
        link.download = cvFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return ( 
        <div className="max-w-[90%]  mt-16 m-auto">
        
            <div className="flex flex-1 max-sm:flex max-sm:flex-col max-xl:flex max-xl:flex-col ">
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[50%] max-xl:w-[100%] h-[300px] border-[0.25px] border-[#313131] flex border-1  rounded-3xl max-sm:w-[100%] max-sm:flex max-sm:flex-col max-sm:h-[450px]  bg-[#1A1A1A]">
                    <div>
                    <img src={dan} alt='dan'  width={230} className="ml-14 mt-10 max-sm:ml-[70px] rounded-ss-3xl rounded-ee-3xl" />
                    </div>
                    <div className="ml-[90px]  mt-20 max-sm:mt-10 max-xl:ml-[36px] max-sm:ml-[40px] text-[gray]">
                    <p className='max-xl:text-xl'> A WEB DEVELOPER</p>
                    <div className='max-sm:flex max-xl:flex max-xl:space-x-2'>
                    <p className="text-3xl max-xl:text-4xl text-white font-bold"> Daniel</p>
                    <p className="text-3xl max-sm:ml-2 max-xl:text-4xl text-white font-bold">Merkebu.</p>
                    </div>
                    <p className='max-xl:text-xl'>I am a Web Developer based in Addis Ababa</p>

                    <p className='text-3xl relative left-[75%] top-4 hover:text-white transition-all duration-300 w-10 h-10 opacity-30 hover:opacity-100 max-sm:left-[86%] max-xl:left-[95%] max-xl:top-16'> <Link to='/myportfolio/about'><FaRegArrowAltCircleRight /></Link></p>

                    </div>
                    
                </motion.div>
                <div className="flex max-sm:flex max-sm:flex-col">
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[270px] max-xl:mt-[90px] max-xl:ml-1 h-[240px] border-[0.25px] max-sm:mt-24 border-[#313131] max-xl:w-[50%] bg-[#1A1A1A] mt-[60px] max-sm:ml-1 ml-6 rounded-3xl max-sm:w-[100%]">
                        <img src={sign} alt="" className="max-sm:m-auto max-sm:mt-8 ml-4 mt-8"/>
                        <div className='flex flex-1'>
                            <div>
                            <p className="pl-5 mt-4 text-[gray] text-sm">MORE ABOUT ME</p>
                            <p className="pl-5 text-xl font-bold">Credentials  </p>
                            </div>
                            <div className='relative left-6 text-3xl mt-6 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-xl:ml-[42%] max-sm:left-[85px]'>
                            <Link to='/myportfolio/about'><FaRegArrowAltCircleRight/></Link>
                            </div>
                        </div>
                       
                    </motion.div>
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}} className="w-[270px] h-[240px] border-[0.25px] border-[#313131] bg-[#1A1A1A] max-sm:mt-6 max-xl:w-[50%] max-xl:mt-[90px] mt-[60px] ml-6 rounded-3xl max-sm:w-[100%] max-sm:ml-1">
                        <img src={my_works} alt=""  className="max-sm:m-auto max-sm:mt-8 ml-4 mt-8"/>
                        <div className='flex flex-1'>
                            <div>
                            <p className="pl-5 mt-4 text-[gray] text-sm">SHOWCASE</p>
                            <p className="pl-5 text-xl font-bold">Projects</p>
                            </div>
                            <div className='relative left-10 text-3xl mt-6 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-xl:ml-[48%] max-sm:left-[105px]'>
                            <Link to='/myportfolio/works'><FaRegArrowAltCircleRight/></Link>
                            </div>
                        </div>
                        
                    </motion.div>
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}  className="border-[0.25px] border-[#313131] overflow-hidden absolute w-[565px] max-xl:w-[90%] max-xl:ml-[0%] max-xl:mt-6 ml-6 h-12 bg-[#1A1A1A] max-sm:ml-0 max-sm:mt-6 max-sm:w-[370px] rounded-3xl">
                        <motion.p animate={{x:['0%','-100%']}} transition={{ease:"linear", duration:8, repeat:'Infinity'}} className="mt-3 ml-6 text-sm whitespace-nowrap text-[gray]">FOR ALL YOUR FREELANCE NEEDS <span className="text-white">I AM AVAILABLE . </span>FOR ALL YOUR FREELANCE NEEDS <span className="text-white">I AM AVAILABLE . </span>FOR ALL YOUR FREELANCE NEEDS <span className="text-white">I AM AVAILABLE . </span>FOR ALL YOUR FREELANCE NEEDS <span className="text-white">I AM AVAILABLE . </span></motion.p>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-3 mt-6 max-sm:flex max-sm:flex-col">
            <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}  className="w-[270px] max-sm:w-[100%] max-sm:ml-1 h-[240px] border-[0.25px] border-[#313131]  bg-[#1A1A1A] rounded-3xl">
                        <img src={resume} alt="" width={130} className="max-sm:m-auto max-sm:mt-8 ml-16 mt-8"/>
                        <div className='flex flex-1'>
                            <div>
                            <p className="pl-5 mt-4 text-[gray] text-sm">MY CV</p>
                            <p className="pl-5 text-xl font-bold">Download</p>
                            </div>
                            <div className='relative left-10 text-3xl mt-6 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[95px]'>
                            <button onClick={handleClick}><FaRegArrowAltCircleRight/></button>
                            </div>
                        </div>
            </motion.div>
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}  className="w-[550px] max-sm:w-[100%] max-sm:ml-1 max-sm:mt-6 border-[0.25px] border-[#313131]  rounded-3xl h-[240px] ml-6 bg-[#1A1A1A]">
                    <div className='flex flex-row max-sm:gap-6 max-sm:ml-12 gap-16 text-[50px] mt-20 mb-12 ml-20'>
                        <RiComputerLine/>
                        <CiMobile1 />
                        <FaTools />
                        <GoDatabase />
                    </div>
                    <div className='flex flex-1'>
                        <div>
                        <p className="pl-5  text-[gray] text-sm">SPECIALIZATION</p>
                        <p className="pl-5 text-xl font-bold">Services Offering</p>
                        </div>
                        <div className='relative left-36 text-3xl mt-2 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[64px]'>
                            <Link to='/myportfolio/services'><FaRegArrowAltCircleRight/></Link>
                            </div>
                    </div>
                       
                </motion.div>
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}  className="w-[270px] max-sm:w-[100%] max-sm:ml-1 max-sm:mt-6 border-[0.25px] border-[#313131] h-[240px] ml-6 rounded-3xl bg-[#1A1A1A]">
                    <div className='w-[220px] h-[130px] flex rounded-3xl mt-8 ml-6 bg-[#171717] border-[0.25px] border-[#313131] max-sm:w-[90%] max-sm:ml-4'>
                        <div className='w-20 h-20 max-sm:ml-[15%] hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full border-[0.25px] border-[#313131] left-5 relative bg-[#1A1A1A]'>
                        <a target='_blank' href='https://linkedin.com/in/danssinia'><FaLinkedin className='text-[40px]  absolute top-5 left-5'/></a>
                        </div>
                        <div className='w-20 h-20 hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full left-10 relative bg-[#1A1A1A] border-[0.25px] border-[#313131]'>
                            <a target='_blank' href='https://github.com/Danssinia'><FaGithub className='text-[40px]  absolute top-5 left-5'/></a>
                        </div>
                    </div>
                    <div className='flex flex-1'>
                        <div>
                        <p className="pl-5 mt-4 text-[gray] text-sm">STAY WITH ME</p>
                        <p className="pl-5 text-xl font-bold">Profiles</p>
                        </div>
                        <div className='relative left-10 text-3xl mt-6 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[98px]'>
                            <Link to='/myportfolio/contact'><FaRegArrowAltCircleRight/></Link>
                            </div>
                    </div>
                        
                </motion.div>
            </div>
            <div className='flex flex-2 max-sm:flex max-sm:flex-col'>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}  className='w-[560px] h-[230px] max-sm:h-[640px] max-sm:w-[100%] mt-6 rounded-3xl flex bg-[#1A1A1A] border-[0.25px] border-[#313131] max-sm:flex max-sm:flex-col' >
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.2}}  className='w-[150px] h-[175px] max-sm:w-[90%] max-sm:ml-5 rounded-3xl relative top-7 bg-[#171717] border-[0.25px] border-[#313131] ml-7'>
                        <p className='text-3xl max-sm:ml-32 font-bold mt-12 ml-12 mb-2'>+3</p>
                        <p className='text-xs max-sm:ml-32 text-[gray] ml-12 '>YEARS OF</p>
                        <p className='text-xs max-sm:ml-32 text-[gray] ml-11'>EXPERIENCE</p>
                    </motion.div>
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.2}} className='w-[150px] h-[175px] max-sm:w-[90%] max-sm:ml-5 max-sm:mt-6 rounded-3xl relative top-7 bg-[#171717] border-[0.25px] border-[#313131] ml-6'>
                        <p className='text-3xl max-sm:ml-32 font-bold mt-12 ml-12 mb-2'>+3</p>
                        <p className='text-xs max-sm:ml-32 text-[gray] ml-12 '>CLIENTS</p>
                    </motion.div>
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.2}} className='w-[150px] h-[175px] max-sm:w-[90%] max-sm:ml-5 max-sm:mt-6 rounded-3xl relative top-7
                    bg-[#171717] border-[0.25px] border-[#313131] ml-6'>
                        <p className='text-3xl max-sm:ml-32 font-bold mt-12 ml-12 mb-2'>+7</p>
                        <p className='text-xs max-sm:ml-32 text-[gray] ml-14 '>TOTAL</p>
                        <p className='text-xs max-sm:ml-32 text-[gray] ml-11'>PROJECTS</p>
                    </motion.div>
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className='w-[560px] max-sm:w-[100%] max-sm:ml-1 max-sm:mt-6 h-[230px] mt-6 rounded-3xl ml-6 bg-[#1A1A1A] border-[0.25px] border-[#313131]'>
                    <img src={icon2} alt="" className='ml-8'/>
                    <div className='flex flex-1'>
                        <div>
                        <p className='mt-2 ml-8 max-sm:text-4xl text-5xl'>Let's</p>
                        <p className='ml-8 text-5xl max-sm:text-4xl'>work <span className='text-[#0A58CA]'>together.</span></p>
                        </div>
                        <div className='relative left-16 text-3xl mt-20 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[25px] max-sm:mt-14'>
                            <Link to='/myportfolio/contact'><FaRegArrowAltCircleRight/></Link>
                            </div>
                    </div>
                    
                </motion.div>
            </div>
        </div>
     );
}
 
export default Home;