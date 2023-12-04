import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import {CiLocationOn} from 'react-icons/ci'
import {FiMail} from 'react-icons/fi'
import {FiPhone} from 'react-icons/fi'
import {motion} from 'framer-motion'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const notify = () => toast("Message Sent Successfully!");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bus3227', 'template_ske5x6s', form.current, 'Hw4w53hmEpyCfvMhW')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <div className="max-w-[90%]  mt-16 m-auto">
            <div className="flex flex-1 max-sm:flex max-sm:flex-col">
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.7}} className="w-[370px]  rounded-3xl bg-[#0F0F0F] ">
                    <div className='flex flex-col'>
                    <div className='w-[370px]  rounded-3xl bg-[#0F0F0F] mr-6 '>
                    <p className='mb-6 font-semibold text-lg'>CONTACT INFO</p>
                        <div className='flex'>
                            <div>
                            <p className='w-[70px] h-[70px] rounded-lg bg-[#202020]'><FiMail className='relative top-4 left-4 text-4xl'/></p>
                            </div>
                            <div className='ml-6'>
                                <p className='text-[#666666]'>MAIL ME</p>
                                <p className='text-lg text-[#CFC7AE]'>danmerethio19@gmail.com</p>
                            </div>    
                        </div>

                        <div className='flex mt-[70px]'>
                        <div>
                            <p className='w-[70px] h-[70px] rounded-lg bg-[#202020]'><FiPhone className='relative top-4 left-4 text-4xl'/></p>
                            </div>
                            <div className='ml-6'>
                                <p className='text-[#666666]'>CONTACT ME</p>
                                <p className='text-lg text-[#CFC7AE]'>+251 921530928</p>
                            </div>  
                        </div>
                        
                        <div className='flex mt-[70px]'>
                        <div>
                            <p className='w-[70px] h-[70px] rounded-lg bg-[#202020]'><CiLocationOn className='relative top-4 left-4 text-4xl'/></p>
                            </div>
                            <div className='ml-6'>
                                <p className='text-[#666666]'>LOCATION</p>
                                <p className='text-lg text-[#CFC7AE]'>Addis Ababa, Ethiopia</p>
                            </div>  
                        </div>
                    </div>
                    
                    <div className='w-[370px] h-[200px] mt-8 rounded-3xl  bg-[#0F0F0F]'>
                    <p className='mt-2 font-semibold text-lg'>SOCIAL INFO</p>
                    <div className='flex'>
                    <div className='w-[90px] h-[90px] ml-16 hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full border-[0.25px] border-[#313131] left-5 relative bg-[#272727]'>
                    <a target='_blank' href='https://linkedin.com/in/danssinia'><FaLinkedin className='text-[40px]  absolute top-6 left-6'/></a>
                        </div>
                        <div className='w-[90px] h-[90px] hover:bg-[#E8E8E8] hover:text-black cursor-pointer top-6 rounded-full left-10 relative bg-[#272727] border-[0.25px] border-[#313131]'>
                        <a target='_blank' href='https://github.com/Danssinia'><FaGithub className='text-[40px]  absolute top-6 left-6'/></a>
                        </div>
                    </div>
                    </div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0, scale:0.1}} animate={{opacity:1,scale:1}}
        transition={{duration:0.7}} className="w-[66%] rounded-3xl relative  left-6  bg-[#161616] border-[0.25px] border-[#313131] max-sm:w-[100%] max-sm:left-0">
                    <div className="ml-10 max-sm:text-2xl m text-[45px] font-bold  flex">
                        <p className="text-[#FFFFFF] mt-8">Let's work <span className="text-[#0A58CA]"> together.</span></p>
                        <img src="images/icon3.png" alt="" className="pl-[190px] max-sm:pl-[180px] " />
                    </div>
                    
                    <div className="mt-6 flex flex-col  w-[650px] ml-10 max-sm:w-[90%] max-sm:ml-5">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' className="outline-none h-14 pl-8 w-full bg-[#252525] rounded-lg mb-3 p-2" placeholder="Name*" required />
                        <input type="email" name='user_email' className="outline-none h-14 p-8 w-full bg-[#252525] rounded-lg mb-3" placeholder="Email*" required/>
                        <input type="text" name='user_subject' className="outline-none h-14 p-8 bg-[#252525] rounded-lg w-full mb-3" placeholder="Your Subject*" required/>
                        <textarea rows={7} cols={81} name='message' className="outline-none p-2 bg-[#252525] pl-8 rounded-lg max-sm:w-[335px] mb-3" placeholder="Your Message"></textarea>
                        <button onClick={notify} className="w-[200px] max-sm:mb-6 hover:text-black hover:bg-white bg-[#252525] p-3 rounded-lg text-">Send Message
                        <ToastContainer />
                        </button>
                    </form>
                    </div>
                </motion.div>
                
            </div>
        
            
        </div>
     );
}
 
export default Contact;