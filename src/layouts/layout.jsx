import React, {useState} from 'react';
import {images,icons} from "../utils/constant";
import '@fontsource/inter/700.css'
import '@fontsource/roboto/700.css'


import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import SideBar from "../components/sidebar";
import HeaderTitle from "../components/header_tile";
import ServiceTile from "../components/service_tile";
import Spacer from "../components/spacer";


const Layout = () => {

    const [isOpen, setIsOpen] = useState(false);


    const backgroundImage = {
        '/index' : images.homebg,
        '/about' : images.homebg,
    }

    return (
        <div className=''>

            {/*Navigation Section*/}
            <div className='relative h-screen w-full' >
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(27,25,39,0.9) 28%, transparent 100%)',
                    }}
                />
                <div className='absolute h-full w-full bg-no-repeat z-1' style={{backgroundImage: `url(${images.blendbg})`,backgroundBlendMode:'overlay' }}></div>

                <div className='absolute h-full w-full bg-cover bg-no-repeat' style={{backgroundImage: `url(${images.homebg})`,backgroundBlendMode:'overlay' }}></div>

                <nav className='flex justify-between items-center absolute text-white w-full  z-15 px-[6%] '>


                   <div className='flex-shrink-0 pt-6'>
                       <img
                           src={images.logo}
                           alt="Your Company Name"
                           className="logo-image "
                           width={150}  // Set your desired width
                           height={100} // Set proportional height
                           loading="lazy"
                       />
                   </div>
                    {/*for Desktop View*/}
                    <div className='hidden pt-7 space-x-4 md:flex items-center '>
                        <div className=' md:flex space-x-4'>
                            <a className='p-3 hover:text-[#6935D1]' href="">Personal</a>
                            <a className='p-3 hover:text-[#6935D1]' href="">Business</a>
                            <a className='p-3 hover:text-[#6935D1]' href="">Features</a>
                            <a className='p-3 hover:text-[#6935D1]' href="">Pricing</a>
                            <a className='p-3 hover:text-[#6935D1]' href="">Company Formation</a>
                        </div>

                    </div>
                    <div className=' hidden pt-7 space-x-2 md:flex items-center'>
                        <button className='  rounded-full h-8 px-3 lg:px-6  bg-[#6935D1]'>
                            Register
                        </button>
                        <button className='  rounded-full h-8 px-3 lg:px-6  border border-white hover:bg-[#ffffff] hover:text-black'>
                            Login
                        </button>
                    </div>


                    {/*For Mobile view*/}
                    <div className= ' md:hidden lg:hidden'>
                        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

                    </div>


                </nav>

               <div className='absolute z-10 top-[30%] left-[4%]  text-white '>
                   <p className='max-w-[300px] min-w-[150px]  md:max-w-[600px] font-black text-2xl md:text-5xl pb-[10%]' style={{fontFamily: 'roboto, sans-serif'}}>Borderless Banking Reinvented</p>
                   <p className='min-w-[150px]  max-w-[300px]  md:max-w-[450px]  md:text-xl   text-l pb-[5%]' style={{fontFamily: 'roboto, sans-serif'}}>Receive payments from 180+ countries, Convert and Send in 58+ currencies, and Save by paying like a local to 22 countries.</p>

                  {/* <p className='min-w-[20%]  max-w-[50%]     text-xl pb-[5%]' style={{fontFamily: 'roboto, sans-serif'}}>Receive payments from 180+ countries, Convert and Send in 58+ currencies, and Save by paying like a local to 22 countries.</p>*/}


                   <button className=' absolute rounded-full px-[10%] py-[3%] bg-[#6935D1]'>
                      Open an Account
                   </button>

               </div>
            </div>

            {/*section 1*/}

            <div className='bg-[#f5f5f5] flex  w-full flex-col md:flex-row'>
                <div className='py-4 flex-1 flex flex-col text-center items-center justify-center bg-gray border border-[#e6e6e6]'>
                   <img src={icons.transferIcon} className='my- w-15 h-15' alt=""/>
                    <div className='mt-4 space-y-2'>
                        <p className='md:text-2xl text-xl font-black'>Personal Transfer</p>
                        <p className='max-w-[250px] text-[#a9a9a9] '>Swiftly Send and Receive Money Online from any part of the world at ease </p>
                    </div>

                </div>
                <div className='py-4 flex-1 flex flex-col text-center items-center justify-center bg-gray border border-[#e6e6e6]'>
                    <img src={icons.secureIcon} className='my- w-15 h-15' alt=""/>
                    <div className='mt-4 space-y-2'>
                        <p className='md:text-2xl text-xl font-black'>3D Secure</p>
                        <p className='max-w-[250px] text-[#a9a9a9] '>Secure your account using our Fast and Secured OTP technology.  </p>
                    </div>

                </div>
                <div className='py-4 flex-1 flex flex-col text-center items-center justify-center bg-gray border border-[#e6e6e6]'>
                    <img src={icons.businessIcon} className='my- w-15 h-15' alt=""/>
                    <div className='mt-4 space-y-2'>
                        <p className='md:text-2xl text-xl font-black'>Business Transfers</p>
                        <p className='max-w-[250px] text-[#a9a9a9] '>Enable your Business to Swiftly Send and Receive Payment across the world   </p>
                    </div>

                </div>

            </div>

            <Spacer/>

            <div className=' w-full m-auto'>
                <HeaderTitle title={"Our Services"}/>
                <div className=' relative flex items-center justify-center flex-col md:gap-x-4 gap-y-4 md:flex-row md:px-4 px-9'>
                    <ServiceTile title='Transfer' image={images.transferService} action={'Send Money'} content={"Support your loved ones globally with your Radiant Money Multi-currency account."}/>
                    <ServiceTile title='Digital Wallet' image={images.cardService} action={'Create Wallet'} content={"We Offer Digital Wallet where you can Store both Fiat and Digital Currencies. Our Digital Wallet Offers 3D security"}/>
                    <ServiceTile title='Exchange' image={images.investmentService} action={'Swap '} content={"We swap all currency; Fiat or Crypto currency at the best rate in the digital Market. Swap the Radiant Way"}/>
                </div>
            </div>


        </div>


    );
};

export default Layout;