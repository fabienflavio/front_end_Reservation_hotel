import { MenuIcon } from 'lucide-react'
import ImgLogo from '../../assets/Logo.png'
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Menu from './Menu';
import { Button } from '../ui/button';


type Props = {}

export default function Header({}: Props) {
    const [menu,setMenu] = useState(false)

  return (
    <div>
        <div className='flex justify-between border-2 p-4 items-center '>
            <div >
                <img src={ImgLogo} className='w-10 h-10 inline-block' alt="" />
                <span className='inline-block'>Mayanna</span>
            </div>
            <div className=' lg:hidden'>
                {
                   menu ?   <FaTimes  onClick={() => setMenu(!menu) } /> : <MenuIcon onClick={() => setMenu(!menu) } /> 
                }
                {
                     <div className= {`transition-all transition-normal ${menu ? "opacity-100 flex" : "opacity-0 hidden" } bg-black absolute mt-2 border-2 p-4 sm:p-8 gap-2 right-4  flex-col items-end `}>
                       
                       
                        <div className='flex flex-col justify-center items-center w-full' >
                            <Menu />
                        </div>
                        <div className='border-1 w-full mt-4'></div>
                        <div className='flex flex-col gap-4 sm:mt-4'>
                            <Button>Login</Button>
                            <Button variant="secondary" className='m'>Register</Button>
                        </div>
                      
                    </div>
                } 
               
            </div>
            <div className='lg:flex hidden'>
                        <div className='flex flex-row justify-center items-center  gap-4' >
                            <Menu />
                        </div>
                        <div className='border-1 mx-4 border-gray-400'></div>
                        <div className='flex flex-row gap-4'>
                            <Button>Login</Button>
                            <Button variant="secondary" className='m'>Register</Button>
                        </div>
            </div>
        </div>
    </div>
  )
}