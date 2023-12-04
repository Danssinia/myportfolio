import {motion} from 'framer-motion'
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import project1 from '../images/project1.jpeg'
import project2 from '../images/project2.jpeg'
import project3 from '../images/project3.jpeg'
import project4 from '../images/project4.jpeg'
import project5 from '../images/project5.jpeg'
import project6 from '../images/project6.jpeg'
const Works = () => {
    const [animationTriggered, setAnimationTriggered] = useState(true);
    return ( 
        <div className="max-w-[90%]  mt-16 m-auto">
            <div className="flex flex-1 max-sm:flex max-sm:flex-col">
                <div className="w-[370px] h-[920px] rounded-3xl bg-[#0F0F0F] ">
                    <div className='grid grid-rows-2'>
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}} className='w-[370px] h-[443px] rounded-3xl border-[0.25px] border-[#313131] bg-[#161616] mr-6 '>
                        <div>
                        <img src={project1} width={340} alt="" className='rounded-3xl mt-6 ml-4'/>
                        </div>
                        <div>
                        <ul className='list-disc ml-6 mt-6 text-[#C2C2B3] '>
                            <div className='flex flex-1'>
                                <div>
                                <p className='text-[gray] text-sm'>WEB DESGNING</p>
                                <p className='text-2xl font-bold'>Dynamic</p>
                                </div>
                                <div className='relative left-[80px] text-3xl  mt-[28px] text-[gray] hover:text-white m-auto max-sm:mt-8  transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[70px]'>
                                <Link to=''><FaRegArrowAltCircleRight/></Link>
                                </div>
                            </div>
                        </ul>
                        </div>
                        
                        
                    </motion.div>
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className='w-[370px] h-[443px] rounded-3xl border-[0.25px] border-[#313131] bg-[#161616] mr-6 mt-4'>
                        <div>
                        <img src={project2} width={280} alt="" className='rounded-3xl mt-4 ml-12'/>
                        </div>
                        <div>
                        <ul className='list-disc ml-6 mt-6 text-[#C2C2B3] '>
                            <div className='flex flex-1'>
                                <div>
                                <p className='text-[gray] text-sm'>PHOTOGRAPHY</p>
                                <p className='text-2xl font-bold'>Diesel H1</p>
                                </div>
                                <div className='relative left-[80px] text-3xl  mt-[28px] text-[gray] hover:text-white m-auto max-sm:mt-8  transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[70px]'>
                                <Link to=''><FaRegArrowAltCircleRight/></Link>
                                </div>
                            </div>
                        
                        </ul>
                        </div>
                        
                        
                    </motion.div>
                    </div>
                </div>
                <div className="w-[66%] max-sm:w-[100%] max-sm:left-0 max-sm:top-6  rounded-3xl relative  left-6 top-24 bg-[#0F0F0F]">
                    <div className="flex flex-1 max-sm:flex max-sm:flex-col">
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}} transition={{duration:0.8}} className='w-[51%] max-sm:w-[100%] h-[400px] rounded-3xl border-[0.25px] border-[#313131] bg-[#161616] mr-6 '>
                        <div>
                        <img src={project3} width={330} alt="" className='rounded-3xl mt-4 ml-4'/>
                        </div>
                        <div>
                        <ul className='list-disc ml-6 mt-2 text-[#C2C2B3] '>
                            <div className='flex flex-1'>
                                <div>
                                <p className='text-[gray] text-sm'>MOBILE DESGNING</p>
                                <p className='text-2xl font-bold'>Seven Studio</p>
                                </div>
                                <div className='relative left-[60px] text-3xl  mt-[28px] text-[gray] hover:text-white m-auto max-sm:mt-8  transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[50px]'>
                                <Link to=''><FaRegArrowAltCircleRight/></Link>
                                </div>
                            </div>
                        
                        </ul>
                        </div>
                        
                        
                    </motion.div>
                    <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}} transition={{duration:0.8}} className='w-[51%] max-sm:w-[100%] max-sm:mt-6 h-[400px] rounded-3xl border-[0.25px] border-[#313131] bg-[#161616]'>
                        <div>
                        <img src={project4} width={330} alt="" className='rounded-3xl mt-4 ml-4'/>
                        </div>
                        <div>
                        <ul className='list-disc ml-6 mt-2 text-[#C2C2B3] '>
                            <div className='flex flex-1'>
                                <div>
                                <p className='text-[gray] text-sm'>BRANDING</p>
                                <p className='text-2xl font-bold'>Raven Studio</p>
                                </div>
                                <div className='relative left-[60px] text-3xl  mt-[28px] text-[gray] hover:text-white m-auto max-sm:mt-8  transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[50px]'>
                                <Link to=''><FaRegArrowAltCircleRight/></Link>
                                </div>
                            </div>
                        
                        </ul>
                        </div>
                        
                        
                    </motion.div>
                    </div>

                    <div className="mt-6 flex flex-1 max-sm:flex max-sm:flex-col ">
                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className='w-[51%] h-[400px]  rounded-3xl max-sm:w-[100%]  border-[0.25px] border-[#313131]  bg-[#161616] mr-6 '>
                        <div>
                        <img src={project6} width={330} alt="" className='rounded-3xl mt-4 ml-4'/>
                        </div>
                        <div>
                        <ul className='list-disc ml-6 mt-2 text-[#C2C2B3] '>
                            <div className='flex flex-1'>
                                <div>
                                <p className='text-[gray] text-sm'>WEB DESGNING</p>
                                <p className='text-2xl font-bold'>Hydra Merc</p>
                                </div>
                                <div className='relative left-[60px] text-3xl  mt-[28px] text-[gray] hover:text-white m-auto max-sm:mt-8  transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[50px]'>
                                <Link to=''><FaRegArrowAltCircleRight/></Link>
                                </div>
                            </div>
                        
                        </ul>
                        </div>
                    </motion.div>

                    <motion.div initial={animationTriggered ? {scale:0}:{scale:1}} 
                whileInView={{scale:1}}
                onAnimationComplete={() => setAnimationTriggered(false)}
                transition={{duration:0.8}} className='w-[51%] h-[400px] rounded-3xl max-sm:w-[100%] max-sm:mt-6 border-[0.25px] border-[#313131] bg-[#161616]'>
                        <div>
                        <img src={project5} width={330} alt="" className='rounded-3xl mt-4 ml-4'/>
                        </div>
                        <div>
                        <ul className='list-disc ml-6 mt-2 text-[#C2C2B3] '>
                            <div className='flex flex-1'>
                                <div>
                                <p className='text-[gray] text-sm'>MOBILE DESGNING</p>
                                <p className='text-2xl font-bold'>Submarine</p>
                                </div>
                                <div className='relative left-[60px] text-3xl  mt-[28px] text-[gray] hover:text-white m-auto max-sm:mt-8  transition-all  duration-300 opacity-30 hover:opacity-100 max-sm:left-[50px]'>
                                <Link to=''><FaRegArrowAltCircleRight/></Link>
                                </div>
                            </div>
                        
                        </ul>
                        </div>
                    </motion.div>

                    </div>
                </div>
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.8}}>
                    <p className="absolute max-sm:top-[85px]  max-sm:right-[330px] right-28 top-40"><img src="images/star-2.png" alt="" /></p>
                    <p className="absolute  max-sm:left-24 max-sm:text-3xl max-sm:top-[85px] left-[550px] text-7xl font-bold">ALL PROJECTS</p>
                    <p className="absolute max-sm:top-[85px]  max-sm:right-10 right-[750px] top-40"><img src="images/star-2.png" alt="" /></p>
                </motion.div>
            </div>
        
            
        </div>
     );
}
 
export default Works;