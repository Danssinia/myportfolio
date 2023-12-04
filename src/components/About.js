import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {motion} from 'framer-motion'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import dan from '../images/dan.jpg'
import icon2 from '../images/icon2.png'
import sign from '../images/sign.png'
import star2 from '../images/star2.png'
const About = () => {
    const [animationTriggered, setAnimationTriggered] = useState(true);
    return ( 
        <div className="max-w-[90%]  mt-16 m-auto">
            <div className="flex flex-1 max-sm:flex max-sm:flex-col">
                <motion.div 
                initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}
                 className="w-[370px] h-[370px] rounded-3xl bg-[#1A1A1A] border-[0.25px] border-[#313131]">
                    <img src={dan} alt="dan" width={325} className="ml-6 mt-6 rounded-ss-3xl rounded-ee-3xl"/>
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[66%] h-[273px] max-sm:h-[310px] max-sm:w-[100%] max-sm:left-0 max-sm:top-20 rounded-3xl relative  left-6 top-24 bg-[#1A1A1A] border-[0.25px] border-[#313131]">
                    <img src={icon2} alt="" className="ml-8"/>
                    <div className="ml-8 mt-6 ">
    
                    <p className="text-4xl font-bold mb-2">Daniel Merkebu</p>
                    <p className="text-[gray] text-lg ">A full-stack developer who loves building innovative web and mobile applications. Developer fascinated by emerging technologies and Curious developer who thrives on continuous learning.</p>
                      
                    </div>
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}}className="">
                    <p className="absolute right-28 top-40 max-sm:top-[525px]  max-sm:right-[330px]"><img src={star2} alt="" /></p>
                    <p className="absolute left-[550px] text-7xl font-bold max-sm:left-[90px] max-sm:top-[530px] max-sm:text-3xl max-xl:text-4xl max-xl:top-[165px] ">SELF-SUMMARY</p>
                    <p className="absolute max-sm:top-[525px] max-xl:right-[470px] max-sm:right-10 right-[750px] top-40"><img src={star2} alt="" /></p>
                </motion.div>
            </div>


            <div className='flex flex-1 max-sm:flex max-sm:flex-col max-sm:mt-28 mt-6'>
            <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[49%] max-sm:w-[100%] rounded-3xl bg-[#1A1A1A] border-[0.25px] border-[#313131]">
                    <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} className='ml-8 mt-8 font-bold text-lg'>SKILLS</motion.p>
                    <div className='flex flex-1 mt-4 ml-8 space-x-[50%]'>
                    <div>

                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray]'>95%</p>
                                <p  className='font-bold'>HTML</p>
                            </motion.p>
                            
                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray] mt-4'>85%</p>
                                <p className='font-bold'>CSS</p>
                            </motion.p>

                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray] mt-4'>80%</p>
                                <p className='font-bold'>JAVASCRIPT</p>
                            </motion.p>
                            
                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray] mt-4'>90%</p>
                                <p className='font-bold mb-6'>WORDPRESS</p>
                            </motion.p>
                            
                        </div>
                        <div>
                        <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray]'>80%</p>
                                <p  className='font-bold'>PHP</p>
                            </motion.p>
                            
                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray] mt-4'>85%</p>
                                <p className='font-bold'>REACT.JS</p>
                            </motion.p>

                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray] mt-4'>85%</p>
                                <p className='font-bold'>NODE.JS</p>
                            </motion.p>
                            
                            <motion.p initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:1.4}} >
                                <p className='text-[gray] mt-4'>80%</p>
                                <p className='font-bold mb-6'>LARAVEL</p>
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[49%] max-sm:w-[100%] max-sm:left-0 max-sm:top-8 rounded-3xl relative  left-6 bg-[#1A1A1A] border-[0.25px] border-[#313131]">
                    <div className="ml-8 mt-8 ">
                        <p>
                    <p className=" font-bold text-lg mb-3">CERTIFICATES</p>
                    <p className="text-[gray]">1 Aug 2023</p>
                    <p className="text-lg font-bold">Become a Full-stack Developer</p>
                    <p className="text-sm text-[gray]">CodeRed EC-Council</p>
                        </p>
                    <p className="text-[gray] mt-3 ">1 Aug 2023</p>
                    <p className="text-lg font-bold">The Complete Full-Stack JavaScript Course</p>
                    <p className="text-sm text-[gray]">CodeRed EC-Council</p>

                    <p className="text-[gray] mt-3 ">14 Jul 2023</p>
                    <p className="text-lg font-bold">The Complete Front-end Web Development Course</p>
                    <p className="text-sm text-[gray] max-sm:mb-6">CodeRed EC-Council</p>
                    </div>
                </motion.div>
            </div>


            <div className="flex flex-1 max-sm:flex max-sm:flex-col max-sm:mt-10">
            <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[600px]  max-sm:mt-6 mt-6 border-[0.25px] border-[#313131]  border-1  rounded-3xl max-sm:w-[100%] bg-[#1A1A1A]">
                    <p className="ml-8 mt-8 font-bold text-lg mb-1">EXPERIENCE</p>
                    <div className="ml-8">
                    <p className="text-[gray] text-lg mb-1">2022 - PRESENT</p>
                    <p className="text-xl font-bold">Junior Cryptography Researcher</p>
                    <p className="text-sm text-[gray]">Information Network Security Administration (INSA)</p>
                    
                    </div>
                    <div className="mt-6 ml-8">
                    <p className="text-[gray] text-lg mb-1">2020 - PRESENT</p>
                    <p className="text-xl font-bold">Full-stack Web Developer</p>
                    <p className="text-sm text-[gray] max-sm:mb-6">Freelance</p>
                    
                    </div>
                    
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} whileInView={{scale:1}} transition={{duration:0.8}} className="w-[600px] max-sm:w-[100%] max-sm:ml-0 mt-6 ml-6 border-[0.25px] border-[#313131]  border-1  rounded-3xl  bg-[#1A1A1A]">
                <p className="ml-8 mt-8 font-bold text-lg mb-1">EDUCATION</p>
                    <div className="ml-8">
                    <p className="text-[gray] text-lg mb-1">2018 - 2022</p>
                    <p className="text-xl font-bold">Bachelor Degree in Computer Science</p>
                    <p className="text-sm text-[gray]">BahirDar University</p>
                    <p className='max-sm:mb-6'>I completed my Bachelor of Science degree in Computer Science from BahirDar University. During my studies, I gained a strong foundation in key topics such as programming, data structures, algorithms, software engineering, databases, networks and cybersecurity.</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-3 max-sm:flex max-sm:flex-col">
            <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[270px] border-[0.25px] border-[#313131] h-[240px] mt-6 rounded-3xl bg-[#1A1A1A] max-sm:w-[100%]">
                    <div className='w-[220px] h-[130px] max-sm:flex max-sm:w-[90%] max-sm:ml-4 max-xl:ml-3 max-xl:mr-3 max-sm:justify-center flex rounded-3xl mt-8 ml-6 bg-[#171717] border-[0.25px] border-[#313131]'>
                        <div className='w-20 h-20 hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full border-[0.25px] border-[#313131]  left-5 relative max-sm:left-0 bg-[#1A1A1A]'>
                        <a target='_blank' href='https://linkedin.com/in/danssinia'><FaLinkedin className='text-[40px]  absolute top-5 left-5'/></a>
                        </div>
                        <div className='w-20 h-20 hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full max-sm:left-4 left-10 relative bg-[#1A1A1A] border-[0.25px] border-[#313131]'>
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
                transition={{duration:0.8}} className='w-[560px] h-[240px] max-xl:w-[45%] max-sm:w-[100%] max-sm:ml-0 mt-6 rounded-3xl ml-6 bg-[#1A1A1A] border-[0.25px] border-[#313131]'>
                    <img src={icon2} alt="" className='ml-8'/>
                    <div className='flex flex-1 '>
                        <div>
                        <p className='mt-2 max-sm:mt-12 ml-8 max-xl:text-4xl max-sm:text-4xl text-5xl'>Let's</p>
                    <p className='ml-8 text-5xl max-xl:text-4xl  max-sm:text-4xl'>work <span className='text-[#0A58CA]'>together.</span></p>
                        </div>
                        <div className='relative left-16 text-3xl mt-[110px] text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[25px] max-xl:left-[5%] max-sm:mt-24'>
                            <Link to='/myportfolio/contact'><FaRegArrowAltCircleRight/></Link>
                            </div>
                    </div>
                    
                </motion.div>
                <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className="w-[270px] h-[240px] max-sm:w-[100%] max-sm:ml-0 border-[0.25px] border-[#313131] bg-[#1A1A1A] mt-6 ml-6 rounded-3xl">
                        <img src={sign} alt="" className="ml-4 mt-8"/>
                        <div className='flex flex-1'>
                            <div>
                            <p className="pl-5 mt-4 text-[gray] text-sm">MORE ABOUT ME</p>
                            <p className="pl-5 text-xl font-bold">Credentials</p>
                            </div>
                            <div className='relative left-8 text-3xl mt-7 text-[gray] hover:text-white m-auto transition-all duration-300 opacity-30 hover:opacity-100 max-sm:left-[95px]'>
                            <Link to='/myportfolio/about'><FaRegArrowAltCircleRight/></Link>
                            </div>
                        </div>
                        
                    </motion.div>
            </div>
        </div>
     );
}
 
export default About;