import React, {useState} from 'react';
import {Bars3BottomRightIcon, XMarkIcon, BanknotesIcon, BuildingLibraryIcon, UserIcon, BriefcaseIcon, PaperAirplaneIcon} from '@heroicons/react/24/solid'
import {CurrencyDollarIcon} from "@heroicons/react/16/solid";
import {images} from "../utils/constant";


const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <Bars3BottomRightIcon className={`rounded-full p-1 bg-white text-black h-9 w-9 ${!isOpen ? 'flex':'hidden'}`  } onClick={()=>setIsOpen(!isOpen)} />


            <div className={` ${isOpen ? 'flex':'hidden' } text-black absolute top-0 left-0  h-screen bg-white ${isOpen ? 'w-[60%]':'w-[0px]'} transition-all-duration-300`}>
                <XMarkIcon className={`text-black absolute right-[5%] top-[3%] z-20 w-7 h-7 ${isOpen ? 'flex':'hidden' }`} onClick={()=>{setIsOpen(!isOpen)}}/>
              {/*  <div className='h-[15%] w-full bg-[#6935D1] flex justify-center items-center'>
                    <img src={images.logo} className='w-25 h-25' alt=""/>
                </div>*/}
                <div className=' w-full gap-y-10 absolute top-[7%] flex flex-col'>
                   <div className=' space-y-3 flex flex-col'>
                        <a className='hover:text-[#6935D1] pl-4 w-full rounded p-3 gap-x-2 flex' href=""><UserIcon className='w-7 h-7'/>Personal</a>
                        <a className='hover:text-[#6935D1] pl-4 w-full rounded p-3 flex gap-x-2' href=""><BriefcaseIcon className='w-7 h-7' /> Business</a>
                        <a className='hover:text-[#6935D1] pl-4 w-full rounded p-3 gap-x-2 flex' href=""><PaperAirplaneIcon className='w-7 h-7' /> Features</a>
                        <a className='hover:text-[#6935D1] pl-4 w-full rounded p-3 gap-x-2 flex' href=""><BanknotesIcon className='w-7 h-7'/> pricing</a>
                        <a className='hover:text-[#6935D1] pl-4 w-full rounded p-3 gap-x-2 flex' href=""><BuildingLibraryIcon className='w-7 h-7'/> Company Formation</a>





                   </div>
                    <div className='flex flex-col space-y-2'>
                        <button className=' text-white  rounded-full font-bold  h-10 px-3 lg:px-6  bg-[#6935D1]'>
                            Register
                        </button>
                        <button className='  rounded-full h-10 px-3 lg:px-6 font-bold  border border-[#6935D1] hover:bg-[#ffffff] text-[#6935D1]'>
                            Login
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideBar;